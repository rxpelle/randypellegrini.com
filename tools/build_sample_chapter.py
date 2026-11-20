"""Build a free sample-chapter page from a book's published (canonical) file.

The chapter text is taken verbatim from the canonical EPUB/DOCX listed in
plague_novel/books.yaml. Re-run after a republish that touches the chapter.
Keep each sample under 10% of the book (KDP Select exclusivity rule).

Usage:
  python3 -I tools/build_sample_chapter.py <book-key>

Book keys and their settings live in BOOKS below. Requires pandoc for DOCX.
"""
import html
import os
import re
import subprocess
import sys
import zipfile

PLAGUE = os.path.expanduser("~/Documents/antigravity/plague_novel")
SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BOOKS = {
    "b1": {
        "source": "book_1_aethelred_cipher/manuscript/The Aethelred Cipher.epub",
        "epub_member": "ch004.xhtml",
        "start": "CHAPTER 1 - THE KEY",
        "end": None,
        "out": "src/the-aethelred-cipher-chapter-1.njk",
        "permalink": "/the-aethelred-cipher/chapter-1/",
        "book_url": "/the-aethelred-cipher/",
        "go": "aethelred-cipher",
        "utm": "ch1",
        "title": "The Aethelred Cipher",
        "chapter_name": "Chapter 1: The Key",
        "series_pos": 1,
        "cover": "/assets/book-cover.webp",
        "og_image": "https://randypellegrini.com/assets/book-cover.jpg",
        "minutes": 15,
        "seo_desc": "Read the first chapter of The Aethelred Cipher free: Mainz, 1347. A monk is murdered at his copying desk, and a young scribe inherits an iron key as the Black Death reaches the Rhineland.",
        "og_desc": "Mainz, 1347. A murdered monk, an iron key, and the Black Death on the way. Read the first chapter free.",
        "lead": "The Black Death is a year from Mainz. In the monastery of St. Martin, a young scribe named Thomas walks into the copying room with his breakfast and finds his teacher bleeding at the desk. This is the whole first chapter, exactly as it appears in the book.",
        "end_line": "Thomas has the key. The Order knows he has it.",
        "notes": "Free to read with Kindle Unlimited · Audiobook available · Every book in the series stands alone.",
    },
    "b2": {
        "source": "book_2_genesis_protocol/rewrite_v12/chapters_v5/The_Genesis_Protocol_ebook.docx",
        "start": "CHAPTER 1 - THE BURNING",
        "end": "CHAPTER 2 - THE REVELATION",
        "out": "src/the-genesis-protocol-chapter-1.njk",
        "permalink": "/the-genesis-protocol/chapter-1/",
        "book_url": "/the-genesis-protocol/",
        "go": "genesis-protocol",
        "utm": "b2ch1",
        "title": "The Genesis Protocol",
        "chapter_name": "Chapter 1: The Burning",
        "series_pos": 2,
        "cover": "/assets/book2-cover.webp",
        "og_image": "https://randypellegrini.com/assets/book2-cover.jpg",
        "minutes": 12,
        "seo_desc": "Read the first chapter of The Genesis Protocol free: New Haven, 2019. A geneticist reaches her source's house as it burns, and is left holding what the source died to protect.",
        "og_desc": "1:47 AM, New Haven. Her source's house is burning, and geneticist Sarah Chen is left holding the key. Read the first chapter free.",
        "lead": "November 2019. MIT geneticist Sarah Chen gets an urgent message from a source who has found something wrong at a genetics company called GenVault. By the time Sarah reaches the source's house in the Connecticut woods, it is on fire. This is the whole first chapter, exactly as it appears in the book.",
        "end_line": "Sarah has an iron key, a dead woman's evidence, and the memory of a black sedan that watched her leave.",
        "notes": "Free to read with Kindle Unlimited · Audiobook available · Book 2 of The Architecture of Survival, and it stands alone.",
    },
}


def chapter_html(cfg):
    src = os.path.join(PLAGUE, cfg["source"])
    if src.endswith(".epub"):
        with zipfile.ZipFile(src) as z:
            name = next(n for n in z.namelist() if n.endswith(cfg["epub_member"]))
            x = z.read(name).decode("utf-8")
        body = re.search(r"<section[^>]*>(.*)</section>", x, re.S).group(1)
    else:
        x = subprocess.run(["pandoc", src, "-t", "html", "--wrap=none"],
                           capture_output=True, text=True, check=True).stdout
        i = x.index(cfg["start"])
        j = x.index(cfg["end"])
        body = x[x.rfind("<h", 0, i):x.rfind("<h", 0, j)]
    body = re.sub(r"<h1[^>]*>.*?</h1>", "", body, flags=re.S).strip()
    # First paragraph is the dateline in every book so far.
    assert body.startswith("<p>"), body[:80]
    body = '<p class="ch-dateline">' + body[len("<p>"):]
    body = re.sub(r"<hr\s*/?>", '<hr class="ch-break" />', body)
    # The dateline is followed by its own <hr> in DOCX books; drop that one.
    body = re.sub(r'^(<p class="ch-dateline">(?:(?!</p>).)*</p>)\s*<hr class="ch-break" />', r"\1", body, count=1, flags=re.S)
    return body


def render(cfg, body):
    words = len(html.unescape(re.sub(r"<[^>]+>", " ", body)).split())
    go = f"/go/{cfg['go']}/?utm_source=site&utm_medium=sample&utm_campaign={cfg['utm']}-" + "{pos}"
    page = f"""---
title: "{cfg['title']} — {cfg['chapter_name']}"
fullTitle: "Read Chapter 1 of {cfg['title']} Free | Randy Pellegrini"
description: "{cfg['seo_desc']}"
ogTitle: "Read Chapter 1 of {cfg['title']} — Free"
ogDescription: "{cfg['og_desc']}"
ogImage: "{cfg['og_image']}"
permalink: {cfg['permalink']}
---
{{% extends "base.njk" %}}

{{% block pageStyles %}}
<style>
  .ch-dateline {{ font-style: italic; opacity: .8; }}
  .ch-break {{ border: 0; text-align: center; margin: 2em 0; }}
  .ch-break::after {{ content: "\\2042"; opacity: .6; }}
  .ch-lead {{ display: flex; gap: 20px; align-items: center; margin: 0 0 32px; }}
  .ch-lead img {{ width: 84px; height: auto; border-radius: 4px; box-shadow: 0 6px 16px rgba(27,29,31,.2); }}
  .ch-end {{ text-align: center; margin: 48px 0 24px; }}
  .ch-end .bp-ku-note {{ margin-top: 10px; }}
</style>
{{% endblock %}}

{{% block content %}}
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Chapter",
  "name": "{cfg['chapter_name']}",
  "position": 1,
  "url": "https://randypellegrini.com{cfg['permalink']}",
  "wordCount": {words},
  "isPartOf": {{ "@id": "https://randypellegrini.com{cfg['book_url']}#book" }},
  "author": {{ "@id": "https://randypellegrini.com/#author" }}
}}
</script>
<div class="article-container">
  <div class="article-header reveal">
    <p class="eyebrow">Free sample · Book {cfg['series_pos']} of The Architecture of Survival</p>
    <h1>{cfg['title']}</h1>
    <p class="article-meta">{cfg['chapter_name']} · By Randy Pellegrini · about {cfg['minutes']} minutes</p>
  </div>

  <div class="article-body reveal delay-1">
    <div class="ch-lead">
      <a href="{go.format(pos='top')}"><img src="{cfg['cover']}" alt="{cfg['title']} cover" width="84" /></a>
      <p>{cfg['lead']}</p>
    </div>

{body}

    <div class="ch-end">
      <p><strong>That's the end of Chapter 1.</strong> {cfg['end_line']}</p>
      <a class="button" href="{go.format(pos='end')}">Keep reading on Amazon &rarr;</a>
      <p class="bp-ku-note">{cfg['notes']}</p>
      <p><a class="text-link" href="{cfg['book_url']}">About the book</a> · <a class="text-link" href="/books/">The whole series</a></p>
    </div>
  </div>

  <div class="article-email-cta reveal delay-2">
    <h3>Get series updates</h3>
    <p>New book releases, research notes, and dispatches from <em>The Architecture of Survival</em>, straight to your inbox.</p>
    <form class="signup" data-newsletter="true">
      <label class="sr-only" for="ch1-email">Email address</label>
      <input id="ch1-email" name="email" type="email" placeholder="you@email.com" required aria-label="Email address" />
      <button class="button" type="submit"><span>Subscribe</span></button>
    </form>
    <div class="form-messages" style="display: none;"></div>
  </div>
</div>
{{% endblock %}}
"""
    return page, words


def main():
    key = sys.argv[1]
    cfg = BOOKS[key]
    body = chapter_html(cfg)
    page, words = render(cfg, body)
    with open(os.path.join(SITE, cfg["out"]), "w", encoding="utf-8") as f:
        f.write(page)
    print(f"{key}: wrote {cfg['out']} ({words} words)")


if __name__ == "__main__":
    main()
