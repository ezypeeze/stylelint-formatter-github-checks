# stylelint-formatter-github-checks
[![Build Status](https://travis-ci.org/ezypeeze/stylelint-formatter-github-checks.svg?branch=main)](https://travis-ci.org/ezypeeze/stylelint-formatter-github-checks)
[![Current NPM Version](https://badge.fury.io/js/stylelint-formatter-github-checks.svg)](https://badge.fury.io/js/stylelint-formatter-github-checks)
[![Dependencies](https://david-dm.org/ezypeeze/stylelint-formatter-github-checks.svg)](https://david-dm.org/ezypeeze/stylelint-formatter-github-checks.svg)
[![Codecov](https://codecov.io/gh/ezypeeze/stylelint-formatter-github-checks/branch/main/graph/badge.svg)](https://codecov.io/gh/ezypeeze/stylelint-formatter-github-checks)
[![Monthly Downloads](https://img.shields.io/npm/dm/stylelint-formatter-github-checks.svg)](https://img.shields.io/npm/dm/stylelint-formatter-github-checks.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/ezypeeze/stylelint-formatter-github-checks/badge.svg)](https://snyk.io/test/github/ezypeeze/stylelint-formatter-github-checks)


> Forked from [daanleenders/eslint-formatter-github-checks](https://github.com/daanleenders/eslint-formatter-github-checks) & adapted for stylelint

An Stylelint formatter to use with [Github Checks](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks#checks). It outputs a json format that outputs the json needed for the ['Update a check run'](https://docs.github.com/en/rest/reference/checks#update-a-check-run) API call, so you can send the stylelint output to github.

### Install
```sh
$ yarn add stylelint-formatter-github-checks -D
```

### Usage
```sh
$ stylelint "*.css" --custom-formatter=./node_modules/stylelint-formatter-github-checks
```