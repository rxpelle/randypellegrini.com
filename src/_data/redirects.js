module.exports = function () {
  const pages = [
    "about",
    "blog",
    "books",
    "characters",
    "free-story",
    "read-your-grounds",
    "reviews",
    "series",
    "timeline",
  ];

  const blogPosts = [
    "blood-memory-science-meets-fiction",
    "complexity-kills",
    "cooperation-is-genetic",
    "ethics-of-genetic-selection",
    "every-pandemic-has-an-nda",
    "five-warnings-before-every-collapse",
    "how-good-people-get-recruited",
    "how-the-black-death-spread",
    "i-built-a-free-keyword-tool",
    "knowledge-wants-to-be-hoarded",
    "medieval-cipher-systems",
    "operation-paperclip",
    "pattern-recognition",
    "real-medieval-conspiracies",
    "silence-is-inherited",
    "the-corporations-that-knew",
    "the-money-dies-first",
    "the-observer-effect",
    "the-trolley-problem-at-civilizational-scale",
    "the-women-who-noticed",
    "why-civilizations-collapse",
    "writing-a-12-book-series",
    "writing-villain-might-be-right",
  ];

  const redirects = pages.map((p) => ({
    from: `/${p}.html`,
    to: `/${p}/`,
  }));

  blogPosts.forEach((p) => {
    redirects.push({
      from: `/blog/${p}.html`,
      to: `/blog/${p}/`,
    });
  });

  return redirects;
};
