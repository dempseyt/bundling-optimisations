import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["examples/tree-shaking/my-file.js"],
  bundle: true,
  outfile: "output.js",
  treeShaking: false,
  minify: true,
});
``;
