#!/bin/bash
if [[ -z ${BOOKING_COMPONENT} ]]; then
    npm run build --workspaces
else
    npm run build --workspace ${BOOKING_COMPONENT}
fi
