# claude-workflow

A Claude Code mod that drives a project workflow (spec, design, slices, build, review, retro) from one command, `/workflow`, and keeps tests locked between writing them and making them pass.

**Status:** skeleton. The design is in [ilianusss/.claude](https://github.com/ilianusss/.claude), `docs/plan.md`, sections 8 and 9.

## Requirements

Claude Code 2.1.308 or later. Mods use an early-access API that may change between releases.

## Install

At the prompt of a Claude Code session:

```text
/plugin install workflow --marketplace ilianusss/claude-workflow
```

In [ilianusss/.claude](https://github.com/ilianusss/.claude) it is a git submodule at `mods/workflow`, loaded from the folder through `CLAUDE_CODE_PLUGIN_DIRS`.

## Development

```sh
claude --plugin-dir .      # a session with the mod loaded, reloaded on save
claude plugin validate .   # what the engine would refuse
claude plugin test .       # runs tests/*.test.ts against the engine
```

The engine writes the API types into `.claude-plugin/types/` each time it loads the mod. They are the reference: the API moves between releases.
