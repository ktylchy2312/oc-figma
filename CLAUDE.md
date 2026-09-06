# CLAUDE.md

## What this is

`oc-figma` is the OC-Kontrol design system as a repository: Figma dumps in, tokens, component
sheets, working code and a Storybook out. 72 components, 283 variant combinations, 133 tokens.

The governing rule: **the spec is primary, everything else is derived from it.** No file under
`foundations/`, `components/`, `code/` or `_index.json` is hand-written. Editing one is not a
fix — the next build overwrites it. Fix the generator or the dump.

This file is in English on purpose: it loads on every turn, and Cyrillic costs roughly twice
as many tokens per character. Prose for humans goes in `DS-RULES.md` and `README.md`, which
load only when read.

## Layout

| path | what | derived? |
|---|---|---|
| `figma-dump/` | node snapshots, variables, glyphs, font source | no — this is the input |
| `foundations/` | `tokens.json` `tokens.css` `fonts.css` `typography.json` | yes |
| `components/<slug>/` | `spec.json` + `index.html` (variant sheet) | yes |
| `code/<slug>/` | `<slug>.css` `<slug>.html` `<slug>.stories.js` `README.md` | yes |
| `code/_names.json` | frozen part→class map | **half**: generated once, then read; hand-editable |
| `code/base.css` | browser reset for component roots | yes |
| `tools/` | the generators | no |
| `.storybook/` | the viewer over `code/` | no |
| `verify.mjs` `verify-code.mjs` | the two gates | no |

## Commands

```
npm run build       rebuild everything from figma-dump/
npm run build:code  code/ only, the fast loop
npm run verify      three gates: paths, sheets, code
npm run storybook   viewer on localhost:6006
```

`npm run build` is deterministic — a second run byte-for-byte reproduces the first. So
`git diff --exit-code` after it is a working drift test. Keep it that way: **no timestamps in
generated output.** "When was this built" goes to `_build.json` via `tools/stamp.mjs`, and
`_build.json` is gitignored.

## Invariants

- **No script, no network.** Sheets and code carry no `<script>` and no `http` reference. The
  font is embedded as `data:font/woff2`. Both gates render with the network closed and count
  any outbound request as a failure.
- **Nearest token is never substituted.** A value with no Figma variable behind it is emitted
  literally and recorded in `spec.unbound`. `#30313a` is both `--neutral-550` and
  `--surface-raised-pressed`; picking one would decide a role on the designer's behalf. Every
  `unbound` entry becomes exactly one `TODO: unbound` marker in the CSS, and `verify-code.mjs`
  checks the two counts match.
- **Class names are frozen** in `code/_names.json`. Part paths belong to the Figma tree
  (`content/frame-142/frame-5/header-row/signature`), so deriving names from them afresh means
  an inserted sibling silently renames a class on a part nobody touched. New parts get a new
  name; existing ones keep theirs; a mismatch is a warning on stderr, never a silent rename.
- **`AllVariants` stays pinned to the spec.** It is the showcase and the anchor for the size
  check. Controls belong in `Playground` only — a user-supplied label would move the width and
  the comparison against `figmaSize` would start lying.
- **No absolute paths in scripts.** `tools/check-paths.mjs` fails the build on a drive letter,
  `/Users/`, `/home/` or a UNC path. The one legitimate exception — locating Chrome, which
  lives outside the repository — is marked `abs-ok` line by line.

## Gates

`verify.mjs` — 8 checks per sheet. `verify-code.mjs` — 5 checks per component in `code/`.
Both use the **same size tolerances, deliberately**: `0.5px` where the size is written as a
number, `max(1.5px, 1%)` where it is content-driven. Different tolerances in two gates would
mean two different ideas of what "matches" means. If you touch one, touch the other.

Both exit non-zero on failure. A gate that cannot fail is decoration.

CI (`.github/workflows/ci.yml`) rebuilds from `figma-dump/`, requires `git status --porcelain`
to be empty, then runs all three gates. `git status`, not `git diff`: a generator that starts
creating extra files drifts exactly as badly as one that starts changing them. Chrome comes
from `PUPPETEER_EXECUTABLE_PATH`, which both gates check before their built-in path list.

## Where the bridge lives

Not here. Producing a dump needs the Figma bridge, which lives in the `claude-design`
environment (`tools/ds/novo/run-batch.mjs`, `dump-set.js`, `export-vector.js`). Everything
that only reads what is already in the repository lives here. The dividing line is whether a
script needs to talk to Figma.

## Adding a component

1. Snapshot it into `figma-dump/nodes/<Name>.json` with the bridge, from the environment.
2. `npm run build`
3. `npm run verify`

If a generator needed changing, the fix goes in `tools/`, never in the output.
