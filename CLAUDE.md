# randypellegrini.com

Author site for Randy Pellegrini's 8-book series *The Architecture of Survival*. Eleventy 3 (Nunjucks + Markdown), deployed to GitHub Pages.

## Build and deploy
- `npm run build` builds to `_site/`; `npm run serve` serves it locally. Always build cleanly before committing.
- Pushing to `main` deploys (`.github/workflows/pages.yml`) and pings IndexNow from the sitemap. There is no staging site, so a push is a live publish.
- Check live pages with node `fetch` (curl is denied in settings). Pass `{cache:'reload'}` when re-checking CSS or JS.

## Layout
- `src/_data/books.js` holds book metadata (titles, ASINs, covers, `sampleUrl`, word counts). Change book facts here, not in templates.
- `src/_data/redirects.js` + `src/go.njk` generate the `/go/<slug>/` storefront redirects. Every Amazon link goes through `/go/`, never straight to Amazon.
- `src/_data/coffeeSymbols.js` feeds `/coffee-symbols/<slug>/` (via `coffee-symbol.njk`). Its meanings must match the table in `src/blog/how-to-read-coffee-grounds.md`.
- `src/_includes/blog-post.njk` is the post template. It builds ItemList JSON-LD from list posts and the end CTA, which includes a "Read Chapter 1 free" link when the post's book has a `sampleUrl`.
- `src/sitemap.njk` is hand-maintained: add every new top-level page. `src/llms.txt` is the summary for AI crawlers; update it when a major page is added.
- Chapter 1 sample pages are GENERATED. Run `python3 -I tools/build_sample_chapter.py b1|b2`; never hand-edit `src/the-*-chapter-1.njk`. The text comes from the canonical book file in `../plague_novel/books.yaml`. Keep samples under 10% of the book (KDP Select rule).

## Blog posts
- Frontmatter: `date`, `heading`, `title`, `description`, `number` (sequential, currently 62), `bookTag` ("Book N: Title"), `permalink`, `excerpt`, `prevPost`/`prevTitle`, `nextPost`/`nextTitle`, `ctaText`.
- A new post requires updating the previous post's `nextPost`/`nextTitle`.
- Reading-list posts get: a one-line intro mentioning Randy's book, a `<div class="quick-answer">` box, an FAQ section, and the book placed honestly in the list with a disclosure line.
- Lists are not cross-posted to Medium. Leave about two weeks between list posts.

## UTM conventions (measured in GA4; don't rename existing campaigns)
- Blog list posts: `/go/<slug>/?utm_source=blog&utm_medium=listicle&utm_campaign=<topic>-<position>`, where position is `intro`, `entry` or `cta` (e.g. `bioterror-entry`).
- Medium essays: `utm_source=medium&utm_medium=essay`. Substack: `utm_source=substack&utm_medium=email`.
- Coffee symbol pages: `utm_source=grounds&utm_medium=symbol&utm_campaign=symbol-<slug>`.
- Sample pages: `ch1-*` (Book 1), `b2ch1-*` (Book 2).

## Style
- In-text links must stay visible. The global `a` reset hides them, and `.article-body` rules restore them.
- Plain, reader-first copy. No em-dash pileups, no unverifiable quotes or claims about other authors.
- Signup forms post to the Apps Script deployment URL in `src/analytics.js`. That URL must not change (see `../personal_assistant/apps-script/CLAUDE.md`).
