#!/bin/bash

echo "Setting up MongoDB..."

docker exec mongo mongo --username "$MONGO_USERNAME" \
  --password "$MONGO_PASSWORD" --authenticationDatabase admin \
  --eval "db = db.getSiblingDB('$MONGO_DB'); \
  db.createUser({ user: '$MONGO_USERNAME', pwd: '$MONGO_PASSWORD', roles: [{ role: 'readWrite', db: '$MONGO_DB' }] });"
