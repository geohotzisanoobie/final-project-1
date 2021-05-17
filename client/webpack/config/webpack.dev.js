import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

import getCommonConfig from "./webpack.common";

import { DIST_DIR, PORT, HOST } from "../utils/constants";

export default () =>
  merge(getCommonConfig(), {
    devtool: "eval-cheap-module-source-map",
    mode: "development",
    target: "web",
    entry: {
      main: ["webpack-hot-middleware/client"],
    },
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
    plugins: [new HotModuleReplacementPlugin()],
    devServer: {
      host: HOST,
      port: PORT,
      hot: true,
      historyApiFallback: true,
      overlay: true,
      open: true,
    },
  });
