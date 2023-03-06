# Script to run the for the Amplify Console Backend Deployment
set -euxo pipefail
cd "$(dirname $0)"
export PATH=$PATH:$(pwd)
cd ..
export BRANCH=${GITHUB_REF##*/}
wget -O jq https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x ./jq && mv jq ./bin
npm install -g typescript
chmod 755 ./bin/*

if [[ "${BRANCH}" == staging ]]; then
  backup.sh
  amplify push -y
elif [[ "${BRANCH}" == demo ]]; then
  amplify push -y
  backup.sh
elif [[ "${BRANCH}" == master ]]; then
  amplify push -y
elif [[ "${BRANCH}" == release* ]]; then
  #  backup.sh
  amplify push -y
else
  amplify push -y
fi
