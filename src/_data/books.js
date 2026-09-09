// Canonical book list — source of truth for /go/<slug>/ redirect pages,
// the generated /<book-title>/ landing pages (book-page.njk), the sitemap,
// and series cross-links.
// When adding a book: append here, rebuild, and the /go/ + landing pages are generated.
// Book 4 has a hand-built page (love-remembers-in-silence.njk) — customPage: true
// keeps the generator from overwriting it while the rest of the data stays usable.

module.exports = function () {
  const books = [
    {
      slug: "aethelred-cipher",
      title: "The Aethelred Cipher",
      seriesPosition: 1,
      amazonUrl: "https://www.amazon.com/Aethelred-Cipher-ebook/dp/B0GJTGCHS2",
      pageUrl: "/the-aethelred-cipher/",
      cover: "/assets/book-cover.webp",
      ogCover: "/assets/book-cover.jpg",
      coverW: 600,
      coverH: 955,
      era: "Medieval Germany, 1347 CE",
      tagline:
        "A dying monk. An iron key. A conspiracy that has been engineering bloodlines for 2,500 years.",
      metaDescription:
        "A dying monk, an iron key, and a cipher hidden in manuscript marginalia as the Black Death reaches Mainz in 1347. Book 1 of The Architecture of Survival.",
      facts: [
        { label: "Setting", value: "Medieval Germany, 1347&ndash;1350 CE" },
        { label: "Generation", value: "90 of 112" },
        { label: "Length", value: "~78,000 words" },
        { label: "Released", value: "January 2026" },
      ],
      datePublished: "2026-01",
      audio: true,
      rating: { value: "4.0", count: "248" },
      paragraphs: [
        "When a dying monk named Brother Hamo thrusts an iron key into scribe Thomas of Eltville's hands during a deadly attack by the Order's Gray Robes, Thomas inherits more than an artifact. He becomes the target of a millennia-old conspiracy that has been engineering bloodlines for over 2,500 years.",
        "The Black Death rages across Europe, killing half the population. But Thomas begins experiencing impossible “memories” that don't belong to him&mdash;ancient Egyptian hieroglyphs, medical knowledge centuries ahead of his time, and fragments of a genetic protocol designed to preserve human consciousness across generations.",
        "Margarethe, a cloth merchant whose scholar father Heinrich was tortured to death by the Order seven years earlier, recognizes the same pattern when she discovers her family has been part of the defensive network for generations. Together, they must decipher the cipher hidden in manuscript marginalia while the Order's agents close in, determined to recover both the key and eliminate anyone who has accessed defensive knowledge.",
      ],
    },
    {
      slug: "genesis-protocol",
      title: "The Genesis Protocol",
      seriesPosition: 2,
      amazonUrl: "https://www.amazon.com/dp/B0GPM973N1",
      pageUrl: "/the-genesis-protocol/",
      cover: "/assets/book2-cover.webp",
      ogCover: "/assets/book2-cover.jpg",
      coverW: 600,
      coverH: 954,
      era: "Modern Era, 2019–2025",
      tagline:
        "Forty-three seconds to escape the building. Four billion lives on the line. And a truth the world will never be allowed to hear.",
      metaDescription:
        "Geneticist Sarah Chen has forty-three seconds to escape with proof that the pandemic was engineered. Book 2 of The Architecture of Survival, set 2019–2025.",
      facts: [
        { label: "Setting", value: "Modern Era, 2019&ndash;2025" },
        { label: "Generation", value: "107 of 112" },
        { label: "Length", value: "~75,000 words" },
        { label: "Released", value: "March 2026" },
      ],
      datePublished: "2026-03",
      audio: true,
      rating: { value: "4.7", count: "85" },
      paragraphs: [
        "When geneticist Dr. Sarah Chen discovers an engineered bioweapon hidden inside GenVault Corporation's laboratories, she has forty-three seconds to escape the building before security locks down. What she carries out&mdash;Morrison's classified archive&mdash;is proof that THRESHOLD, a program designed to reduce the global population by four billion, is real and already deployed.",
        "Dr. James Morrison, GenVault's head of research, built THRESHOLD after his daughter Emily's death convinced him that humanity's next collapse was inevitable. His solution: engineer a targeted pathogen and deploy it through forty-seven hubs worldwide. Catherine Wells&mdash;his superior, a descendant of the Order's three-thousand-year bloodline&mdash;has been managing Morrison and the program from the shadows.",
        "Recruited by FBI Agent Torres and working alongside coworker Dr. David Lagos, Sarah races to prevent the remaining forty-six hubs from activating after Hub 47 in Kunming goes live. But stopping the weapon is only half the problem. The government's response&mdash;a classified NDA that silences Sarah permanently under the Espionage Act&mdash;means the world will never know the pandemic was engineered. Sarah must choose between justice and the math that says silence saves more lives than truth.",
      ],
    },
    {
      slug: "first-key",
      title: "The First Key",
      seriesPosition: 3,
      amazonUrl: "https://www.amazon.com/dp/B0GSWLM1WV",
      pageUrl: "/the-first-key/",
      cover: "/assets/book3-cover.webp",
      ogCover: "/assets/book3-cover.jpg",
      coverW: 600,
      coverH: 960,
      era: "Bronze Age Egypt, 1177 BCE",
      tagline:
        "The Bronze Age is collapsing. One physician sees the pattern — and preserves the cure in blood.",
      metaDescription:
        "1177 BCE. As the Bronze Age collapses, royal physician Nefertari hides the cure for civilizational collapse in her people's blood. Book 3 of The Architecture of Survival.",
      facts: [
        { label: "Setting", value: "Egypt to Athens, 1177&ndash;335 BCE" },
        { label: "Generation", value: "0&ndash;42 of 112" },
        { label: "Length", value: "~65,000 words" },
        { label: "Status", value: "Available now" },
      ],
      datePublished: null,
      audio: true,
      rating: { value: "4.6", count: "25" },
      paragraphs: [
        "1177 BCE. The Bronze Age Collapse is accelerating. Cities are burning across the Mediterranean. Trade networks are failing. Literacy is vanishing. Nefertari, royal physician and scribe, sees what others miss: the collapse isn't random &mdash; it's systemic cascade failure, and it will happen again.",
        "When Pharaoh Tausret dies from fever during the refugee crisis, her deathbed request launches Nefertari's life work: preserve the knowledge in blood. Working with her colleague and lover Amenhotep, Nefertari creates the Genesis Protocol &mdash; seven bronze keys encoding collapse recognition patterns. Tausret's twelve-year-old daughter Tirzah chooses to become the first “living key,” the bloodline carrier whose descendants will include Sarah Chen 3,200 years later.",
        "But Amenhotep sees the same evidence and reaches the opposite conclusion: if traits can be inherited, selective breeding becomes the answer. Their philosophical split &mdash; and the end of their love &mdash; creates two competing networks that will chase each other through 3,200 years. The Order is born.",
      ],
    },
    {
      slug: "love-remembers",
      title: "Love Remembers in Silence",
      seriesPosition: 4,
      amazonUrl: "https://www.amazon.com/dp/B0GX2TG21Y",
      pageUrl: "/love-remembers-in-silence/",
      customPage: true,
      cover: "/assets/book4-cover.webp",
      ogCover: "/assets/book4-cover.jpg",
      coverW: 600,
      coverH: 960,
      era: "Roman Judea, 26–42 CE",
      tagline:
        "What if the love between two people was so deep it outlived them — and twelve hundred years later, the world called it God?",
      metaDescription:
        "What if the love between two people was so deep it outlived them — and twelve hundred years later, the world called it God? Book 4 of The Architecture of Survival.",
      facts: [
        { label: "Setting", value: "Roman Judea, 26&ndash;42 CE" },
        { label: "Generation", value: "42 of 112" },
        { label: "Released", value: "April 26, 2026" },
      ],
      datePublished: "2026-04-26",
      audio: true,
      rating: { value: "4.7", count: "26" },
      paragraphs: [],
    },
    {
      slug: "what-augustine-hid",
      title: "What Augustine Hid",
      seriesPosition: 5,
      amazonUrl: "https://www.amazon.com/dp/B0H34DZVXS",
      pageUrl: "/what-augustine-hid/",
      cover: "/assets/book5-cover.webp",
      ogCover: "/assets/book5-cover.jpg",
      coverW: 600,
      coverH: 960,
      era: "North Africa, 387–430 CE",
      tagline:
        "Augustine of Hippo hid something inside his most famous book — and the world has been carrying it for sixteen hundred years without knowing.",
      metaDescription:
        "410 CE. Augustine of Hippo receives a papyrus older than Rome — and hides it inside the book the Church will copy for a thousand years. Book 5 of The Architecture of Survival.",
      facts: [
        { label: "Setting", value: "Hippo Regius, 387&ndash;430 CE" },
        { label: "Length", value: "~80,000 words" },
        { label: "Released", value: "May 27, 2026" },
      ],
      datePublished: "2026-05-27",
      audio: false,
      rating: null,
      paragraphs: [
        "The year is 410 CE. Augustine of Hippo is fifty-six years old, twenty-three years a bishop, and the most consequential intellectual of the late Roman world. When a dying courier is dropped at his basilica gate carrying a hidden papyrus older than the empire itself &mdash; a document that has predicted, with terrible accuracy, the fall of every civilization before Rome &mdash; Augustine recognizes the handwriting of the network his mother taught him to watch for, the one he has been carrying a piece of bronze for since the night she died at Ostia.",
        "He has thirty years before the Vandal armies cross the strait. Thirty years to hide what cannot be lost, to write a book that will outlive empire, and to test which of the men in his household is the one the work is meant for &mdash; while reckoning with the choices that come with being the bishop the state uses to enforce its will.",
        "What Augustine Hid is a novel about how knowledge survives the end of the world &mdash; not in marble libraries, but in the spines of codices, in the silences between bishops who know each other's secrets, in a single sentence quietly woven into a book the Church will copy for a thousand years.",
      ],
    },
    {
      slug: "split-pomegranate",
      title: "The Split Pomegranate",
      seriesPosition: 6,
      amazonUrl: "https://www.amazon.com/dp/B0HDK6SGM3",
      pageUrl: "/the-split-pomegranate/",
      cover: "/assets/book6-cover.webp",
      ogCover: "/assets/book6-cover.jpg",
      coverW: 600,
      coverH: 900,
      era: "Damascus & Jerusalem, 1140–1187 CE",
      tagline:
        "Two people who could read the memory held in stone and metal. One secret older than the kingdoms around them. And a love kept only across an impossible distance.",
      metaDescription:
        "A Jewish engineer in Damascus and a Templar mason share an impossible gift — and a twenty-year love across the lines of the Crusades. Book 6 of The Architecture of Survival.",
      facts: [
        { label: "Setting", value: "Damascus, Jerusalem &amp; Languedoc, 1140&ndash;1187 CE" },
        { label: "Length", value: "~91,000 words" },
        { label: "Released", value: "August 8, 2026" },
      ],
      datePublished: "2026-08-08",
      audio: false,
      rating: null,
      paragraphs: [
        "Eschiva bint Yehiel is a Jewish engineer in twelfth-century Damascus &mdash; she lays a hand to worked stone or metal and knows the maker, the year, the flaw waiting inside it. She builds the secret water of a great city, keeps a seal-trade for a cover, and lets no one close enough to learn what she truly guards: one chamber of a network six hundred years old that has carried forbidden knowledge through every collapse, and that she has protected alone since her mother died.",
        "Brother Guilhem of Carcassonne, a Templar mason, can do the same impossible thing with his hands. When the two meet across the lines of the Second Crusade, each recognizes in the other the one truth neither can say aloud &mdash; and begins a love carried for twenty years in letters and coded seals, while the Order that shelters Guilhem moves to turn the network's inheritance into a registry of bloodlines it can own and breed.",
        "The Split Pomegranate is a literary historical novel about what we agree to preserve and what we agree to become &mdash; two people holding something ancient against the fire, told the way Madeline Miller and Anita Diamant tell the past: intimate, exacting, and lit from within. It is Book 6 of The Architecture of Survival, and it stands entirely on its own.",
      ],
    },
    {
      slug: "nobody-lied-to-her",
      title: "Nobody Lied to Her",
      seriesPosition: 7,
      amazonUrl: null, // set on launch day (Sept 8) when the ASIN exists
      comingSoon: true,
      releaseLabel: "September 8, 2026",
      pageUrl: "/nobody-lied-to-her/",
      cover: "/assets/book7-cover.jpg",
      ogCover: "/assets/book7-cover-og.jpg",
      coverW: 600,
      coverH: 960,
      era: "Berlin & America, 1927–1955",
      tagline:
        "The Nazis got their sterilization law from America. This is the novel of the woman who spent twenty-two years proving it — and what it cost her to be right.",
      metaDescription:
        "In 1933, a Berlin physician finds American names in the footnotes of the Nazi sterilization law. Book 7 of The Architecture of Survival — the American law that wrote the Nazi one.",
      facts: [
        { label: "Setting", value: "Berlin &amp; America, 1927&ndash;1955" },
        { label: "Length", value: "~95,000 words" },
        { label: "Release", value: "September 8, 2026" },
      ],
      datePublished: "2026-09-08",
      audio: false,
      rating: null,
      paragraphs: [
        "In 1933, a Berlin physician read the new German sterilization law and found American names in the footnotes. Rachel Morgenstern was twenty-five years old. She had a hospital post she was about to lose, a father who would not leave, and a habit of reading documents more carefully than the people who wrote them. It took her twenty-two years to prove what those footnotes meant.",
        "The trail ran from a card index on Long Island holding half a million American families &mdash; to a Virginia courtroom where a young woman named Carrie Buck was sterilized by order of the Supreme Court, in a case her own lawyer had been hired to lose &mdash; to a room at Nuremberg where German physicians defended themselves by reading American law aloud.",
        "She was right about all of it. She was right for twenty-two years, against the evidence of her own profession, and at a cost she never once wrote down. And nobody lied to her. Not once, in any of it. That is the part she could never make anybody understand. A novel of the American law that wrote the Nazi one.",
      ],
    },
    // Book 8 — the series finale. On hold pending Randy's rewrite; no date, no
    // title reveal. When confirmed: uncomment, set slug/title/cover, and flip
    // series surfaces.
  ];

  // Derived link fields. Books without an ASIN yet (pre-launch) must never emit an
  // empty redirect target — /go/nobody-lied-to-her/ was shipping url="" — so they
  // fall back to their own landing page until amazonUrl is filled in.
  return books.map((b) => {
    const asin = (b.amazonUrl && (b.amazonUrl.match(/\/dp\/([A-Z0-9]{10})/) || [])[1]) || null;
    return {
      ...b,
      asin,
      linkUrl: b.amazonUrl || b.pageUrl,
      // One-click "write a review" target. Stable per slug, so back matter printed
      // in an ebook keeps working once the ASIN exists.
      reviewUrl: asin
        ? `https://www.amazon.com/review/create-review?asin=${asin}`
        : b.pageUrl,
    };
  });
};
