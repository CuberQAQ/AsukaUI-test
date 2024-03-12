import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
const config = {
  input: "page/index.jsx",
  output: { dir: "page" },
  plugins: [nodeResolve(), babel()],
  exclude: ["dist"],
};

export default config;
