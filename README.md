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
## Database Connection Feature

This feature branch introduces a database connection layer using
environment variables and a fake in-memory database for checkpoint purposes.


- `src/app.js` — Express server entry
- `src/routes/` — route modules
- `src/controllers/` — controller functions
- `src/services/` — reusable services (auth helpers, etc.)
- `src/db/` — database module (starts as a stub)
- `public/` — static UI (includes `/login`)
- `docs/` — reports + screenshots checklist

## Required Branches
Create these branches exactly (database branch documented separately):
- feature/user-authentication
- feature/database-connection (adds environment-based DB connection stub)
- feature/api-endpoints


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

This feature branch expands the backend API by adding additional REST endpoints.
A POST endpoint was introduced to simulate login requests with basic validation,
and a GET endpoint was added to return sample user data. These endpoints
demonstrate proper API structure and JSON response handling.

## API Endpoints Feature

This feature branch expands the backend API.

### Endpoints
- `GET /api/health` — service health check
- `POST /api/login` — accepts email and password and returns a mock response
## User Authentication Feature (Frontend)

The login page was improved as part of the `feature/user-authentication` branch.
Client-side validation was added to prevent empty or invalid submissions.
Clear visual feedback is now shown to users using styled error and success messages.
These changes improve usability while keeping the authentication logic simple.
> Note: This feature was reviewed and approved via pull request.
## Database Connection Feature

This feature branch adds a structured database connection module to the
application. A configurable connection setup using environment variables
was introduced, along with initialization during application startup.
For this checkpoint, a lightweight in-memory database stub is used to
demonstrate proper architecture without requiring a real database.


