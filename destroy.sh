#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
# Exit on first error
set -e

printf "======================= Stop all docker containers =======================\n"
docker stop $(docker ps -aq)
printf "======================= Remove all docker containers =======================\n"
docker rm $(docker ps -aq)
printf "======================= Delete any images that were generated as a part of this setup =======================\n"
DOCKER_IMAGE_IDS=$(docker images | grep "dev\|none\|test-vp\|peer[0-9]-" | awk '{print $3}')
if [ -z "$DOCKER_IMAGE_IDS" -o "$DOCKER_IMAGE_IDS" == " " ]; then
echo "---- No images available for deletion ----"
else
docker rmi -f $DOCKER_IMAGE_IDS
fi