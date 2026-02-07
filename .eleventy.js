const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Passthrough copy static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/scripts.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Custom filter: zero-pad numbers (e.g. 1 -> "01")
  eleventyConfig.addFilter("padStart", function(num, length) {
    return String(num).padStart(length || 2, "0");
  });

  // Blog collection sorted by post number
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByTag("blog").sort((a, b) => {
      return (a.data.number || 0) - (b.data.number || 0);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
