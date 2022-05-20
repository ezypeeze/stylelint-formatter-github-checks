# stylelint-formatter-github-checks

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