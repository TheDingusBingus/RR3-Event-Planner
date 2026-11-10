# RR3 Event Planner

Event management web app. React + Vite frontend, Node + Express API, Supabase (Postgres) database. The frontend is hosted on Vercel.

## Structure

```
client/    React + Vite frontend + Tailwind with Shad-Cn Components in Base UI
server/    Express API (supabase.js holds the Supabase client)
```

## Setup

Requires Node 24 or newer.

```bash
git clone https://github.com/TheDingusBingus/RR3-Event-Planner.git
cd RR3-Event-Planner
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

Create env files from the examples (never commit them):

- `server/.env`: `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `CLIENT_ORIGIN`
- `client/.env`: `VITE_API_URL` (leave unset locally)

## Running

From the repo root:

```bash
npm run dev
```

Frontend: http://localhost:5173
API: http://localhost:3001

Always start it from the root. When adding a package, `cd` into `client/` or `server/` first and run `npm install <package>` there.

### Ensure .env and no node_modules are committed.

## How it works

The frontend calls the API with `/api/...` paths. In development, Vite proxies these to Express, so no CORS setup is needed.

- Pages (what shows at `/events/3`) are handled in the browser by React Router, in `client/src`.
- Data (what `GET /api/events/3` returns) is handled by Express, in `server/`.
- Anything under `/api` is the server. Everything else is a React page.

Database access goes through `server/supabase.js` only. The Supabase secret key stays on the server and is never put in a `VITE_` variable or sent to the browser.

Live attendee counts: TBD

## Deployment

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
- Keep PRs small, with a clear title (it becomes the commit message).
- Review within a day.

Designer: run `npm run dev`, shad-cn base theme in index.css - custom vars go in tokens.css, and extra base styling goes in global.css inside the layer base {}. Make it your own - so long as it works and make sense.

## Rules

- No direct commits to `main`.
- No `.env` files or secrets in git.
- Commit `package-lock.json`.
- Add any new env variable to the matching `.env.example`.
