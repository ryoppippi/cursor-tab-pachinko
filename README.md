# cursor-tab-pachinko

[![npm version](https://img.shields.io/npm/v/cursor-tab-pachinko?color=yellow)](https://npmjs.com/package/cursor-tab-pachinko)

A fun hook for Cursor that plays pachinko sounds when you accept tab completions.

After 4 tab completions, it opens a special YouTube video: https://youtu.be/TgQAFTvbpaI?si=a4iEQsW5p3SvhsSQ&t=1

## Setup

### 1. Create hooks directory

```sh
mkdir -p ~/.cursor/hooks
```

### 2. Create the hook script

Create `~/.cursor/hooks/pachinko.sh`:

```sh
#!/bin/sh
bunx cursor-tab-pachinko@latest
```

Or with npm:

```sh
#!/bin/sh
npx cursor-tab-pachinko@latest
```

Make it executable:

```sh
chmod +x ~/.cursor/hooks/pachinko.sh
```

### 3. Configure Cursor hooks

Create or edit `~/.cursor/hooks.json`:

```json
{
	"version": 1,
	"hooks": {
		"afterTabFileEdit": [
			{
				"command": "./hooks/pachinko.sh"
			}
		]
	}
}
```

### 4. Restart Cursor

Restart Cursor to apply the hook configuration.

## How it works

- Each tab completion increments a counter (stored in a temp file)
- Plays a different sound for each count (0-3)
- On the 5th completion, opens the YouTube video and resets the counter

## References

- [Cursor Hooks Documentation](https://cursor.com/docs/agent/hooks)
