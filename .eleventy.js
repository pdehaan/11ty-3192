const getFoo = require('./filters/get-foo.js');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("getFoo", getFoo);

  require("./shortcodes/index.js")(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
