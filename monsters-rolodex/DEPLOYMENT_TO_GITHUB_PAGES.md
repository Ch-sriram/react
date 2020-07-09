# Steps for Hosting a Static Website on Github Pages

1. Go to GitHub and create a new repository called "monsters-rolodex" (any-name-you-want)
2. We will copy either the SSH/HTTPS link for the repository and then go to the terminal of monsters-rolodex project.
3. We'll type in `git remote add origin [SSH/HTTPS-link]`
4. We will include the gh-pages package in our GitHub repo by typing in `yarn add gh-pages`
5. Then we go into the package.json file of our project and add a "homepage" info before the "dependencies" object as follows: "homepage": https://*username*.github.io/*repo_name* where *username* is the username of your github profile and *repo_name* is the name of the repo which we created, which is monsters-rolodex.
6. After that, inside the "scripts" object in the package.json file, we'll add 2 more scripts which are `"predeploy": "npm build"` and `"deploy": "gh-pages -d build"`. We just need to run the deploy script, which also automatically run the predeploy script.
7. Now, in our terminal (inside where the package.json file is located at), we'll run the deploy script using `npm run deploy` or `yarn deploy` and it'll also run the predeploy script before it runs the deploy script that we defined in step 6.
8. After that, we'll simply add the files to the repo's staging area and then commit the changes and then push the changes to the remote git repository hosted on github.
