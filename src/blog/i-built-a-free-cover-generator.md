---
date: 2026-03-13
title: "I Built an AI Book Cover Generator (And Open-Sourced It)"
heading: "I Built an AI Book Cover Generator for Self-Published Authors (And Open-Sourced It)"
description: "Professional book cover design costs $300-$1,500. Cover Generator uses Claude to pick your design and DALL-E to paint your background — then renders a KDP-ready cover for less than a quarter."
ogTitle: "I Built an AI Book Cover Generator (And Open-Sourced It)"
ogDescription: "Professional cover design costs $300+. This free tool uses AI to generate KDP-ready covers for less than $0.30."
number: 25
bookTag: "Writing & Tools"
permalink: /blog/i-built-a-free-cover-generator/
excerpt: "Your book cover is the most important piece of marketing you'll ever create. It has about two seconds to work — the time it takes a reader scrolling Amazon to decide whether to click or keep moving. I built a tool that generates professional, genre-appropriate covers using AI for less than $0.30."
prevPost: "/blog/i-built-a-free-book-formatting-tool/"
prevTitle: "I Built a Free Book Formatting Tool for Authors"
ctaTitle: "Check Out Cover Generator"
ctaText: 'Cover Generator is free, open-source, and built for indie authors who want professional covers without the price tag. <a href="https://github.com/rxpelle/cover-generator">Grab it on GitHub</a>.'
ctaButtonUrl: "https://github.com/rxpelle/cover-generator"
ctaButtonText: "Get Cover Generator"
---

Your book cover is the most important piece of marketing you'll ever create.

It has about two seconds to work. That's how long a reader scrolling through Amazon search results spends on your thumbnail before deciding to click or keep moving. In those two seconds, your cover needs to do three things: signal the genre, convey quality, and create curiosity. If it fails any of those, it doesn't matter how good your book is — nobody's going to read the blurb.

Professional cover design costs $300 to $1,500. For that money, you get a designer who understands genre conventions, knows what works at thumbnail size, and delivers print-ready files. It's usually worth the investment.

But I wanted to see if AI could do it. So I built a tool.

## What Cover Generator Does

[Cover Generator](https://github.com/rxpelle/cover-generator) is a command-line tool that generates KDP-ready book covers using two AIs working together:

**Claude picks the design.** You give it your title, genre, and a description of your book. It analyzes genre conventions — what colors, fonts, and layouts readers expect when they're browsing thriller vs. historical fiction vs. sci-fi — and returns a complete design specification: color palette, font choices, title line breaks, layout variant, and a prompt for the background art.

**DALL-E 3 paints the background.** Claude's design spec includes a prompt specifically tuned for your book's setting and mood. DALL-E generates a period-accurate atmospheric scene — no text, no words, just mood and setting. For my Book 3, set in Bronze Age Egypt, it generated torch-lit temple corridors with hieroglyphic walls and bronze vessels.

**Pillow renders the final cover.** The tool composites everything together: background art with dark gradient overlays for text readability, title with black outline and shadow for thumbnail visibility, subtitle, author name, and optional decorative elements. For paperbacks, it calculates spine width from your page count and generates a full wrap cover (back + spine + front) with proper KDP bleed margins.

One command, and you get a print-ready PNG, a PDF, a thumbnail preview, and an Amazon-realistic 150px thumbnail so you can see exactly what shoppers will see.

## Why Thumbnail Size Matters

This is the thing most authors get wrong about covers. They design for the full-size image — the version you see when you click into a product page. But that's not where the sale happens. The sale happens in search results, where your cover is roughly the size of a postage stamp.

At thumbnail size, detail disappears. Subtle gradients become flat. Thin fonts become invisible. Cluttered compositions become mud. What survives is contrast, color, and the biggest word on the cover.

Cover Generator is built around this reality. Every design decision prioritizes thumbnail readability:

- Title text gets black outlines and heavy shadows so it pops over any background
- DALL-E backgrounds get automatic dark gradient overlays at the top and bottom — creating natural contrast zones exactly where text needs to live
- The AI is instructed to break titles into maximum 2-3 lines with the fewest words possible, so the type can be massive
- Every generation outputs a 150px Amazon thumbnail alongside the full image, so you can check readability before you publish

## The Cost Math

A single cover variant costs about $0.09 — roughly a penny for Claude's design pass and eight cents for a DALL-E 3 HD image. Generate three variants to pick from and you're at $0.27.

Compare that to the alternatives:

| Option | Cost |
|--------|------|
| Professional designer | $300 - $1,500 |
| Fiverr (decent quality) | $50 - $200 |
| Canva Pro + stock photos | $13/month + time |
| **Cover Generator (3 variants)** | **$0.27** |

I'm not claiming AI covers are better than a great designer. A skilled human who understands your book will produce something more nuanced and original. But for generating concepts, testing ideas, or producing covers when your budget is tight, the cost difference is three orders of magnitude.

## How I Used It

I'm working on Book 3 of my series, *The First Key*, set during the Bronze Age Collapse in 1200 BCE Egypt. I needed a cover that signaled historical fiction, conveyed the weight of ancient civilization, and was period-accurate — not medieval, not gothic, specifically Egyptian New Kingdom.

I fed the tool my book description — Egyptian physician, genetic memory, seven bronze keys, temples burning — and generated variants. The AI picked gold-on-dark palettes for the first round, which looked good at full size but disappeared at thumbnail. So I updated the tool to force high-contrast white text with black outlines on DALL-E backgrounds, added the dark gradient overlays, and regenerated.

The second round was dramatically better. White title text punching through dark temple scenes, clearly readable at Amazon thumbnail size, unmistakably ancient Egypt. I generated a dozen variants in about five minutes for under a dollar.

Will I use one of these as my final cover? Maybe — or maybe I'll use them as concepts to refine with a designer. Either way, the tool did in minutes what would have taken days of back-and-forth to communicate visually.

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

## What's Under the Hood

Eight genre profiles — thriller, historical, sci-fi, mystery, literary, romance, fantasy, horror — each defining color palettes, font preferences, title styling, and DALL-E mood hints. The AI picks from these conventions but can deviate based on your book's specific needs.

Font discovery searches your system fonts (Georgia, Impact, Helvetica, Palatino, etc.) and maps them to design roles. KDP dimension calculations handle five trim sizes, three paper types, and compute spine width from page count down to the pixel.

The renderer handles text shadows, outlines, word wrapping, and gradient overlays. For paperback wraps, it generates spine text (rotated, centered), back cover with blurb (with word wrap around the ISBN barcode zone), and proper bleed margins on all sides.

68 tests cover every rendering path — all genre/palette combinations, dimension calculations, font discovery, background generation, and thumbnail creation.

## The Honest Limitations

It's a command-line tool. No GUI, no drag-and-drop. If you've never used a terminal, there's a learning curve.

It uses system fonts, not custom typefaces. You get Georgia, Impact, Helvetica, and whatever else is installed on your Mac. A real designer would use premium fonts chosen specifically for your genre and title. This matters — typography is half the cover.

DALL-E backgrounds are good but not perfect. You'll occasionally get artifacts, odd compositions, or scenes that don't quite match your vision. The fix is to generate more variants (they're cheap) or provide your own background image with the `--background` flag.

And the biggest limitation: AI doesn't understand your book the way you do. It designs based on genre conventions and the description you provide. It won't capture the specific emotional tone that makes your story unique. For that, you still need a human.

## What You Need

Python 3.9+, an Anthropic API key (for Claude), and optionally an OpenAI API key (for DALL-E backgrounds). On a Mac:

```bash
git clone https://github.com/rxpelle/cover-generator.git
cd cover-generator
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
cp .env.example .env
# Add your API keys to .env
```

Then:

```bash
# Ebook cover with DALL-E background
cover-generator ebook "Your Book Title" \
  --genre thriller \
  --dalle \
  --variants 3 \
  -d "Brief description of your book's setting and mood"

# Full paperback wrap
cover-generator generate "Your Book Title" \
  --genre historical \
  --pages 350 \
  --dalle \
  --blurb-file blurb.txt
```

## Try It

Full docs, source code, and installation on GitHub:

**[github.com/rxpelle/cover-generator](https://github.com/rxpelle/cover-generator)**

MIT licensed. Free forever. If you find it useful and you're looking for something to read, check out [my books](/books.html). An honest review goes further than any payment.
