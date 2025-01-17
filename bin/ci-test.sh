# Script to run the for the Amplify Console CI Cypress testing
cd $(dirname $0)
cd ..

tests="cypress/e2e/00_quick"
browsers="electron"
record="--record false" #Or "--record"
timeoutDuration=600
if [[ "${AWS_BRANCH}" == feature* ]]; then
  tests="cypress/e2e/00_quick"
  browsers="electron"
fi
if [[ "${AWS_BRANCH}" == release* ]]; then
  tests="cypress/e2e"
  browsers="electron"
fi
if [[ "${AWS_BRANCH}" == "" ]]; then
  tests="cypress/e2e"
  browsers="electron"
fi
if [[ "${AWS_BRANCH}" == staging ]]; then
  echo "Tests must not be run on STAGING"
  exit 1
fi
if [[ "${AWS_BRANCH}" == demo ]]; then
  echo "Tests must not be run on DEMO"
  exit 1
fi
if [[ "${AWS_BRANCH}" == master ]]; then
  echo "Tests must not be run on MASTER"
  exit 1
fi

export TZ=UTC
export CYPRESS_VERIFY_TIMEOUT=60000
set -e
function test() {
  echo "Running ${tests} on branch ${AWS_BRANCH} against ${browsers}"
  for browser in "$@"; do
  #    export DEBUG=cypress:server:util:process_profiler
  #    export CYPRESS_PROCESS_PROFILER_INTERVAL=60000
  export ELECTRON_EXTRA_LAUNCH_ARGS=--js-flags=--expose_gc
  export NODE_OPTIONS="--max-old-space-size=4096"
  for file in $(find ${tests} -name "*.js" | sort); do
    echo "Running tests in ${file} with a timeout of ${timeoutDuration} seconds."
    npx cypress run $record -e TEST_AC_USER=${TEST_AC_USER},TEST_AC_PASS=${TEST_AC_PASS} \
  --browser ${browser} \
  --headless --reporter mochawesome \
  --reporter-options "reportDir=cypress/report/mochawesome-report-${browser},overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss" \
  --spec "${file}"
  done
  #npx cypress run  -e TEST_AC_USER=${TEST_AC_USER},TEST_AC_PASS=${TEST_AC_PASS} --browser firefox --reporter mochawesome --reporter-options "reportDir=cypress/report/mochawesome-report-firefox,overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss"
done
}

test $browsers
