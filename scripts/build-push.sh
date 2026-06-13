#!/bin/bash

# Exit in case of error
set -e

TAG=${TAG} \
source ./scripts/build.sh

docker-compose -f docker-stack.yml push
