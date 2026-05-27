// Canonical book list — source of truth for /go/<slug>/ redirect pages.
// When adding a book: append here, rebuild, and the /go/ pages are generated.

module.exports = function () {
  return [
    {
      slug: "aethelred-cipher",
      title: "The Aethelred Cipher",
      seriesPosition: 1,
      amazonUrl: "https://www.amazon.com/Aethelred-Cipher-ebook/dp/B0GJTGCHS2",
    },
    {
      slug: "genesis-protocol",
      title: "The Genesis Protocol",
      seriesPosition: 2,
      amazonUrl: "https://www.amazon.com/dp/B0GPM973N1",
    },
    {
      slug: "first-key",
      title: "The First Key",
      seriesPosition: 3,
      amazonUrl: "https://www.amazon.com/dp/B0GSWLM1WV",
    },
    {
      slug: "love-remembers",
      title: "Love Remembers in Silence",
      seriesPosition: 4,
      amazonUrl: "https://www.amazon.com/dp/B0GX2TG21Y",
    },
    {
      slug: "what-augustine-hid",
      title: "What Augustine Hid",
      seriesPosition: 5,
      amazonUrl: "https://www.amazon.com/dp/B0H34DZVXS",
    },
  ];
};
