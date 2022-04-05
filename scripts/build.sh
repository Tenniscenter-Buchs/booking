#!/bin/bash
if [[ ! -z ${REVIEW_APP} ]]; then
    cp ui/.env.review ui/.env
    cp api/.env.review api/.env
fi
if [[ -z ${BOOKING_COMPONENT} ]]; then
    npm run build --workspaces
else
    npm run build --workspace ${BOOKING_COMPONENT}
fi
if [[ "${BOOKING_COMPONENT}" == "ui" ]]; then
    (cd pdf-renderer && wasm-pack build)
fi
