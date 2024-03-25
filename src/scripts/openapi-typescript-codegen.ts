import { Options, generate } from 'openapi-typescript-codegen';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs, { open } from 'node:fs/promises';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(currentDirectory, '../generated/escrow-service-v1');
const escrowServiceV1: Options = {
	clientName: 'EscrowServiceV1',
	httpClient: 'axios',
	indent: 'tab',
	input: path.join(currentDirectory, '../api/escrow-service.v1.yaml'),
	output,
	useOptions: true,
	useUnionTypes: true,
	request: path.join(currentDirectory, 'request.txt'),
};

await generate(escrowServiceV1);

// FIXME: fork & update openapi-typescript-codegen package to handle these changes

// OpenAPI
// Read without creating a file
const openApiRead = await open(path.join(currentDirectory, 'OpenAPI.txt'), 'r');
const openApiText = await openApiRead.readFile({
	encoding: 'utf8',
	flag: 'r',
});
await openApiRead.close();

// Write
const openApiWrite = await open(path.join(output, 'core/OpenAPI.ts'), 'w');
await openApiWrite.writeFile(openApiText, {
	encoding: 'utf8',
	flag: 'w',
});
await openApiWrite.close();

// EscrowServiceV1
// Read without creating a file
const escrowServiceRead = await open(
	path.join(currentDirectory, 'EscrowServiceV1.txt'),
	'r',
);
const escrowServiceText = await escrowServiceRead.readFile({
	encoding: 'utf8',
	flag: 'r',
});
await escrowServiceRead.close();

// Write
const escrowServiceWrite = await open(
	path.join(output, 'EscrowServiceV1.ts'),
	'w',
);
await escrowServiceWrite.writeFile(escrowServiceText, {
	encoding: 'utf8',
	flag: 'w',
});
await escrowServiceWrite.close();

const regex = /^((import|export).*["'](\.\/|\.\.\/).*)(?=')';$/gm;
const replacement = "$1.js';";

async function processFile(filePath: string) {
	try {
		const data = await fs.readFile(filePath, 'utf8');
		const updatedContent = data.replace(regex, replacement);
		await fs.writeFile(filePath, updatedContent, 'utf8');
		console.log(`Processed file: ${filePath}`);
	} catch (error) {
		console.error('Error processing file:', filePath, error);
	}
}

async function exploreDirectory(dirPath: string) {
	try {
		const entries = await fs.readdir(dirPath, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(dirPath, entry.name);
			if (entry.isDirectory()) {
				await exploreDirectory(fullPath);
			} else if (entry.isFile() && fullPath.endsWith('.ts')) {
				// Only process TypeScript files
				await processFile(fullPath);
			}
		}
	} catch (error) {
		console.error('Error exploring directory:', dirPath, error);
	}
}

exploreDirectory(output)
	.then(() => {
		console.log('Processing completed.');
	})
	.catch((error) => {
		console.error('Unexpected error:', error);
	});
