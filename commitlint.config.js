module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'temp',
        'style',
        'refactor',
        'test',
        'chore',
        'hotfix',
        'docs',
      ],
    ],
    'header-max-length': [2, 'always', 50],
    'body-max-length': [0, 'never'],
  },
};
