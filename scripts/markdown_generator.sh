#!/bin/sh

find _site -print | grep html | grep -v tty | while read line; do pd plain --columns 70 --reference-links $line ; done
