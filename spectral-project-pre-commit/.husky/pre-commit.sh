!/bin/sh
. "$(dirname "$0")/_/husky.sh"

git status --porcelain | awk '/^ ?[AM].*(swagger|openapi).*\.(yaml|json|yml)/ { print $NF }' | xargs spectral lint --fail-severity=warn --ruleset xxx/ruleset.yaml