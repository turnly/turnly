#!/bin/bash

set -e

mongo <<EOF
print("Creating athena databases...");

const databases = [
  "addons_db",
  "heimdall_db",
  "assistance_centers_db",
  "teams_db",
  "custom_fields_db",
  "queuing_system_db",
  "notifications_db",
  "business_owners_db",
  "interactions_db",
];

for (const database of databases) {
  db = db.getSiblingDB(database);

  db.createUser({
    user: "$MONGO_INITDB_ROOT_USERNAME",
    pwd: "$MONGO_INITDB_ROOT_PASSWORD",
    roles: [{ role: "readWrite", db: database }],
  });
}

print("Creating athena databases... DONE!");
EOF
