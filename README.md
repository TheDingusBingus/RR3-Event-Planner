# RR3 Event Planner

Event management web app. React + Vite frontend, Node + Express API, Supabase (Postgres) database. The frontend is hosted on Vercel.

## Structure

```
client/    React + Vite frontend
server/    Express API (db.js holds the Supabase client)
```

## Setup

Requires Node 12 or newer.

```bash
git clone https://github.com/TheDingusBingus/RR3-Event-Planner.git
cd RR3-Event-Planner
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

Create env files from the examples (never commit them):

- `server/.env`: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `CLIENT_ORIGIN`
- `client/.env`: `VITE_API_URL` (leave unset locally)

## Running

From the repo root:

```bash
npm run dev
```

Frontend: http://localhost:5173
API: http://localhost:3001

Always start it from the root. When adding a package, `cd` into `client/` or `server/` first and run `npm install <package>` there.

## How it works

The frontend calls the API with `/api/...` paths. In development, Vite proxies these to Express, so no CORS setup is needed.

- Pages (what shows at `/events/42`) are handled in the browser by React Router, in `client/src`.
- Data (what `GET /api/events/42` returns) is handled by Express, in `server/`.
- Anything under `/api` is the server. Everything else is a React page.

Database access goes through `server/db.js` only. The Supabase service role key stays on the server and is never put in a `VITE_` variable or sent to the browser.

Live attendee counts: check-ins are stored as rows in Supabase and the frontend polls the API every few seconds.

## Deployment

The frontend deploys from `client/` to Vercel (Root Directory `client`, Vite preset). Merging to `main` deploys to production, and every PR gets a preview URL. Env vars are set in the Vercel project settings.

`client/vercel.json` sends all paths to `index.html` so refreshing on a React Router URL doesn't 404.

In production the Vite proxy doesn't exist, so the frontend uses `VITE_API_URL` as the API base:

```js
const API_URL = import.meta.env.VITE_API_URL ?? '';
fetch(`${API_URL}/api/events`);
```

The API must allow the frontend's origin through CORS (`CLIENT_ORIGIN`). API hosting: TBD.

## Working in the repo

`main` is protected. All changes go through a pull request.

```bash
git switch main && git pull
git switch -c feature/short-description
# commit your work
git push -u origin feature/short-description
```

Open a PR, get a review, squash and merge, delete the branch.

- Branch prefixes: `feature/`, `fix/`, `chore/`
- Keep PRs small, with a clear title (it becomes the commit message) and a note on how to test. Add screenshots for UI changes.
- Review within a day where possible.

Designers: run `npm run dev`, edit CSS or components in `client/src`, and see changes live. Colors, fonts, and spacing live as CSS variables in one file so visual changes are a one-file edit. Same branch and PR flow as everyone else.

## Rules

- No direct commits to `main`.
- No `.env` files or secrets in git.
- Commit `package-lock.json`.
- Add any new env variable to the matching `.env.example`.
