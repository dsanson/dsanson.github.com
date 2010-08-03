#!/usr/bin/env bash

rm -rf _site && jekyll && rsync -avz --delete _site/ nfsn:/home/public/