#!/usr/bin/env bash

# Clone remote repository to dist and point to gh-pages branch
# http://stackoverflow.com/questions/1911109/clone-a-specific-git-branch
# Clone gh-pages preventing fetching of all branches add --single-branch
git clone -b gh-pages https://github.com/alampros/react-confetti.git dist

# Checkout changes from master
# Using git without having to change directory (-C dist)
# http://stackoverflow.com/questions/5083224/git-pull-while-not-in-a-git-directory
git -C dist checkout origin/master -- :/index.html :/lib :/assets

# Sync dependencies keeping full path (-R)
rsync -avR node_modules/react/dist dist
rsync -avR node_modules/react-dom/dist dist

# Add synched dependencies changes
git -C dist add .

# Commit with the last commit message from master (usually release version)
git -C dist commit -m "$(git log origin/master -1 --pretty=%B)"

# Push to remote gh-pages
git -C dist push origin gh-pages

# Remove temporary dist folder
rm -rf dist
