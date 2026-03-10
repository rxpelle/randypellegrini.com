---
date: 2026-03-10
title: "I Built a Free Book Formatting Tool for Authors"
heading: "I Built a Free Book Formatting Tool for Self-Published Authors (And Open-Sourced It)"
description: "Vellum costs $250. Atticus costs $150. Book Formatter costs nothing. It takes a markdown or Word file and generates print-ready PDFs, EPUBs, large-print editions, and hardcovers — all with one command."
ogTitle: "I Built a Free Book Formatting Tool for Authors"
ogDescription: "Vellum costs $250. Atticus costs $150. Book Formatter costs nothing. One command to format your book for every platform."
number: 24
bookTag: "Writing & Tools"
permalink: /blog/i-built-a-free-book-formatting-tool/
excerpt: "I got tired of paying hundreds of dollars for book formatting software that turns a manuscript into a PDF. So I built my own. It's free, open-source, and it handles paperbacks, ebooks, large print, and hardcovers in one command."
prevPost: "/blog/i-built-a-free-keyword-tool/"
prevTitle: "I Built a Free Keyword Research Tool for Authors"
ctaTitle: "Check Out Book Formatter"
ctaText: 'Book Formatter is free, open-source, and built for indie authors who want professional formatting without the price tag. <a href="https://github.com/rxpelle/book-formatter">Grab it on GitHub</a>.'
ctaButtonUrl: "https://github.com/rxpelle/book-formatter"
ctaButtonText: "Get Book Formatter"
---

If you've self-published a book, you've hit the formatting wall.

You finish your manuscript. You've spent months — maybe years — writing, revising, getting it right. Now you need to turn it into something that actually looks like a book. A print-ready PDF for KDP. An EPUB for everywhere else. Maybe a large-print edition. Maybe a hardcover.

The standard advice? Pay $250 for Vellum (Mac only), or $150 for Atticus, or wrestle with free tools that produce output that looks like a college term paper. Most indie authors just pay up, because the alternative is spending days fighting with Word templates and hoping the margins are right.

I didn't want to keep paying for something that should be simple. So I built it myself.

## What Book Formatter Does

[Book Formatter](https://github.com/rxpelle/book-formatter) is a command-line tool that takes your manuscript — either markdown files or a Word document — and generates every format you need for publishing:

**Paperback PDF.** Print-ready interior for KDP Print or IngramSpark. Proper trim sizes (5x8, 5.5x8.5, 6x9, and more), calculated gutters that adjust for page count, running headers, widow/orphan control, and a professional title page with copyright notice.

**EPUB 3.** Standard ebook format for Draft2Digital, Google Play, Barnes & Noble, and libraries. Embedded cover image, table of contents, and clean typography.

**Large-print PDF.** Same interior, bigger type. 16pt body text on 7x10 trim with wider line spacing. Ready for KDP's large-print category.

**Hardcover PDF.** 6x9 format with adjusted margins for case laminate or dust jacket binding.

One command builds all four:

```bash
book-formatter build
```

That's it. Your manuscript goes in, four publication-ready files come out.

## How It Works

You write your manuscript in markdown or Word (.docx). If you use markdown, you can either keep each chapter in its own numbered file (`01_THE_STORM.md`, `02_THE_AFTERMATH.md`) or put everything in one file with `# Chapter` headings. If you use Word, just write normally with Heading 1 for chapter titles — Book Formatter handles the conversion.

You configure your book with a simple `book.yaml` file:

```yaml
title: "My Book"
author: "My Name"
manuscript: "chapters/"

typography:
  body_font: "EB Garamond"
  body_size: "11pt"

print:
  trim: "5.5x8.5"
```

Run `book-formatter build` and it generates everything. The tool uses Pandoc and XeLaTeX under the hood — the same typesetting engine used by academic publishers — so the output is genuinely professional.

## Why Not Just Use Vellum?

Vellum is good software. So is Atticus. But they cost money, and they do things I don't need.

I don't need drag-and-drop chapter reordering. I don't need 47 ornamental scene break designs. I don't need a visual preview that shows me what my book looks like on a Kindle — because what matters is what it looks like when a reader opens it, not what it looks like in a formatting tool.

What I need is correct margins, proper gutters, clean typography, and output files that KDP and IngramSpark accept without errors. Book Formatter does that. If you need the bells and whistles, Vellum and Atticus are there. If you need the formatting done right and done free, this is the tool.

## Why I Open-Sourced It

Same reason I open-sourced [KDP Scout](/blog/i-built-a-free-keyword-tool/). The indie publishing community has enough people charging money for basic utilities. Formatting a book is not a $250 problem. It's a solved problem — the open-source tools just haven't been packaged in a way that's easy to use.

I formatted both [*The Aethelred Cipher*](/books/) and *The Genesis Protocol* with this tool. It produces the exact same quality output as Vellum, because it's using the same underlying technology (LaTeX) that professional publishers have used for decades.

MIT licensed. Use it, modify it, fork it. No strings.

## What You Need

Python 3.9+, Pandoc, and a LaTeX distribution. On a Mac:

```bash
brew install pandoc
brew install --cask mactex-no-gui
git clone https://github.com/rxpelle/book-formatter.git
cd book-formatter
pip install -e .
```

Then `book-formatter init` to create your config file, and `book-formatter build` to generate your formats.

## The Honest Limitations

It's a command-line tool. No GUI. If you've never used a terminal, there's a small learning curve — but the commands are simple and the README walks you through everything.

It doesn't do custom scene break ornaments or decorative drop caps (yet). It focuses on clean, professional formatting that matches what traditional publishers produce. If you want your chapters to open with elaborate floral borders, this isn't the tool for you.

It also requires LaTeX to be installed for PDF generation, which is a large download (~4GB for MacTeX). But you install it once and forget about it.

## Try It

Full docs, installation guide, and source code on GitHub:

**[github.com/rxpelle/book-formatter](https://github.com/rxpelle/book-formatter)**

If you find it useful, the best way to say thanks is to check out [my books](/books/) and leave an honest review. That goes further than any payment.
