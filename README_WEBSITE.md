# The Plague Novel Saga - Author Website

Complete author website for Randy Pellegrini's 12-book epic spanning 3,200 years.

## 📁 Site Structure

```
author_site/
├── index.html              # Homepage with series overview
├── books.html              # All 12 books with expandable details
├── series.html             # Saga concept and themes
├── characters.html         # Character database (filterable)
├── timeline.html           # Visual 3,200-year timeline
├── styles.css              # Complete styling system
├── scripts.js              # Interactive features
├── assets/
│   └── book-cover.png      # Book 1 cover image
├── CNAME                   # Custom domain config
├── .nojekyll               # GitHub Pages config
└── DEPLOY_GITHUB_PAGES.md  # Deployment instructions
```

## 🎨 Design System

### Color Palette
- **Primary Background**: Warm beige (#f4efe6)
- **Accent (Defensive Network)**: Teal (#1f6c5f)
- **Accent (Offensive Network/Order)**: Burnt orange (#c3642c)
- **Text**: Dark ink (#1b1d1f)
- **Panels**: Warm cream (#fff7ea)

### Typography
- **Headers**: Fraunces (serif, elegant)
- **Body**: Public Sans (sans-serif, clean)

### Components
- Responsive card layouts
- Expandable content sections
- Filter controls
- Timeline visualization
- Character profile cards
- Status badges
- Quote boxes
- Statistics cards

## 📄 Page Details

### index.html (Homepage)
- Hero section with series tagline
- Featured book showcase (The Aethelred Cipher)
- Two Networks comparison
- Featured books (Books 1, 2, 4)
- Author bio
- Newsletter signup
- Contact section

### books.html (Complete Catalog)
- All 12 books displayed
- Status indicators (Complete/In Progress/Outlined)
- Condensed descriptions (150-200 words)
- Expandable full plot summaries (500-800 words)
- Word counts and time periods
- Buy buttons (ready for links)
- Character references

**Books Included:**
1. The Aethelred Cipher (1347 CE) - ✅ Complete
2. The Genesis Protocol (2025 CE) - 🔄 In Progress
3. The First Key (1177 BCE) - 📋 Outlined
4. The Nazarene Protocol (26-70 CE) - ✅ Complete
5. The Augustine Protocol (312-430 CE) - ✅ Complete
6. The Carolingian Cipher (476-800 CE) - 📋 Outlined
7. Crusader Bloodlines (1095-1142 CE) - ✅ Complete
8. Templar Keys (1119-1187 CE) - 📋 Outlined
9. Reconquista Protocols (1236-1492 CE) - 📋 Outlined
10. Reformation Divide (1440-1650 CE) - 🔄 In Progress
11. Scientific Method (1665-1800 CE) - 🔄 In Progress
12. The Modern Network (1900-1990 CE) - 📋 Planning

### series.html (Saga Overview)
- High-level concept explanation
- Two Networks philosophy comparison
- Core themes (8 thematic cards)
- The Seven Keys methodology
- Knowledge encoding evolution
- Collapse pattern structure
- Generation tracking system
- Reading order guide (publication vs chronological)
- Series statistics

### characters.html (Character Database)
- 10+ major character profiles
- Filterable by book or network
- Full biographies (300-500 words each)
- Generation numbers
- Network affiliation badges
- Key quotes
- Defining moments
- Relationships

**Characters Included:**
- Thomas of Eltville (Book 1, Gen 63)
- Margarethe (Book 1)
- Maria of Toledo (Book 1, Gen 64)
- Wilhelm von Eltville (Book 1, Gen 62)
- Sarah Chen (Book 2, Gen 138)
- Dr. Catherine Wells (Book 2)
- Nefertari (Book 3, founder)
- Tausret (Book 3, Gen 1)
- Amenhotep (Book 3, founder)
- Jesus of Nazareth (Book 4, Gen 42)
- Miriam of Magdala (Book 4, Gen 42)
- Marcus Publius Scipio (Book 4)
- Augustine of Hippo (Book 5, Gen 56)
- Jerome (Book 5)
- Monica (Book 5, Gen 55)
- Alienor de Hauteville (Book 7, Gen 99)
- Brother Petros (Book 7)
- Raymond de Toulouse (Book 7)

### timeline.html (Visual Timeline)
- Interactive vertical timeline
- All 12 books positioned chronologically
- Major collapse events marked
- Generation tracking
- Pattern Eye artifact history
- Series statistics overview
- Legend and pattern recognition guide

## ⚙️ Interactive Features (scripts.js)

1. **Expandable Content**: Click "Read More" to reveal full plot summaries
2. **Character Filtering**: Filter by book or network affiliation
3. **Smooth Scrolling**: Internal navigation links
4. **Timeline Animations**: Fade-in reveals on scroll
5. **Hover Effects**: Enhanced book card interactions
6. **Stats Counter**: Animated number counting
7. **Form Validation**: Enhanced email validation
8. **Lazy Loading**: Optimized image loading
9. **Easter Egg**: Konami code reveals generation data
10. **Share Functionality**: Native share or clipboard copy

## 🚀 Deployment

### GitHub Pages (Current Setup)
The site is configured for GitHub Pages with custom domain: **randypellegrini.com**

To deploy:
```bash
# Push changes to GitHub
git add .
git commit -m "Update website content"
git push origin main

# GitHub Pages automatically deploys from main branch
```

### Custom Domain Setup
1. Add `CNAME` file with domain: `randypellegrini.com`
2. Configure DNS at domain registrar:
   - A record → 185.199.108.153
   - A record → 185.199.109.153
   - A record → 185.199.110.153
   - A record → 185.199.111.153
   - CNAME www → username.github.io

### Local Testing
```bash
# Option 1: Python simple server
python3 -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Node.js http-server
npx http-server
# Visit: http://localhost:8080
```

## 📝 Content Updates

### Adding New Books
Edit `books.html`:
```html
<article class="book-card" data-book="book13">
  <div class="book-cover" style="background: linear-gradient(135deg, #color1, #color2);">
    <span>Book 13</span>
  </div>
  <div>
    <div class="book-status">📋 Status | Word count</div>
    <h3>Book 13: Title</h3>
    <p class="book-period">Time Period</p>
    <p>Condensed description (150-200 words)...</p>
    <button class="expand-button" data-target="book13-full">Read Full Plot</button>
    <div id="book13-full" class="expandable-content">
      <p>Full plot summary (500-800 words)...</p>
    </div>
    <div class="button-row">
      <a class="button outline" href="#book13">Details</a>
      <a class="button ghost" href="#">Buy</a>
    </div>
  </div>
</article>
```

### Adding Characters
Edit `characters.html`:
```html
<article class="character-card" data-book="book1" data-network="defensive">
  <div class="character-header">
    <h3 class="character-name">Character Name</h3>
    <p class="character-meta">Generation X • Book Title</p>
    <span class="badge defensive">Defensive</span>
  </div>
  <p>Biography (300-500 words)...</p>
  <div class="quote-box">"Character quote..."</div>
</article>
```

### Updating Timeline
Edit `timeline.html` - add new events:
```html
<div class="timeline-event">
  <div class="timeline-content">
    <p class="timeline-date">YYYY BCE/CE</p>
    <h3>Event Title</h3>
    <p>Event description...</p>
  </div>
  <div class="timeline-marker"></div>
</div>
```

## 🎯 TODO Before Launch

### Content
- [ ] Replace placeholder social media links (Instagram, Goodreads)
- [ ] Add newsletter signup form action URL (Formspree/MailerLite)
- [ ] Upload book cover images to `/assets/` folder
- [ ] Add author photo to `/assets/` folder
- [ ] Update location in hero meta ("Based in City, State")
- [ ] Add Amazon/retailer buy links for completed books

### Technical
- [ ] Test all internal navigation links
- [ ] Test responsive design on mobile devices
- [ ] Optimize book cover images (compress)
- [ ] Add favicon.ico
- [ ] Test form submissions
- [ ] Verify custom domain DNS settings
- [ ] Add Google Analytics (optional)

### SEO
- [ ] Add Open Graph meta tags for social sharing
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Verify meta descriptions on all pages
- [ ] Add schema.org structured data for books

## 🔧 Maintenance

### Regular Updates
- Update book status badges as writing progresses
- Add new character profiles as books complete
- Expand timeline events
- Add new blog posts or updates
- Refresh statistics on series.html

### Performance
- Compress images before uploading
- Monitor page load times
- Test on various browsers
- Check mobile responsiveness

## 📊 Analytics Tracking

Add Google Analytics (optional):
```html
<!-- Add before </head> in each HTML file -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXXXXXX');
</script>
```

## 🐛 Known Issues

- Expandable content max-height might need adjustment for very long plot summaries
- Timeline mobile view could be enhanced further
- Character filter "All" button doesn't have smooth transition

## 📞 Support

For questions about the website:
- Email: randypellegrini@gmail.com
- Issues: Create GitHub issue in repository

## 📜 License

Copyright 2025 Randy Pellegrini. All rights reserved.

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Status**: Production Ready
