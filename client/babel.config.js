export default (api) => {
  // Cache
  api.cache.never();

  return {
    presets: [
      "@babel/react",
      "@babel/preset-typescript",
      [
        "@babel/env",
        {
          debug: true,
          spec: true,
          loose: true,
          modules: false,
          targets: {
            esmodules: true,
          },
        },
      ],
    ],
  };
};
