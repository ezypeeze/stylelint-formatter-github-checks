# eslint-formatter-github-checks
An ESLint formatter to use with [Github Checks](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks#checks). It outputs a json format that outputs the json needed for the ['Update a check run'](https://docs.github.com/en/rest/reference/checks#update-a-check-run) API call, so you can send the eslint output to github.
