# MediFlow

MediFlow is organized as a frontend, backend API, and database, with separate deployment, monitoring, documentation, and CI areas. The scaffold is intentionally technology-neutral; choose the application frameworks and database before adding runtime configuration.

## Architecture

```text
User
  |
  v
frontend (web client)
  |
  | HTTPS / API
  v
backend (authentication, authorization, validation, business rules)
  |
  | controlled data access
  v
database (schema, migrations, reference data)

Docker + Kubernetes: package and run services
Monitoring: collect service health, metrics, and logs
GitHub Actions: validate and build changes
```

The frontend must access application data through the backend API, never directly from the browser to the database. The backend owns authorization and business rules.

## Directories

- `frontend/`: user-facing application and API client.
- `backend/`: API endpoints, domain services, and models.
- `database/`: versioned schema changes and development seed data.
- `docker/`: local container and image configuration.
- `kubernetes/`: deployment and service manifests.
- `monitoring/`: health checks, dashboards, and alert configuration.
- `docs/`: architecture, setup, and operational documentation.
- `.github/workflows/`: automated checks and delivery workflows.

See [docs/architecture.md](docs/architecture.md) for boundaries and security considerations. No patient data or credentials should be committed to this repository.
