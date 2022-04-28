const { task, src, dest } = require("gulp");

const tap = require("gulp-tap");
const rename = require("gulp-rename");
const posthtml = require("gulp-posthtml");

task("html", () => {
  let path;

  const plugins = [require("posthtml-include")({ root: path })];
  const options = { parser: require("posthtml-sugarml")() };

  return src("src/*.html")
    .pipe(tap((file) => (path = file.path)))
    .pipe(posthtml(plugins))
    .pipe(rename({ ext: ".html" }))
    .pipe(dest("dest"));
});
