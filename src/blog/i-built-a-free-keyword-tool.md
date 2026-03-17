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
ctaTitle: "Check Out KDP Scout"
ctaText: 'KDP Scout is free, open-source, and built for indie authors who want real keyword data without paying for it. <a href="https://github.com/rxpelle/kdp-scout">Grab it on GitHub</a>.'
ctaButtonUrl: "https://github.com/rxpelle/kdp-scout"
ctaButtonText: "Get KDP Scout"
nextPost: "/blog/i-built-a-free-book-formatting-tool/"
nextTitle: "I Built a Free Book Formatting Tool for Authors"
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

<div class="book-promo-banner">
  <div class="book-promo-content">
    <strong>The books I built this tool for</strong>
    <span class="book-promo-sub">A medieval plague meets a modern conspiracy. Two timelines. One secret that could rewrite history.</span>
  </div>
  <div class="book-promo-links">
    <a class="book-promo-link" href="/books.html">
      <span>Book 1: The Aethelred Cipher</span>
      <span class="book-promo-stars">&#9733;&#9733;&#9733;&#9733;&#9733; 4.8 on Amazon</span>
    </a>
    <a class="book-promo-link" href="/books.html#genesis-protocol">
      <span>Book 2: The Genesis Protocol</span>
      <span class="book-promo-stars">New Release</span>
    </a>
  </div>
</div>

## What You Need

Python 3.9 or higher. That's it for the core features.

```bash
git clone https://github.com/rxpelle/kdp-scout.git
cd kdp-scout
pip install -e .
```

If you want actual search volume data (instead of estimates), you can optionally connect a DataForSEO API key — but it's not required. The free tier covers everything most authors need.

## The Honest Limitations

It's a command-line tool. If you've never opened a terminal, there's a learning curve. I didn't build a web dashboard or a pretty GUI because I wanted to keep it simple and free to run — no servers, no subscriptions, no accounts.

It also relies on scraping Amazon autocomplete, which means Amazon could change things at any time. That's true of every keyword tool, paid or free. The difference is you're not out $199 when it happens.

## Try It

The full docs, installation guide, and source code are on GitHub:

**[github.com/rxpelle/kdp-scout](https://github.com/rxpelle/kdp-scout)**

If you find it useful and you're looking for something to read, check out [my books](/books.html). An honest review goes further than any payment.
