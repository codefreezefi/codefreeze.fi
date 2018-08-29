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

I highly encourage to install Jekyll on your computer, if doing any (major) changes to the site. [here](https://help.github.com/articles/using-jekyll-with-pages) is good tutorial for using Jekyll with GH pages.

Install Bundler:  
`gem install bundler`

Install the gems from the Gemfile:   
`bundle install`

Run the site locally using jekyll:   
`bundle exec jekyll s`
