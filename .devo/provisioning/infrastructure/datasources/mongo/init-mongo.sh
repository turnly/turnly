#!/bin/bash

set -e

mongo <<EOF
print("Creating athena databases...");

const databases = [
  "addons",
  "heimdall",
  "billing",
  "assistance-centers",
  "teams",
  "custom-fields",
  "queuing-system",
  "tasks-scheduling",
  "notifications",
  "business-owners",
  "interactions",
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
