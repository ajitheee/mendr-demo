# mendr-demo

A tiny TypeScript service that still calls `gpt-4-0613`, a model OpenAI is
retiring. It exists so the whole Mendr loop can be watched end to end on a real
repository:

1. The `audit` job of `.github/workflows/mendr-audit.yml` scans this repository
   in its own CI on every push, daily, and on demand, and sends only the
   sanitized findings to the Mendr App.
2. The finding for `gpt-4-0613` appears in the App with its evidence, the
   verified replacement, and an **Approve migration** button.
3. Approving it makes the `migrate` job (same file) verify the swap on a
   throwaway copy — type-check, build, `npm test` — push one branch, open one
   pull request, and report each step and the diff back to the finding.
4. The next completed audit confirms the finding resolved once the PR is merged.

Nothing here talks to OpenAI: `npm test` builds the project and checks the
pure prompt helper, which is exactly what Mendr's test gate runs.
