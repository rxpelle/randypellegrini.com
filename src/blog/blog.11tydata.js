// Per-post og:image: posts tagged "Book N: …" get that book's og cover so
// social link cards show the right book instead of the site-wide default.
module.exports = {
  eleventyComputed: {
    ogImage: (data) => {
      if (data.ogImage) return data.ogImage;
      const match = /^Book (\d+):/.exec(data.bookTag || "");
      if (!match) return undefined;
      const book = data.books && data.books[parseInt(match[1], 10) - 1];
      if (!book || !book.ogCover) return undefined;
      return data.site.url + book.ogCover;
    },
  },
};
