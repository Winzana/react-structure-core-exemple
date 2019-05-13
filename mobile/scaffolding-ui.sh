#!/bin/sh
mkdir $1
cd $1
mkdir containers components styles
touch package.json
cd containers
touch "$1.container.tsx"
cd ../components
touch "$1.view.tsx"
cd ../styles
touch "$1.styles.ts"
cd ../
printf "{\"main\":\"containers/$1.container\"}" > package.json
