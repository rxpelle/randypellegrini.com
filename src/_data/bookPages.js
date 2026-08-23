// Books that get a generated landing page from book-page.njk.
// Book 4 is excluded — it has a hand-built page (love-remembers-in-silence.njk).

const books = require("./books.js");

module.exports = function () {
  return books().filter((b) => !b.customPage);
};
