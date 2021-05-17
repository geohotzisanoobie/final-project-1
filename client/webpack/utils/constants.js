import { path as ROOT_DIR } from "app-root-path";
import { resolve } from "path";

export { ROOT_DIR };
export const SRC_DIR = resolve(ROOT_DIR, "src");
export const DIST_DIR = resolve(ROOT_DIR, "dist");
export const BUILD_DIR = resolve(ROOT_DIR, "build");
export const TEMPLATE_DIR = resolve(ROOT_DIR, "src/html");
export const HOST = "localhost";
export const PORT = 8080;
