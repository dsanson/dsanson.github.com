#!/usr/bin/env bash

rm -rf _site && \
jekyll && \
./scripts/markdown_generator.sh
rsync -avz --delete _site/ nfsn:/home/public/
# rsync -avz _site/ dream:/home/davsans/davidsanson.com/
