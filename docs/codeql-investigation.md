# CodeQL investigation and failure ownership

## Repository architecture compatibility changes

The repository is a Next.js App Router project with TypeScript and client components. CodeQL was configured with:

- explicit JavaScript/TypeScript language selection
- manual build mode (`npm ci` + `npm run build`) to align analysis with Next.js compilation
- repository-scoped config (`.github/codeql/codeql-config.yml`) that focuses analysis on `app`, `components`, `hooks`, and `lib`
- generated/static artifacts excluded (`.next`, `public`, `node_modules`, `test`)

## Failure ownership model

When CodeQL failures occur, classify them as follows.

### 1) Repository-side failures

Typical signals:

- deterministic reproduction in local/CI branch runs
- failures tied to code patterns in first-party source (`app`, `components`, `hooks`, `lib`)
- build failures caused by project config/code regressions

Action:

- fix code or build configuration in this repository
- rerun CodeQL and validation pipeline

### 2) GitHub Actions / platform-side failures

Typical signals:

- intermittent checkout/action runtime errors
- GitHub-hosted runner incidents
- CodeQL action service outages or transient API failures

Action:

- rerun workflow without repository code changes
- monitor GitHub status and action logs

### 3) Dependency / toolchain failures

Typical signals:

- breakage from upstream package updates
- Node/runtime incompatibilities
- lockfile mismatch or transient registry resolution issues

Action:

- confirm lockfile integrity with `npm ci`
- pin/upgrade affected packages deliberately
- re-run lint/test/build + CodeQL to verify stabilization

## Current status guidance

Use workflow logs to determine ownership for each failing run before changing source code. If build succeeds consistently with `npm ci` and `npm run build`, remaining non-deterministic failures are likely tool/platform-side.
