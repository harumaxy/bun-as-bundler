import BunPluginTailwind from "bun-plugin-tailwind"

await Bun.build({
  entrypoints: ["index.html"],
  outdir: "dist",
  plugins: [BunPluginTailwind]
})