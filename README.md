# MediFlow

MediFlow is a cloud-native smart hospital emergency response and ambulance management platform built with React, Flask, MySQL, Docker, Kubernetes, Jenkins, Prometheus, and Grafana.

## Features

- Role-based authentication and admin access
- Patient, hospital, ambulance, and driver management
- Emergency dispatch and priority handling
- Bed and ICU availability monitoring
- Blood inventory tracking
- Notifications and operational reporting
- Real-time analytics and dashboards
- Mobile-first responsive UI

## Project Structure

- `backend/` - Flask API and app modules
- `frontend/` - React + Tailwind dashboard
- `database/` - MySQL schema and seed scripts
- `docker/` - container assets
- `kubernetes/` - deployment manifests
- `monitoring/` - Prometheus and Grafana assets
- `nginx/` - reverse proxy configuration
- `docs/` - operational documentation
- `jenkins/` - CI pipeline definition

## Quick Start

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Docker Compose

```bash
docker compose up --build
```

### Kubernetes

```bash
kubectl apply -f kubernetes/
```

## Default credentials

- Email: admin@mediflow.com
- Password: admin123

## License

MIT
