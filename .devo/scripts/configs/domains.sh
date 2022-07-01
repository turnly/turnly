#!/bin/bash

# Local hosts (domains)
TURNLY_DOMAINS=()

while IFS='' read -r domain; do TURNLY_DOMAINS+=("$domain"); done < <(cat domains)

export TURNLY_DOMAINS
