# @x12i/memorix-skill-adaptive usage example

Adaptive execution for a Memorix process step: count gates, repair allowlisted blocks, and commit one coherent revision.

This consuming application demonstrates **evaluate a quality gate over synthetic execution envelopes** using the published npm package, pinned to `0.2.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Repair allowlisted blocks when a process-step gate fails.
- Commit a coherent revision after an adaptive execution attempt.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-skill-adaptive)
- [Implementation monorepo](https://github.com/x12i/memorix-skills)
- [Reviewed package source](https://github.com/x12i/memorix-skills/tree/7cbf8b24f4de87d0a0a1b6ee738756a804856de2/packages/skill-adaptive)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This consumer uses authored records, local transformations or in-memory ports. It does not execute a skill/model, run a production pipeline, connect to MongoDB, materialize live relationships, acquire provider data or perform an outbound delivery. The in-memory examples do not establish durability across process restarts.
