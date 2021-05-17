import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { ROOT_DIR } from "../../utils/constants";

export const loadStyles = (env) => {
  const isDev = env === "development";
  return {
    plugins: isDev
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
          }),
        ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: isDev ? true : false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  config: `${ROOT_DIR}/postcss.config.js`,
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDev ? true : false,
              },
            },
          ],
        },
      ],
    },
  };
};
