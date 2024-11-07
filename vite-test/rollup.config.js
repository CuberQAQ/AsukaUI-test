import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
/**
 * @type {import('rollup').RollupFileOptions}
 * @satisfies {import('rollup').RollupFileOptions}
 */
const config = {
  input: "page/index.jsx",
  output: { dir: "page" },
  plugins: [nodeResolve(), babel()],
  treeshake: true
  // exclude: ["dist"],
}


export default config;
