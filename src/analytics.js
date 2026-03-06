// GA4 Custom Event Tracking for randypellegrini.com
(function() {
  // 1. Amazon click tracking
  // 2. Outbound link tracking (substack, instagram, x/twitter, goodreads, bookbub)
  // 3. Newsletter signup tracking
  // 4. Blog scroll depth tracking

  var outboundMap = {
    'amazon.com': 'amazon',
    'substack.com': 'substack',
    'instagram.com': 'instagram',
    'x.com': 'x_twitter',
    'twitter.com': 'x_twitter',
    'goodreads.com': 'goodreads',
    'bookbub.com': 'bookbub'
  };

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link || !link.href) return;
    var href = link.href;

    // Amazon click
    if (href.indexOf('amazon.com') !== -1) {
      gtag('event', 'amazon_click', {
        link_url: href,
        link_text: (link.textContent || '').trim().substring(0, 100),
        page_location: window.location.href
      });
      return;
    }

    // Other outbound links
    for (var domain in outboundMap) {
      if (href.indexOf(domain) !== -1) {
        gtag('event', 'outbound_click', {
          link_url: href,
          link_text: (link.textContent || '').trim().substring(0, 100),
          outbound_destination: outboundMap[domain],
          page_location: window.location.href
        });
        return;
      }
    }
  });

  // Newsletter signup tracking and submission
  var _nlLastSubmit = 0;
  document.addEventListener('submit', function(e) {
    var form = e.target;
    if (form && form.getAttribute('data-newsletter') === 'true') {
      e.preventDefault();
      var now = Date.now();
      if (now - _nlLastSubmit < 10000) return; // rate limit: 1 submit per 10s
      _nlLastSubmit = now;
      var emailInput = form.querySelector('input[type="email"]');
      var btn = form.querySelector('button[type="submit"]');
      var btnText = btn ? btn.querySelector('span') : null;
      var msgDiv = form.parentElement.querySelector('#form-messages') || form.nextElementSibling;
      if (!emailInput || !emailInput.value) return;
      if (btn) btn.disabled = true;
      if (btnText) btnText.textContent = 'Sending...';
      fetch('https://script.google.com/macros/s/AKfycbxLPrYzyozrQrUU8BO7L_CntyiHxPdmAVQxd41xlpBywLYDscTmUD-ZaRwAwHCdyTjC1w/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ action: 'welcome_subscribe', email: emailInput.value })
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.status === 'ok') {
          if (btnText) btnText.textContent = 'Subscribed!';
          if (msgDiv) { msgDiv.style.display = 'block'; msgDiv.textContent = 'Check your inbox for The Edmund Fragments!'; }
          emailInput.value = '';
          gtag('event', 'newsletter_signup', { page_location: window.location.href });
        } else {
          if (btnText) btnText.textContent = 'Try again';
          if (btn) btn.disabled = false;
        }
      })
      .catch(function() {
        if (btnText) btnText.textContent = 'Try again';
        if (btn) btn.disabled = false;
      });
    }
  });

  // Blog scroll depth tracking (only on blog pages)
  if (window.location.pathname.indexOf('/blog/') === 0 && window.location.pathname !== '/blog/') {
    var scrollMarks = { 25: false, 50: false, 75: false, 100: false };
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          var scrollTop = window.pageYOffset;
          var docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight <= 0) { ticking = false; return; }
          var percent = Math.round((scrollTop / docHeight) * 100);
          [25, 50, 75, 100].forEach(function(mark) {
            if (percent >= mark && !scrollMarks[mark]) {
              scrollMarks[mark] = true;
              gtag('event', 'blog_scroll_depth', {
                page_title: document.title,
                percent_scrolled: mark
              });
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
