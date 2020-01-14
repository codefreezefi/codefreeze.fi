codefreeze.fi
=============

Welcome to CodeFreeze - a different kind of conference.


## Registration

In order to register yourself as a participant:

 * Fork this github repository
 * Create a new file under <code>_participants</code>
 * Copy the FrontMatter from <code>_participants/_template.md</code>
 * Add your relevant information
 * Create a pull request, and your name and picture will be shown on [codefreeze.fi](https://codefreeze.fi/#participants)


## Updating the site (for more advanced changes)

I highly encourage to test the site with Jekyll on your computer, if doing any (major) changes. GitHub has good instructions for [using Jekyll with GitHub Pages](https://help.github.com/en/articles/using-jekyll-as-a-static-site-generator-with-github-pages).

If you already have [Docker](https://www.docker.com/) on your computer, you may use this shell script for running Jekyll in Docker:

    ./serve.sh

Alternatively, you may install Jekyll directly on your computer:

Install Bundler:

    gem install bundler

Install the gems from the Gemfile:

    bundle install

Run the site locally using Jekyll:

    bundle exec jekyll serve

Occasionally it may be necessary to update the dependencies to match latest version of GitHub Pages. This command will update the `Gemfile.lock` file which should be committed to version control:

    bundle update
