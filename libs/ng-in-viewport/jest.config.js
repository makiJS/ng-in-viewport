module.exports = {
  name: 'ng-in-viewport',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-in-viewport',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
