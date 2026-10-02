# Deployment Guide

## Local deployment

1. Start the MySQL database.
2. Run the Flask backend.
3. Launch the React dashboard.
4. Validate the health endpoint at `/api/health`.

## Docker deployment

```bash
docker compose up --build -d
```

## Kubernetes deployment

```bash
kubectl apply -f kubernetes/
```

## Jenkins pipeline

The Jenkinsfile defines stages for dependency install, backend validation, frontend build, and Docker image creation.

## Monitoring

Prometheus and Grafana are configured under the `monitoring/` directory.
