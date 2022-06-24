#!/bin/bash

set -e

mongo <<EOF
print("Creating athena databases...");

const databases = [
  "maverick",
  "heimdall",
  "wayne",
  "assistance-centers",
  "shannon",
  "custom-fields",
  "queuing-system",
  "curry",
  "chanel",
  "brennan",
  "polly",
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
