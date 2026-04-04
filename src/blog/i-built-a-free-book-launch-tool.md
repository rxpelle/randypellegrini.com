---
date: 2026-03-31
title: "I Built a Free Book Launch Planner for Authors"
heading: "I Built a Free Book Launch Planner for Self-Published Authors (And Open-Sourced It)"
description: "A book launch has 50+ tasks across 8 phases spanning 30 days. Most authors track it in their head or a messy spreadsheet. Launch Orchestrator manages the whole thing from the command line."
ogTitle: "I Built a Free Book Launch Planner for Authors"
ogDescription: "A book launch has 50+ tasks across 30 days. Most authors wing it. This free tool plans and tracks everything from pre-order to post-launch."
number: 32
bookTag: "Writing & Tools"
permalink: /blog/i-built-a-free-book-launch-tool/
excerpt: "Launching a book is project management. Pre-order setup, ARC distribution, ad campaigns, promo site submissions, social media, email sequences — all on a timeline. I built a tool that tracks all of it."
prevPost: "/blog/i-built-a-free-review-mining-tool/"
prevTitle: "I Built a Free Review Mining Tool for Authors"
ctaTitle: "The Book I'm Launching With This Tool"
ctaText: '<em>The First Key</em> (Book 3 in The Architecture of Survival) launches April 15, 2026. This is the first book where every launch task is being tracked by Launch Orchestrator. <a href="https://github.com/rxpelle/launch-orchestrator">Grab it on GitHub</a>.'
nextPost: "/blog/books-like-the-name-of-the-rose/"
nextTitle: "10 Books Like The Name of the Rose"
ctaButtonUrl: "/books/"
ctaButtonText: "See my books"
---

Launching a self-published book is project management disguised as marketing.

You've got 30+ days of coordinated tasks: setting up pre-orders, distributing ARCs, submitting to promo sites, scheduling ads, writing email sequences, posting on social media, running Kindle Countdown deals, coordinating with your newsletter swaps, applying for BookBub, timing your Goodreads giveaway. Each task has dependencies. Each task has a deadline. Miss the sequence and your launch loses momentum.

Most authors track this in their head. Some use a spreadsheet. A few use Trello or Notion. All of these break down when you're in the middle of launch week and you can't remember whether you submitted to Freebooksy or just planned to.

So I built a tool that manages the entire launch from the command line.

## What Launch Orchestrator Does

[Launch Orchestrator](https://github.com/rxpelle/launch-orchestrator) generates a complete launch plan and tracks your progress through every phase:

**Template-based launch plans.** Run one command and get a full 8-phase timeline customized to your launch date:

```bash
launch-orchestrator init -t "The First Key" -d 2026-04-15 -a "Randy Pellegrini"
```

That generates a YAML plan with 50+ tasks across these phases:

1. **T-30: Pre-launch** — Final manuscript, cover finalized, metadata set
2. **T-21: Pre-order** — KDP pre-order live, landing page up, early buzz
3. **T-14: ARC distribution** — Send to reviewers, BookSirens, early readers
4. **T-7: Marketing prep** — Ad campaigns drafted, email sequence loaded, promo sites submitted
5. **T-3: Final push** — Social media blitz, newsletter swap confirmations, countdown begins
6. **Launch day** — Go live, email blast, ad campaigns activate
7. **T+3: Momentum** — Follow up on reviews, adjust ad bids, engage readers
8. **T+7: Post-launch** — Analyze results, plan next steps, celebrate

**Dashboard view.** See everything at a glance — what's done, what's overdue, what's coming up:

```bash
launch-orchestrator status
```

Color-coded by status. Progress bars per phase. Alerts for overdue tasks. No opening a browser, no logging into anything.

**Task management.** Mark tasks done, flag blockers, add notes — all from the terminal:

```bash
launch-orchestrator done "Submit to Freebooksy"
launch-orchestrator block "Amazon A+ Content" --note "Waiting for approval"
```

**Pipeline-aware.** Tasks reference other tools in the pipeline. Need ad copy? The plan links to [ad-copy-gen](https://github.com/rxpelle/ad-copy-gen). Need to check competitors? It links to [comp-tracker](https://github.com/rxpelle/comp-tracker). The launch plan knows about the ecosystem.

## Why I Needed This

I launched *The Aethelred Cipher* with a messy Google Doc checklist. I launched *The Genesis Protocol* with a slightly less messy spreadsheet. Both times, I forgot things. Both times, I submitted to promo sites late, started ad campaigns after the optimal window, and scrambled during launch week because I hadn't pre-loaded my email sequences.

The problem isn't motivation. It's sequencing. A book launch is a 30-day project with hard dependencies, and you're running it while also doing your day job and probably writing the next book. You need a system, not willpower.

<div class="book-promo-banner">
  <div class="book-promo-content">
    <strong>Launching April 15, 2026</strong>
    <span class="book-promo-sub">The First Key is the first book where every launch task runs through this tool. Pre-order now.</span>
  </div>
  <div class="book-promo-links">
    <a class="book-promo-link" href="/books/">
      <span>Book 3: The First Key</span>
      <span class="book-promo-stars">Pre-order available</span>
    </a>
    <a class="book-promo-link" href="/books/">
      <span>Start with Book 1</span>
      <span class="book-promo-stars">&#9733;&#9733;&#9733;&#9733;&#9733; 4.7 on Amazon</span>
    </a>
  </div>
</div>

## What You Need

Python 3.9+.

```bash
git clone https://github.com/rxpelle/launch-orchestrator.git
cd launch-orchestrator
pip install -e .
```

Initialize a plan, then start checking things off. The YAML file is human-readable, so you can edit it directly if you want to customize phases or add tasks.

## The Honest Limitations

It's a command-line tool. If you want drag-and-drop Gantt charts, use Notion.

It's opinionated about launch structure — the default template reflects how I launch books, which may not match your process exactly. But the YAML is fully editable, so you can reshape it however you want.

It doesn't automate the tasks themselves (it doesn't submit to promo sites for you or schedule your emails). It tracks what needs to happen and when. Execution is still on you.

## Try It

Full docs and source code on GitHub:

**[github.com/rxpelle/launch-orchestrator](https://github.com/rxpelle/launch-orchestrator)**

If you find it useful, the best way to say thanks is to check out [my books](/books/). Book 3 launches April 15 — and this tool is running the show.
