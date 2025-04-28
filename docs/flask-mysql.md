# Flask-MySQL Docker Project

## Overview
A containerized Flask application connected to MySQL with:

- Docker networking
- Persistent storage
- Health checks

## Architecture
```mermaid
graph LR
    A[Flask Container] -->|Network| B[MySQL Container]
    B -->|Volume| C[(Persistent Data)]

Setup
bash
docker-compose up -d
Access at: http://localhost:5000
