#!/bin/bash
echo "Rum from test-publishCmd.sh file"

echo "Push image to Dockerhub"
docker push "iamboyd/nodejs-test"

echo "Done semantic-release/exec's manual script."