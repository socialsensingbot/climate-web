# Script to run the for the Amplify Console CI Cypress testing
cd $(dirname $0)
cd ..
export BRANCH=${GITHUB_REF##*/}

npx browserslist@latest --update-db

if [[ "${BRANCH}" == staging ]]; then
  npm run-script build-prod
elif [[ "${BRANCH}" == demo ]]; then
  npm run-script build-demo
elif [[ "${BRANCH}" == main ]]; then
  npm run-script build-prod
elif [[ "${BRANCH}" == test ]]; then
  npm run-script build-test
else
  npm run-script build-test
fi
