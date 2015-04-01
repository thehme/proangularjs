Reading ProAngular JS to better understand Angular and running through examples here.

Chapter 1 Notes:

"static" method used in Listing 1-4 no longer works. Need to install serve-static and change code accordingly.

npm install --save-dev serve-static

I did not need to install serve-static. I saw that connect looks for the default file called index.html, unless otherwise specified. I was not used connect, but instead express, so I renamed test.html to index.html, left it in the /angularjs folder and ran my server.js file. This solved the issue.
