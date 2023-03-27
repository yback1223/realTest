module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'hotfix',
        'temp',
      ],
    ],
    'subject-empty': [2, 'never'],
    'references-empty': [2, 'never'],
    'header-pattern':
      /^(?<type>[a-z]+): (?<subject>[^\n]+) \(#(?<ticket>\d+)\)$/,
  },
};
