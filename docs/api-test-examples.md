# API Test Examples

## Health check

Request:

```bash
curl http://localhost:5000/api/health
```

Response:

```json
{
  "status": "ok",
  "service": "MediFlow API",
  "version": "1.0.0"
}
```

## Login

Request:

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@mediflow.com","password":"admin123"}'
```

Response:

```json
{
  "message": "Login successful",
  "access_token": "demo-token",
  "user": {
    "id": 1,
    "name": "System Admin",
    "email": "admin@mediflow.com",
    "role": "admin"
  }
}
```

## Create emergency request

```bash
curl -X POST http://localhost:5000/api/emergencies \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"patient_id":1,"priority":"critical","description":"Severe trauma"}'
```
