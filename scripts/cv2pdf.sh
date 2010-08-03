#!/bin/sh

cat scripts/cv2pdf/cvheader CV.markdown | sed '/---/,/---/ s/.*//' | sed 's/<sanson.7@osu.edu>/sanson.7@osu.edu/' | pandoc -t html -sS | tidy -q -utf8 | sed 's/<p>Department/<p class="subtitle">Department/' | sed 's/<p>614/<p class="subtitle">614/' | prince -s scripts/cv2pdf/cv.css -o CV.pdf -

open -a Preview CV.pdf