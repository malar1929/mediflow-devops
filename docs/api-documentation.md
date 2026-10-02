# API Documentation

## Health Check

GET `/api/health`

Response:

```json
{
  "status": "ok",
  "service": "MediFlow API",
  "version": "1.0.0"
}
```

## Authentication

POST `/api/auth/register`

```json
{
  "name": "Admin User",
  "email": "admin@mediflow.com",
  "password": "admin123",
  "role": "admin"
}
```

POST `/api/auth/login`

```json
{
  "email": "admin@mediflow.com",
  "password": "admin123"
}
```

## Modules

- `/api/dashboard`
- `/api/hospitals`
- `/api/patients`
- `/api/ambulances`
- `/api/drivers`
- `/api/emergencies`
- `/api/beds`
- `/api/blood`
- `/api/notifications`
- `/api/reports`
- `/api/analytics`
