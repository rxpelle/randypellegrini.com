const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.ignores.add("src/blog/_drafts/**");

  // Passthrough copy static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/scripts.js");
  eleventyConfig.addPassthroughCopy("src/analytics.js");
  eleventyConfig.addPassthroughCopy("src/amazon-localize.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");
  eleventyConfig.addPassthroughCopy("src/05cb6ad1c6394679add68a9ab03eb884.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

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

  // Related posts: one same-topic post, one listicle, one deep cut per post,
  // assigned in a single balanced pass so every post receives roughly the same
  // number of inbound links, oldest first on ties (the old "3 newest with the
  // same tag" rule starved older posts of internal links and Google deindexed them).
  let _relatedCache = { key: null, map: null };
  eleventyConfig.addFilter("relatedPosts", function(collection, pageUrl) {
    const posts = [...(collection || [])].sort((a, b) => (a.data.number || 0) - (b.data.number || 0));
    const key = posts.map(p => p.url).join("|");
    if (_relatedCache.key !== key) {
      const inbound = new Map(posts.map(p => [p.url, 0]));
      const isList = p => /^(\d+ |the \d+ best|best |books like)/i.test(p.data.title || "");
      const map = new Map();
      for (const p of posts) {
        const picked = [];
        const choose = pool => {
          const c = pool.filter(x => x.url !== p.url && !picked.includes(x));
          if (!c.length) return;
          c.sort((a, b) => (inbound.get(a.url) - inbound.get(b.url)) || ((a.data.number || 0) - (b.data.number || 0)));
          picked.push(c[0]);
          inbound.set(c[0].url, inbound.get(c[0].url) + 1);
        };
        choose(posts.filter(x => x.data.bookTag === p.data.bookTag));
        choose(posts.filter(isList));
        choose(posts);
        map.set(p.url, picked);
      }
      _relatedCache = { key, map };
    }
    return _relatedCache.map.get(pageUrl) || [];
  });

  // Numbered <h2> entries ("## 3. Title") -> ItemList positions for schema.org
  eleventyConfig.addFilter("listItems", function(content) {
    if (!content) return [];
    const items = [];
    const re = /<h2[^>]*>\s*(\d+)\.\s*([\s\S]*?)<\/h2>/g;
    let m;
    while ((m = re.exec(content))) {
      const name = m[2].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
      items.push({ position: Number(m[1]), name });
    }
    return items;
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
