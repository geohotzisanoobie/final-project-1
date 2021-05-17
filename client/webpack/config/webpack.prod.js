import { merge } from "webpack-merge";

import getCommonConfig from "./webpack.common";

import { BUILD_DIR } from "../utils/constants";

export default () =>
  merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    output: {
      filename: "[name].[contenthash].js",
      path: BUILD_DIR,
    },
  });
