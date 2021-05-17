import HTMLWebpackPlugin from "html-webpack-plugin";
import { TEMPLATE_DIR } from "../../utils/constants";

export const setupHtml = () => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: `${TEMPLATE_DIR}/index.html`,
      title: "💥 final project",
    }),
  ],
});
