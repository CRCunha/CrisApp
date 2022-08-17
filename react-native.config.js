module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets'],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
};
