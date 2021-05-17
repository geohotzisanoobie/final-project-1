import { SRC_DIR } from "../utils/constants";
import { merge } from "webpack-merge";

import * as modules from "../modules";

const env = process.env.NODE_ENV;

export default () =>
  merge(
    {
      entry: {
        main: [SRC_DIR],
      },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
    modules.setupHtml(),
    modules.loadStyles(env),
    modules.transpileCode()
  );
