---
date: 2026-03-31
title: "I Built a Free Review Mining Tool for Authors"
heading: "I Built a Free Review Mining Tool for Self-Published Authors (And Open-Sourced It)"
description: "Your book's reviews contain everything you need to write better ad copy, fix your blurb, and understand what readers actually care about. Review Miner analyzes them for free."
ogTitle: "I Built a Free Review Mining Tool for Authors"
ogDescription: "Your reviews contain your best ad copy, your biggest blind spots, and what readers actually love. This free tool mines all of it."
number: 31
bookTag: "Writing & Tools"
permalink: /blog/i-built-a-free-review-mining-tool/
excerpt: "Amazon reviews are a goldmine of reader psychology — what hooked them, what lost them, what made them recommend your book. I built a tool that analyzes all of it and turns it into actionable data."
prevPost: "/blog/the-plague-that-saved-jerusalem/"
prevTitle: "The Plague That Saved Jerusalem"
ctaTitle: "The Books I Built This For"
ctaText: 'Review Miner helped me understand what readers love about <em>The Aethelred Cipher</em> (4.7 stars, 68 reviews) and <em>The Genesis Protocol</em> (4.9 stars). If you like tools built by an author who uses them, you might like the books too. <a href="https://github.com/rxpelle/review-miner">Review Miner is free on GitHub</a>.'
ctaButtonUrl: "/books/"
ctaButtonText: "See my books"
nextPost: "/blog/i-built-a-free-book-launch-tool/"
nextTitle: "I Built a Free Book Launch Planner for Authors"
---

Your Amazon reviews already contain everything you need to sell more books. You're just not reading them the right way.

I don't mean skimming your own reviews for ego boosts (or damage control). I mean systematically analyzing what readers say about books in your genre — yours and your competitors' — to understand what language they use, what they care about, and where existing books fail them.

The readers who leave reviews are doing free market research for you. They're telling you exactly what words trigger a purchase, what promises your blurb should make, and what gaps exist in your category that nobody's filling. Most authors ignore this data or read it casually. I wanted to extract it properly.

So I built a tool.

## What Review Miner Does

[Review Miner](https://github.com/rxpelle/review-miner) is a command-line tool that imports Amazon reviews and uses AI to analyze them across several dimensions:

**Sentiment analysis.** Not just positive/negative — it breaks down what specifically readers loved and hated. Pacing? Characters? World-building? The ending? You get a structured breakdown, not a star rating.

**Ad copy generation.** The best ad copy comes from your readers' own words. Review Miner extracts the most compelling phrases and patterns from positive reviews and generates ad copy variations you can test directly in Amazon Ads. Real reader language converts better than anything you'll write in a vacuum.

**Gap analysis.** What are readers complaining about in your competitors' books? Those complaints are your opportunities. Review Miner identifies the recurring criticisms in a category and shows you exactly where you can differentiate.

**Competitor comparison.** Import reviews from multiple books and compare them side by side. Who has stronger characters? Who has pacing problems? Where does your book win, and where does it lose?

**Monitoring.** Set up automated checks on your books. Review Miner tracks new reviews over time and sends you email digests so you're not compulsively refreshing your Amazon page.

## Why This Matters More Than You Think

Most indie authors write their blurb once and forget about it. They write ad copy based on what they think sounds good. They guess at their positioning.

But your readers are literally telling you what works. When someone writes "I couldn't put it down after chapter 3," that's not just a nice review — it's a data point. When five different reviewers mention "the twist at the end," that's your hook. When a competitor's readers keep saying "great concept but the pacing dragged in the middle," that's your opening.

Review Miner turns that scattered feedback into structured data you can act on.

<div class="book-promo-banner">
  <div class="book-promo-content">
    <strong>The books behind this tool</strong>
    <span class="book-promo-sub">Review Miner helped shape the ad strategy for both books. The readers told me what worked — I just listened.</span>
  </div>
  <div class="book-promo-links">
    <a class="book-promo-link" href="/books/">
      <span>Book 1: The Aethelred Cipher</span>
      <span class="book-promo-stars">&#9733;&#9733;&#9733;&#9733;&#9733; 4.7 on Amazon</span>
    </a>
    <a class="book-promo-link" href="/books/#genesis-protocol">
      <span>Book 2: The Genesis Protocol</span>
      <span class="book-promo-stars">&#9733;&#9733;&#9733;&#9733;&#9733; 4.9 on Amazon</span>
    </a>
  </div>
</div>

## What You Need

Python 3.9+ and an Anthropic API key (for the AI analysis). The API costs are minimal — analyzing 100 reviews runs about $0.15.

```bash
git clone https://github.com/rxpelle/review-miner.git
cd review-miner
pip install -e .
```

Import reviews from a CSV export, then run the analysis:

```bash
review-miner import --file reviews.csv --title "My Book" --asin B0EXAMPLE
review-miner analyze 1
review-miner adcopy 1
review-miner gaps 1
```

## The Honest Limitations

It's a command-line tool. No web dashboard.

It requires you to export reviews yourself (Amazon doesn't offer a public review API). You can copy-paste from your KDP reports or use a scraping tool to get competitor reviews.

The AI analysis is only as good as the input — a book with 5 reviews won't give you the same depth as one with 200. But even a handful of reviews surface patterns you'd miss reading them one at a time.

## Try It

Full docs and source code on GitHub:

**[github.com/rxpelle/review-miner](https://github.com/rxpelle/review-miner)**

If you find it useful, the best way to say thanks is to check out [my books](/books/) and leave an honest review. You'd be contributing to the very dataset that makes this tool work.
