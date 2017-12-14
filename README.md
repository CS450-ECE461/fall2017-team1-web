# CSCI 45000 Team-1 ui

[![Build Status](https://travis-ci.org/MyPureCloud/webrtc-stats-gatherer.svg?branch=master)](https://travis-ci.org/MyPureCloud/webrtc-stats-gatherer)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone git@github.com:CS450-ECE461/fall2017-team1-web.git`
* `cd fall2017-team1-web`
* `bower install`
* `npm install`

Linux systems may have trouble completing npm install because of permissions issues. The current workaround is to use the command:
`sudo chown -R $(whoami) [path/to]/fall2017-team1-web/node_modules`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

There are multiple different test commands you can invoke that will run different levels of tests

* `ember test` - Runs all style guides as well as Unit, Integration, and Acceptance Tests and outputs results to the command line

* `ember test --server` - Runs all style guides as well as Unit, Integration, and Acceptance Tests and outputs the results to a webpage

* `npm run pre-push-test` - This script runs only style guides and units tests. Runs automatically whenever you attempt to push to github

* `npm run test-with-coverage` - Runs `ember test` with the code coverage option turned on. Outputs the code coverage results to the `coverage/` folder in HTML format

* `npm run test-ci` - Runs the tests in random order (good for catching poorly written test cases). Automatically run by Travis-CI on every pull request

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/) - Framework docs
* [ember-cli](https://ember-cli.com/) - CLI docs
* [ember observer](https://emberobserver.com/) - List of open source Ember plugins
* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Provides some extra debugging help

## Github Workflow Guidelines

We will use the same guidelines as [the backend team](https://github.com/450-team-1/server-api/wiki/Github-Workflow-Standards)

## Style Guides

To help maintain consistent code and promote best practices we are using the following plugins/libraries
* [eslint](https://eslint.org) - General javascript best practices
* [eslint-plugin-ember-suave](https://github.com/DockYard/eslint-plugin-ember-suave) - Ember specific js rules
* [ember-cli-template-lint](https://github.com/rwjblue/ember-cli-template-lint) - For best practices in handlebars (.hbs) files

### Shortcuts to the Rules Enforced By Each

* [eslint rules](https://eslint.org/docs/rules/)
* [ember suave rules](https://github.com/DockYard/styleguides/tree/master/engineering)
* [ember-template-lint rules](https://github.com/rwjblue/ember-template-lint/blob/master/docs/rules.md)
