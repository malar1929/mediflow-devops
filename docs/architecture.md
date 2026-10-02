# MediFlow Architecture

## Request and data flow

1. A user interacts with the frontend.
2. The frontend calls the backend over HTTPS using the documented API contract.
3. The backend authenticates the request, authorizes the action, validates input, and applies domain rules.
4. The backend reads or writes through the database access layer.
5. Operational signals are emitted to the monitoring stack without exposing sensitive health information.

The database is private to backend services. Never ship database credentials or privileged authorization decisions to the frontend.

## Component ownership

| Area | Owns |
| --- | --- |
| `frontend/` | Screens, reusable UI, client-side state, and API calls |
| `backend/` | API contract, authentication/authorization, validation, domain services, persistence boundary |
| `database/` | Schema migrations and non-sensitive development seed data |
| `docker/` | Local development containers and service images |
| `kubernetes/` | Runtime workloads, networking, configuration references, and health probes |
| `monitoring/` | Service availability, operational metrics, dashboards, and alerts |
| `.github/workflows/` | Automated quality checks and build/release automation |

## Healthcare data safeguards

- Apply least-privilege access and enforce authorization on every protected backend operation.
- Keep secrets outside source control; use environment-specific secret management.
- Avoid patient-identifiable data in logs, metrics, test fixtures, and seed files.
- Define audit, retention, encryption, backup, and recovery requirements before handling real patient data.
- Treat regulatory and privacy requirements as deployment-specific acceptance criteria; this scaffold does not itself establish compliance.

## Decisions to make before implementation

Choose the frontend and backend stacks, database engine, identity provider, API style, deployment target, and applicable privacy/regulatory requirements. Record those choices here before adding environment-specific configuration.
