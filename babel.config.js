module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@navigations": "./src/navigations",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
