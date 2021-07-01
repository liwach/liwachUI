module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      [
          'module-resolver',
          {
              root: ['.'],
              extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
              alias: {
                  'components': './src/components',
                  'navigation': './src/navigation',
              },
          },
      ]
  ]
};