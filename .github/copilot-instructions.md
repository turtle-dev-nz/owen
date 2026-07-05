# Copilot Instructions

- Do not run local app builds unless the user explicitly asks.
- Prefer editor diagnostics and targeted checks over build validation.
- GitHub handles deployment builds for this repo.

## Debug Trace Mode (On-Demand)

- Trigger phrase: `Enable debug trace mode for this issue.`
- Scope: enable temporary runtime logging only for the current problem being investigated.
- Feedback: Advise the user of steps required to reproduce the issue so you can understand the output log.
- Log format: use single-line `console.log(...)` statements only (no multi-line logs).
- Persistence: do not auto-remove debug logs.
- Exit condition: when the user confirms the issue is resolved, return to default behavior and stop adding new debug logs.
