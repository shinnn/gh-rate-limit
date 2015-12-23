'use strong';

const ghRateLimit = require('.');
const test = require('tape');

process.env.GITHB_TOKEN = '';

test('ghRateLimit()', t => {
  t.plan(5);

  t.strictEqual(ghRateLimit.name, 'ghRateLimit', 'should have a function name.');

  ghRateLimit().then(json => {
    t.strictEqual(
      json.core.limit,
      60,
      'should get the rate limit status for unauthenticated requests.'
    );

    t.deepEqual(
      json.search.limit,
      10,
      'should get the rate limit status of the Search API for unauthenticated requests.'
    );
  });

  ghRateLimit({token: process.env.TOKEN_FOR_TEST}).then(json => {
    t.strictEqual(
      json.core.limit,
      5000,
      'should get the rate limit statuss for authenticated requests.'
    );
  });

  ghRateLimit({token: 'invalid_token'}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '401 Unauthorized (Bad credentials)',
      'should fail when it cannot get the rate limit status.'
    );
  });
});
