#!/bin/bash -e

# Run inside https://hub.docker.com/r/devexpress/devextreme-themebuilder-app-build/

trap "echo 'Interrupted!' && kill -9 0" TERM INT

export DEVEXTREME_DOCKER_CI=true

function run_lint {
    npm i tslint
    npm run lint
}

echo "node $(node -v), npm $(npm -v)"

case "$TARGET" in
    "lint") run_lint ;;

    *)
        echo "Unknown target"
        exit 1
    ;;
esac
