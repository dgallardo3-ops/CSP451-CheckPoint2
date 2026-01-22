# CSP451 Web Starter — Week 2 Checkpoint 2

This repository is a **starter template** for practicing:
- Git branching strategies (GitHub Flow / Git Flow-lite)
- Pull Requests + review workflow
- Intentional merge conflicts + manual resolution
- Clean history using **Squash and merge**

## Quick Start

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Structure

- `src/app.js` — Express server entry
- `src/routes/` — route modules
- `src/controllers/` — controller functions
- `src/services/` — reusable services (auth helpers, etc.)
- `src/db/` — database module (starts as a stub)
- `public/` — static UI (includes `/login`)
- `docs/` — reports + screenshots checklist

## Required Branches
Create these branches exactly:
- `feature/user-authentication`
- `feature/database-connection`
- `feature/api-endpoints`

## Suggested Conflict Targets
To intentionally create a merge conflict, edit the same lines in one of:
- `README.md`
- `src/app.js`
- `src/routes/api.js`

## How to Run Tests (lightweight)
```bash
npm test
npm run lint
```
## API Endpoints Feature

This feature branch expands the backend API by adding additional REST endpoints.
A POST endpoint was introduced to simulate login requests with basic validation,
and a GET endpoint was added to return sample user data. These endpoints
demonstrate proper API structure and JSON response handling.

## API Endpoints Feature

This feature branch expands the backend API.

### Endpoints
- `GET /api/health` — service health check
- `POST /api/login` — accepts email and password and returns a mock response

