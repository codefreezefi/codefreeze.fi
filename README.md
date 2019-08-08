codefreeze.fi
=============

Welcome to CodeFreeze - a different kind of conference.

In order to register, all you need to do is to

 * fork this github repository
 * create a new file under <code>_participants</code>
 * copy the FrontMatter from <code>_participants/_template.md</code>
 * Add your relevant information
 * You could add something about yourself on the newly created page, using markdown syntax, if you so wish. That will be visible on [www.codefreeze.fi](https://www.codefreeze.fi/).
 * create a pull request, and your name and picture will be shown in the web site.

Updating the site (for more advanced changes)
================

I highly encourage to test the site with Jekyll on your computer, if doing any (major) changes. GitHub has good instructions for [using Jekyll with GitHub Pages](https://help.github.com/en/articles/using-jekyll-as-a-static-site-generator-with-github-pages).

If you already have [Docker](https://www.docker.com/) on your computer, you may use this shell script for running Jekyll in Docker:  
`./serve.sh`

Alternatively, you may install Jekyll directly on your computer:

Install Bundler:  
`gem install bundler`

Install the gems from the Gemfile:   
`bundle install`

Run the site locally using jekyll:   
`bundle exec jekyll s`
