module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets/*': './assets/*',
            '@navigations/*': './src/navigations/*',
            '@domains/*': './src/domains/*',
            '@share/*': './src/share/*',
          },
        },
      ],
    ],
  };
};
