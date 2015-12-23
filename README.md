# gh-rate-limit

[![NPM version](https://img.shields.io/npm/v/gh-rate-limit.svg)](https://www.npmjs.com/package/gh-rate-limit)
[![Build Status](https://travis-ci.org/shinnn/gh-rate-limit.svg?branch=master)](https://travis-ci.org/shinnn/gh-rate-limit)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-rate-limit.svg)](https://coveralls.io/github/shinnn/gh-rate-limit)
[![Dependency Status](https://david-dm.org/shinnn/gh-rate-limit.svg)](https://david-dm.org/shinnn/gh-rate-limit)
[![devDependency Status](https://david-dm.org/shinnn/gh-rate-limit/dev-status.svg)](https://david-dm.org/shinnn/gh-rate-limit#info=devDependencies)

Get your current [rate limit](https://developer.github.com/v3/#rate-limiting) status of the [Github API](https://developer.github.com/v3/#overview)

```javascript
const ghRateLimit = require('gh-rate-limit');

ghRateLimit({
  token: 'xxxx' // your Github API access token
}).then(status => {
  status;
  /* =>
        {
          core: {
            limit: 5000,
            remaining: 4861,
            reset: 1451463150
          },
          search: {
            limit: 30,
            remaining: 30,
            reset: 1451459998
          }
        }
  */
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-rate-limit
```

## API

```javascript
const ghRateLimit = require('gh-rate-limit');
```

### ghRateLimit([*options*])

*options*: `Object` ([`gh-get` options](https://github.com/shinnn/gh-get#options))  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) instance

It makes an [API](https://developer.github.com/v3/) request to [get your current Github API rate limit status](https://developer.github.com/v3/gists/#unstar-a-gist), and returns a promise.

The promise will be [*fulfilled*](https://promisesaplus.com/#point-26) with a [JSON object](https://developer.github.com/v3/rate_limit/#response) if successful, otherwise [*rejected*](https://promisesaplus.com/#point-30) with an error.

```javascript
ghRateLimit().then(status => {
  // Get the status for unauthenticated requests if no token specified.
  status;
  /* =>
        {
          core: {
            limit: 60,
            remaining: 60,
            reset: 1451463150
          },
          search: {
            limit: 10,
            remaining: 10,
            reset: 1451459998
          }
        }
  */
});
```

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
