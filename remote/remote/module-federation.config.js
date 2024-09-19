module.exports = {
  name: 'remote',
  exposes: {
    './Routes': 'remote/src/app/remote-entry/entry.routes.ts',
  },
};
