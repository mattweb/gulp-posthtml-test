import { task, src, dest } from "gulp";

import tap from "gulp-tap";
import rename from "gulp-rename";
import posthtml from "gulp-posthtml";

task("html", () => {
  let path;

  const plugins = [require("posthtml-include")({ root: path })];
  const options = { parser: require("posthtml-sugarml")() };

  return src("src/*.html")
    .pipe(tap((file) => (path = file.path)))
    .pipe(posthtml(plugins, options))
    .pipe(rename({ ext: ".html" }))
    .pipe(dest("dest"));
});
