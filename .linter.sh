#!/bin/bash
cd /home/kavia/workspace/code-generation/multilocation-inventory-optimizer-95269-95286/multi_location_inventory_optimizer
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

