/*!
 * gh-rate-limit | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-rate-limit
*/
'use strict';

const ghGet = require('gh-get');

const USER_AGENT = 'https://github.com/shinnn/gh-rate-limit';

function extractNonDeprecatedProperties(response) {
  return response.body.resources;
}

module.exports = function ghRateLimit(options) {
  if (options) {
    options.headers = Object.assign({'user-agent': USER_AGENT}, options.headers);
  } else {
    options = {
      headers: {
        'user-agent': USER_AGENT
      }
    };
  }

  return ghGet('rate_limit', options).then(extractNonDeprecatedProperties);
};
