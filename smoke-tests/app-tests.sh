#!/bin/bash
ORIGIN="${ORIGIN}"
API="${BASE}/api/v1";

cd $(dirname "$0")

. smoke.sh

smoke_url_ok "${BASE}"
  smoke_assert_code 200
  smoke_assert_headers "content-type: text/html"

smoke_url_ok "${BASE}/favicon.ico"

smoke_url_ok "${BASE}/js/itowns.js"
  smoke_assert_headers "content-type: text/javascript"


#smoke_debug

# smoke_allow_insecure_ssl
# smoke_origin "${ORIGIN}"

# #    smoke_assert_code 404
# #smoke_url_ok "${BASE}"
# #    smoke_assert_code 200

# # TEST For AKAMAI only
# smoke_url "${BASE}/akamai/sureroute-test-object.html"
#     smoke_assert_code 200

# smoke_url_ok "${IDENTITY}/.well-known/openid-configuration"
#     smoke_assert_headers "content-type: application/json"

# smoke_url_ok "${API}/ping"
#     smoke_assert_code 200

# smoke_url_ok "${API}/version"
#     smoke_assert_code 200

# smoke_url "${API}/health-check"
#     smoke_assert_code 401

# smoke_basic_auth $USER $PASS
# smoke_url_ok "${API}/health-check"
#     smoke_assert_code 200
#     smoke_assert_headers "content-type: application/json; charset=utf-8"

# smoke_basic_auth '' ''

# # CORS TEST --
# smoke_url_cors "${API}/registration" "POST"
#     smoke_assert_headers "Access-Control-Allow-Credentials: true"
#     smoke_assert_headers "Access-Control-Allow-Methods: POST"
#     smoke_assert_headers "Access-Control-Allow-Origin: ${ORIGIN}"

smoke_report
