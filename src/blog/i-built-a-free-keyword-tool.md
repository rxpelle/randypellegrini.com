---
date: 2026-03-03
title: "I Built a Free Keyword Research Tool for Authors"
heading: "I Built a Free Keyword Research Tool for Self-Published Authors (And Open-Sourced It)"
description: "Most KDP keyword tools cost money and do what Amazon autocomplete already does for free. So I built KDP Scout — a free, open-source CLI that mines keywords, imports your ad data, and scores everything so you know what's worth targeting."
ogTitle: "I Built a Free Keyword Research Tool for Authors"
ogDescription: "Most KDP keyword tools charge you for Amazon autocomplete. So I built a free one. KDP Scout is open-source and does more than most paid tools."
number: 23
bookTag: "Writing & Tools"
permalink: /blog/i-built-a-free-keyword-tool/
excerpt: "I got tired of paying for keyword tools that are basically just Amazon autocomplete with a price tag. So I built my own. It's free, open-source, and it does more than most paid alternatives."
prevPost: "/blog/five-warnings-before-every-collapse/"
prevTitle: "Five Warnings Before Every Collapse"
ctaTitle: "The Books I Built This For"
ctaText: 'KDP Scout was built for my own series — <em>The Architecture of Survival</em>, an 8-book historical thriller spanning 3,200 years, six books out. If you like indie tools built by authors who actually use them, you might like the books too. Start with Book 1, <em>The Aethelred Cipher</em>.'
ctaButtonUrl: "/books/"
ctaButtonText: "See the books"
nextPost: "/blog/i-built-a-free-book-formatting-tool/"
nextTitle: "Free Book Formatting Tool (Vellum & Atticus Alternative)"
---

I got tired of paying for keyword tools that are basically just Amazon autocomplete with a price tag.

If you've self-published on KDP, you know the drill. You need keywords for your book's backend metadata, for your Amazon Ads campaigns, and for figuring out where your book fits in the market. The standard advice is to pay $199 for Publisher Rocket or $39/month for Helium 10 and call it a day.

But here's what most of those tools actually do: they query Amazon's autocomplete API, dress up the results in a nice UI, and charge you for the privilege. Some add estimated search volume. Some add competition scores. But the core data? It's all coming from the same place you can type into yourself for free.

So I built something better.

## What KDP Scout Does

[KDP Scout](https://github.com/rxpelle/kdp-scout) is a command-line tool that handles the full keyword research workflow:

**Mine keywords from Amazon autocomplete.** Give it seed phrases and it expands them into hundreds of long-tail variations — the same data the paid tools use, just without the markup.

**Import your Amazon Ads data.** If you're running Sponsored Products campaigns, you've got a goldmine of real search term data sitting in your ad reports. KDP Scout imports those CSVs and cross-references them with your keyword database. Now you know which keywords people actually use to find books like yours — and which ones convert.

**Score everything.** Every keyword gets a composite score based on autocomplete position, ad impressions, clicks, orders, and competition signals. The high-scoring keywords are the ones worth targeting. The low-scoring ones are the ones you stop wasting bid money on.

**Track competitors.** Add competitor ASINs and track their BSR, pricing, and ratings over time. Useful for understanding market dynamics and timing your promotions.

**Export for KDP or Ads.** When you're done researching, export your scored keywords directly into formats you can paste into your KDP backend or upload to your ad campaigns.

## Why I Open-Sourced It

Honestly? Because the self-publishing community has enough people trying to sell you things. There are plenty of authors out there grinding with tight budgets, trying to figure out keywords without dropping money on tools they're not sure will help.

I built KDP Scout for my own books — *The Aethelred Cipher* and *The Genesis Protocol* — and it's been genuinely useful. It helped me find keywords I never would have thought of, identify which ad keywords were bleeding money, and focus my budget on what actually converts.

If it helps other authors do the same, that's a win. The tool is MIT licensed, which means you can use it, modify it, share it, whatever. No strings.

If you got something useful from this — or you're going to fork the repo and not look back — the easiest way to say thanks is to grab the novella that paid for the tool's development. It's free, no upsell, no email-trap. Plague-era historical thriller, ninety pages, the lead-in to an eight-book series.

<div class="book-promo-banner">
  <div class="book-promo-content">
    <strong>The series this tool was built for</strong>
    <span class="book-promo-sub"><em>The Architecture of Survival</em> — an 8-book historical thriller spanning 3,200 years. It starts with <em>The Aethelred Cipher</em>, set during the 1347 plague.</span>
  </div>
  <div class="book-promo-links">
    <a class="book-promo-link" href="/books/">
      <span>Browse the books</span>
      <span class="book-promo-stars">Six books live &middot; free on Kindle Unlimited</span>
    </a>
  </div>
</div>

## Update, November 2026

I wrote this post in March. Since then KDP Scout has picked up more than I expected, partly because other authors and developers started using it and sending fixes.

What's new:

- **Eight Amazon stores, not one.** Mining, tracking and trending now work on .com, .ca, .com.au, .de, .co.uk, .fr, .es and .it.
- **Reverse ASIN lookup.** Give it a book's ASIN and it shows which keywords that book ranks for. This is the fastest way I know to learn from a competitor.
- **Category finder.** Give it a keyword and it pulls the category paths from the search results, then estimates how many sales a day it would take to reach the top 20 in each one.
- **Backend keyword check.** `validate-keywords` checks your seven KDP keyword slots against the byte limit, flags words you're wasting because they already appear in your title, and catches stray multi-byte characters.
- **Trending, with no seed needed.** `kdp-scout trending` pulls rising terms from Amazon bestseller lists and Google suggestions.
- **A setup check.** `kdp-scout doctor` tests your Python, virtual environment, database, config and network in one pass, and prints a one-line fix for anything that fails. An outside contributor wrote it, and it answers most of the install questions I used to get.

Two smaller changes. A contributor caught autocomplete quietly returning Amazon department names instead of real search suggestions, and that's fixed. And the tool now needs **Python 3.10 or newer**, because 3.9 is past end of life.

## What You Need

Python 3.10 or higher. That's it for the core features. (On a Mac the built-in `python3` may still be 3.9. `brew install python@3.13` fixes that.)

```bash
git clone https://github.com/rxpelle/kdp-scout.git
cd kdp-scout
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
kdp-scout doctor
```

If you want actual search volume data (instead of estimates), you can optionally connect a DataForSEO API key — but it's not required. The free tier covers everything most authors need.

## The Honest Limitations

It's a command-line tool. If you've never opened a terminal, there's a learning curve. I didn't build a web dashboard or a pretty GUI because I wanted to keep it simple and free to run — no servers, no subscriptions, no accounts.

It also relies on scraping Amazon autocomplete, which means Amazon could change things at any time. That's true of every keyword tool, paid or free. The difference is you're not out $199 when it happens.

## Try It

The full docs, installation guide, and source code are on GitHub:

**[github.com/rxpelle/kdp-scout](https://github.com/rxpelle/kdp-scout)**

If you'd rather read than code: [start with Book 1](/books/). *The Aethelred Cipher* — a historical thriller set during the 1347 plague, the opening of my series *The Architecture of Survival*. Six books are live; the next one comes out when it's ready.

If you want more free tools instead: [Book Formatter](/blog/i-built-a-free-book-formatting-tool/) (replaces Vellum), [Cover Generator](/blog/i-built-a-free-cover-generator/) (AI-powered covers for $0.30), and [Review Miner](/blog/i-built-a-free-review-mining-tool/) (turn Amazon reviews into ad copy).
