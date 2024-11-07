import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import esbuild from 'rollup-plugin-esbuild'
const config = {
  input: ["src/index.tsx", "src/home.jsx"],
  output: { dir: "page", format: "esm", entryFileNames: `[name].js` },
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    esbuild({
      tsconfig: "./tsconfig.build.json",
      jsx: "preserve"
    }),
    // typescript({ tsconfig: "./tsconfig.build.json", check: false }),
    babel({ include: ["src/**/*"], extensions: [".js", ".jsx", ".ts", ".tsx"], babelHelpers: "inline" }),
  ],
  treeshake: true,
  external: [/@zos\/.*/],
  // exclude: ["dist"],
};

export default config;
