module.exports = {
  name: 'remote2',
  exposes: {
    './Routes': 'remote2/src/app/remote-entry/entry.routes.ts',
  },
};
