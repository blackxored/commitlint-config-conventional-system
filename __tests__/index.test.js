const config = require('../index');

describe('config', () => {
  it('parses .commitlint-patterns.json', () => {
    const scopes = config.rules['scope-enum']()[2];

    expect(scopes).toEqual(
      expect.arrayContaining([
        'build',
        'deps',
        'package',
        'release',
        'core',
        'native',
        'desktop',
        'web',
        'auth',
        'forms',
        'navigation',
        'networking',
        'notifications',
        'profile',
        'settings',
        'system',
      ]),
    );
  });
});
