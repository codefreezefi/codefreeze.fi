#!/bin/sh
set -eux
docker build -t codefreeze-jekyll .
docker run -it --rm -v "$PWD":/project -p "4000:4000" codefreeze-jekyll
