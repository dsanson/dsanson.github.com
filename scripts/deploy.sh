#!/usr/bin/env bash

rm -rf _site && \
jekyll && \
cp .htaccess _site/.htaccess # temporary fix for bug introduced by jekyll 0.11
rsync -avz --delete _site/ nfsn:/home/public/
# rsync -avz _site/ dream:/home/davsans/davidsanson.com/
rsync -avO --no-g --no-p --delete _site/ /Library/WebServer/Documents/
