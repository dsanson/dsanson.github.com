#!/usr/bin/env bash

function help {
	echo
    echo "Usage: $0 <course number> <term> <year>"
    echo "eg:    $0 301 w 2010"
	echo "Or:    $0 <course number><term><year>"
	echo "eg:    $0 301w2010"
    echo
    exit 1
}

case $# in
	1) 
		course=`echo $1 | perl -pe "s/(^\d+)([A-z]+)(\d+)/\1/"`
		if [ $course == $1 ]; then
			echo
			echo "Error: can't parse supplied argument"
			help
		fi
		term=`echo $1 | perl -pe "s/(^\d+)([A-z]+)(\d+)/\2/"`
		year=`echo $1 | perl -pe "s/(^\d+)([A-z]+)(\d+)/\3/"`		
	;;
	3)
		course=$1
		term=$2
		year=$3
	;;
	*)
		echo
		echo "Error: can't parse supplied arguments"
		help
	;;
esac

if [ ! -d "_layouts" ]; then
	echo
	echo "Error: no _layouts directory found. Are you in the jekyll directory?"
	help
fi

if [ ! -d "_course_template" ]; then
	echo
	echo "Error: no _course_template directory found. Are you in the jekyll directory?"
	help
fi

if [ -e "$course$term$year" ]; then
	echo
	echo "Error: $course$term$year already exists."
	echo "This script will not overwrite an existing folder or file."
	help
fi

echo "Copying template into new folder: $course$term$year/"
echo

cp -nvr "_course_template" "$course$term$year" 

echo
echo "Adding course information to template files..."
echo

for f in `find ./$course$term$year/* -print`; do 
	if [ -f "$f" ]; then
		sed -i "" -e "s/XXXTYYYY/$course$term$year/g" "$f"
		sed -i "" -e "s/XXX/$course/g" "$f"
	fi
done

echo
echo "Installing new layout files in _layouts/"
echo

mv -nv "$course$term$year/philXXX.html" "_layouts/phil$course.html"
mv -nv "$course$term$year/philXXX-post.html" "_layouts/phil$course-post.html"

