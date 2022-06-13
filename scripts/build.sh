#!/bin/bash
if [[ ! -z ${REVIEW_APP} ]]; then
    cp booking-ui/.env.review booking-ui/.env
    cp booking-api/.env.review booking-api/.env
fi
if [[ -z ${BOOKING_COMPONENT} ]]; then
    npm run build --workspaces
else
    npm run build --workspace ${BOOKING_COMPONENT}
fi
