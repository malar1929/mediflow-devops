# Installation Guide

## Requirements

- Python 3.13
- Node.js 20+
- MySQL Community Server 8+
- Docker Desktop or Docker Engine

## Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
pip install -r requirements.txt
cp .env.example .env
python app.py
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## MySQL Setup

```bash
mysql -u root -p < database/init.sql
```

## Docker

```bash
docker compose up --build
```
