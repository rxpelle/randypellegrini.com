const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Passthrough copy static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/scripts.js");
  eleventyConfig.addPassthroughCopy("src/analytics.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Custom filter: zero-pad numbers (e.g. 1 -> "01")
  eleventyConfig.addFilter("padStart", function(num, length) {
    return String(num).padStart(length || 2, "0");
  });

  // Custom filter: format date for display (UTC to avoid timezone shifts)
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
  });

  // Custom filter: ISO date for datetime attribute
  eleventyConfig.addFilter("isoDate", function(dateObj) {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    // Use UTC date components to avoid timezone shifts
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  // Word count for schema.org
  eleventyConfig.addFilter("wordCount", function(content) {
    if (!content) return 0;
    return content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  });

  // Blog collection sorted by post number, excluding drafts
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByTag("blog")
      .filter(item => !item.data.draft)
      .sort((a, b) => {
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
