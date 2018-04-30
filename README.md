# TodoApp

# Angular CLI Heroku Boilerplate
This README outlines how to quickly deploy your Angular CLI project to Heroku.

## Prerequisites
* [Git](http://git-scm.com/)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Installation
* `git clone https://github.com/AryanJ-NYC/angular-cli-heroku-boilerplate.git <your-project-name>`
* `cd <your-project-name>`
* `npm install`

## Running
### Running locally
* `npm start`
* Visit your app at [http://localhost:8080](http://localhost:8080)
  * This should be similar to my [Heroku site](https://angular-cli-heroku-boilerplate.herokuapp.com/)

### Deploying to Heroku
[![Deploy](https://www.herokucdn.com/deploy/1button.svg)](https://heroku.com/deploy)


**OR**

* Install [Homebrew](https://brew.sh/)
* `brew install heroku`
* `heroku create <your-project-name>`
* `git push heroku master`
* `heroku open`

## Changes Made to Original Angular CLI code

* Added [`server.js`](./server.js)
* Added `@angular/cli` to dev-dependencies in [`package.json`](package.json)
* Added `@angular/compiler-cli` to dev-dependencies in [`package.json`](package.json)
* Added `postinstall` script to [`package.json`](package.json) that builds app for production deployment
* Edited `start` script in [`package.json`](package.json) to launch run [`server.js`](server.js) instead of Angular CLI server




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
