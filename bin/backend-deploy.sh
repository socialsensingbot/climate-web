# Script to run the for the Amplify Console Backend Deployment
set -euxo pipefail
cd "$(dirname $0)"
export PATH=$PATH:$(pwd)
cd ..
export BRANCH=${GITHUB_REF##*/}
wget -O jq https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x ./jq && mv jq ./bin
npm install -g typescript
AWS_APP_NAME=climate
AWS_APP_ID=d1ozf96chfutrg
AWS_APP_STAGE=dev
amplify configure project -n $AWS_APP_NAME -i $AWS_APP_ID  -s $AWS_APP_STAGE
amplify env checkout $AWS_APP_STAGE
amplify pull --appId $AWS_APP_ID --envName $AWS_APP_STAGE
if [[ "${BRANCH}" == staging ]]; then
  backup.sh
  amplify push -y
elif [[ "${BRANCH}" == demo ]]; then
  amplify push -y
  backup.sh
elif [[ "${BRANCH}" == main ]]; then
  amplify push -y
elif [[ "${BRANCH}" == release* ]]; then
  #  backup.sh
  amplify push -y
else
  amplify push -y
fi
