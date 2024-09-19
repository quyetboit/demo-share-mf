const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  shared: (libraryName, defaultConfig) => {
    if (libraryName === '@shell/count-service') {
      console.log('Count services shared');
      return { singleton: true };
    }
    return defaultConfig;
  }
});
