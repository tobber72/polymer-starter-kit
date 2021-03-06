# Polymer Starter Kit

Polymer Starter Kit is a boilerplate for web development using Web Components and modern tools.

Keeping up to date with
[Web Starter Kit](https://github.com/google/web-starter-kit),
[HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate),
[Polymer generator](https://github.com/yeoman/generator-polymer) and
[Gulp generator](https://github.com/yeoman/generator-gulp-webapp).

Following [The 10 Commandments of Modern Web Application](https://gist.github.com/JosefJezek/8020bd8f02c4992e7d7d)

:sparkles: [DEMO](http://polymer-starter-kit.startpolymer.org) :sparkles:

## Features

- Clean [index.html](https://github.com/StartPolymer/polymer-starter-kit/blob/master/app/index.html)
- [Gulp tasks](https://github.com/StartPolymer/polymer-starter-kit/tree/master/gulp/tasks) per file
- Using [Polymer Demo](https://github.com/StartPolymer/polymer-demo) element with [Polymer Theme](https://github.com/StartPolymer/polymer-theme) based on [BEM Methodology](http://getbem.com)
- [Sass](http://sass-lang.com) CSS Preprocessor with [Ruby](https://www.ruby-lang.org)
 - PSK need CSS Preprocessor for [Variables](http://sass-guidelin.es/#variables),
 [Loops](http://sass-guidelin.es/#loops),
 [Mixins](http://sass-guidelin.es/#mixins) and other features
 - [LibSass](http://libsass.org) is a C/C++ port of the Sass engine
   - [Replace Ruby Sass with LibSass](https://github.com/StartPolymer/polymer-starter-kit/issues/2) issue
 - SCSS have CSS like syntax
 - Check out the [styles](https://github.com/StartPolymer/polymer-starter-kit/tree/master/app/styles) dir
- Ready to use any template engine
 - [How to add any template engine](https://github.com/StartPolymer/polymer-starter-kit/wiki/How-to-add-any-template-engine) for any developers
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS
- [Asset revisioning](https://github.com/smysnk/gulp-rev-all)
for CSS, HTML and JS by appending content hash to their filenames
- [Compress text files with Pako](https://github.com/jameswyse/gulp-pako)
for avoiding the overhead of on-the-fly compression on server
- [PageSpeed Insights](https://developers.google.com/speed/docs/insights/about) for performance tuning
- Built-in preview server with [BrowserSync](http://www.browsersync.io)
- Automagically wire-up dependencies installed with [Bower](http://bower.io)
- [Vulcanize with Content Security Policy](https://github.com/Polymer/vulcanize#content-security-policy)
- [web-component-tester](https://github.com/Polymer/web-component-tester) support
- Quick deploy to [CDN](http://en.wikipedia.org/wiki/Content_delivery_network) Hosting
 - [GitHub Pages](https://pages.github.com) - [more info](https://github.com/blog/1715-faster-more-awesome-github-pages)

## Installation

### Tools on Ubuntu

```sh
# Add Ruby repository
sudo add-apt-repository -y ppa:brightbox/ruby-ng
# Script to install NodeSource repository
curl -sL https://deb.nodesource.com/setup | sudo bash -
# Install Git, Node.js and Ruby
sudo apt-get install -y git nodejs ruby2.2
# Install Bower, Gulp and NPM
sudo npm install -g bower gulp npm
# Install Sass
sudo gem install sass
```

- [Atom](https://atom.io) is great editor for web development, you can use
[Atom on Ubuntu](https://gist.github.com/JosefJezek/6d7386cb7011cc8f5d37) script.
- For other OS, you can use [Ubuntu VM Image](http://www.osboxes.org/ubuntu/) or Google Search :wink:

## Usage

### [Fork](https://github.com/StartPolymer/polymer-starter-kit/fork) this repository

or

### Clone this repository to separate branch `psk`

```sh
git clone https://github.com/StartPolymer/polymer-starter-kit.git <my-repo-name>
cd <my-repo-name>
git branch -m psk
git checkout -b master
git remote rename origin psk
git remote add origin https://github.com/<user>/<my-repo-name>.git
git push -u origin master
```

[How to use Git](https://gist.github.com/JosefJezek/775e54583ef319c8c641)

### Install dependencies

```sh
bower install && npm install
```

### Check out the variables

- Gulp variables are in the file [gulp/psk-config.js](https://github.com/StartPolymer/polymer-starter-kit/blob/master/gulp/psk-config.js)

### Serve to local and external URL

`http://localhost:9000` and `http://<Your IP>:9000`

```sh
gulp serve
```

#### Build and serve the output from the dist build

```sh
gulp serve:dist
```

### Build the app

```sh
gulp
```

### Build a polymer element

Check out the [file structure](https://github.com/StartPolymer/polymer-demo/tree/develop/app/elements)
of Polymer Demo element

```sh
gulp build:el
```

### Explain `psk-` prefix

`psk-` prefix in file names is for git merging with `psk` branch without conflicts

## Deploy :tada:

### Deploy to GitHub Pages

First you need to be sure you have a gh-pages branch. If you don't have one, you can do the following:

```sh
git checkout --orphan gh-pages
git rm -rf .
touch README.md
git add README.md
git commit -m "Init gh-pages"
git push --set-upstream origin gh-pages
git checkout master
```

```sh
gulp deploy:gh
```

## Tools

### PageSpeed Insights

```sh
gulp pagespeed
```

## Extending

Use a [recipes](https://github.com/yeoman/generator-gulp-webapp/blob/master/docs/recipes/README.md)
for integrating other popular technologies like CoffeeScript. Or this a
[recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes).

### [web-component-tester](https://github.com/Polymer/web-component-tester)

```sh
bower install web-component-tester --save-dev
npm install web-component-tester --save-dev
```

## Contributing :+1:

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Run the tests, adding new ones for your own code if necessary
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## [MIT License](https://github.com/StartPolymer/polymer-starter-kit/blob/master/LICENSE)

Copyright (c) 2015 Start Polymer ([http://startpolymer.org](http://startpolymer.org))
