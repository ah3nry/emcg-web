**EMcG Web**

## Overview

This application has been scaffolded using the [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/).

[Material Design Lite](http://getmdl.io) has been replaced with [Material](https://material.io/) and [Webpack](https://webpack.github.io/) has been added as module bundler.

## Prerequisites

### Node.js

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### Gulp

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.9.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --g gulp
```

### Local dependencies

Next, install the local dependencies:

```sh
$ npm install
```

## Running a dev server and building your project

### Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network (enabled by [browser-sync](https://www.browsersync.io/)).
`serve` does not use service worker caching, so your site will stop being available when the web server stops running.

### Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Also, a service worker script will be automatically generated, which will take care of precaching your sites' resources.

### Serve the Fully Built & Optimized Site

```sh
$ gulp serve:dist
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.
`serve:dist` includes will serve a local copy of the built and optimized site generated as part
of the `default` task.


### Performance Insights

```sh
$ gulp pagespeed
```

Runs the deployed (public) version of your site against the [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) API.


### Deploying to Github Pages
 
```sh
$ gulp deploy
```

Triggers a build and pushes the content of the dist folder to the ``gh-pages`` branch of the project. See https://github.com/yeoman/generator-webapp/blob/master/docs/recipes/gh-pages.md for more info.
