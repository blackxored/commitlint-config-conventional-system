const conventional = require('@commitlint/config-conventional');
const fs = require('fs');
const path = require('path');
const { flatten, keys, mapObjIndexed, merge } = require('ramda');

const { patterns } = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), '.commitlint-patterns.json'),
    'utf-8',
  ),
);

const config = {
  settings: {
    scope: {
      enumerables: mapObjIndexed(
        val => ({
          description: val,
        }),
        patterns.components,
      ),
    },
  },
  rules: merge(conventional.rules, {
    'scope-enum': () => {
      const scopes = flatten([
        patterns.system,
        patterns.packages,
        keys(patterns.components),
      ]);

      return [2, 'always', scopes.concat(['system'])];
    },
  }),
};

module.exports = config;
