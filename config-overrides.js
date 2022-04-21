
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

// MEMO: inspired by https://github.com/facebook/create-react-app/issues/11756#issuecomment-1001162736
module.exports = function override(config) {
  config.resolve.fallback = {
    stream: false
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
  );

  // MEMO: inspired by https://github.com/webpack/changelog-v5#automatic-nodejs-polyfills-removed
  config.plugins.push(
    new NodePolyfillPlugin()
  );

  // TODO: should fix it properly
  // eslint-disable-next-line max-len
  // MEMO: inspired by https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory
  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

  // Fixes dtrace-provider compilation bug described here:
  // https://github.com/chrisa/node-dtrace-provider/issues/114
  config.externals = [
    'dtrace-provider'
  ];

  config.module.rules.push({
    test: /\.m?js$/,
    include: /node_modules/,
    type: 'javascript/auto'
  });
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false
    }
  });

  return config;
};
