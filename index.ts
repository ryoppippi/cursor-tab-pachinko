#!/usr/bin/env node

import { exec } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import open from 'open';

const COUNTER_FILE = join(tmpdir(), 'cursor-tab-pachinko-count.json');
const ASSETS_DIR = join(import.meta.dirname, 'assets');
const MAX_COUNT = 4; // 0-3 for sounds, 4 triggers URL open
const TARGET_URL = 'https://youtu.be/TgQAFTvbpaI?si=a4iEQsW5p3SvhsSQ&t=1';

async function getCount(): Promise<number> {
	if (existsSync(COUNTER_FILE)) {
		const data = await readFile(COUNTER_FILE, 'utf-8');
		const parsed = JSON.parse(data);
		return parsed.count ?? 0;
	}
	return 0;
}

async function setCount(count: number): Promise<void> {
	await writeFile(COUNTER_FILE, JSON.stringify({ count }));
}

async function playSound(index: number): Promise<void> {
	const soundFile = join(ASSETS_DIR, `${index}.wav`);
	if (existsSync(soundFile)) {
		exec(`afplay "${soundFile}"`);
	} else {
		console.error(`Sound file not found: ${soundFile}`);
	}
}

async function main() {
	const count = await getCount();
	console.log(`Current count: ${count}`);

	if (count >= MAX_COUNT) {
		await open(TARGET_URL);
		await setCount(0);
	} else {
		await Promise.all([setCount(count + 1), playSound(count)]);
		console.log(`New count: ${count + 1}`);
	}
}

await main();
