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
