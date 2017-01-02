codefreeze.fi
=============

Welcome to CodeFreeze - a different kind of conference.

In order to register, all you need to do is to

 * fork this github repository
 * create a new file under <code>_participants</code>
 * copy the FrontMatter from <code>_participants/_template.md</code>
 * Add your relevant information
 * You could add something about yourself on the newly created page, using markdown syntax, if you so wish. That will be visible in www.codefreeze.fi/participants.
 * create a pull request, and your name and picture will be shown in the web site.

Updating the site
================

I highly encourage to install Jekyll on your computer, if doing any (major) changes to the site. [here](https://help.github.com/articles/using-jekyll-with-pages) is good tutorial for using Jekyll with GH pages.
=======
Welcome to CodeFreeze?

Are you looking for a chance to join us? Please choose the branch [gh-pages](https://github.com/rinkkasatiainen/codefreeze.fi/tree/gh-pages)

Then you'll get more information from the README file (Yes, I'm lazy, and want to write the guide only once).

Color Scheme
=============

#2B4651
#DDECF7
#F4F4C4
#64C4B2


Using Autoprefixer
=================

to use autoprefixer to update styles, run `gulp' on styles/autoprefixer

###install Autoprefixer
npm install gulp --save-dev
npm install gulp-autoprefixer --save-dev
npm install gulp-insert --save-dev
