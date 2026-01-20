import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['./index.ts'],
	outDir: 'dist',
	format: 'esm',
	clean: true,
	sourcemap: false,
	treeshake: true,
	dts: false,
	publint: true,
	unused: true,
	nodeProtocol: true,
	onSuccess: async () => {
		await Bun.$`cp -r ./assets ./dist/assets`;
	},
});
