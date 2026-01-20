# Development Guidelines

This project is distributed via Node.js, so do NOT use Bun-specific APIs.

## Code Style

- Use Node.js standard library (`fs/promises`, `child_process`, `path`, `os`, etc.)
- Do NOT use Bun-specific APIs (`Bun.file`, `Bun.write`, `Bun.$`, etc.)
- Use `import` syntax (ESM)

## Running

You can still use `bun` as a runtime for development:

```sh
bun index.ts
```

But the code must be compatible with Node.js.
