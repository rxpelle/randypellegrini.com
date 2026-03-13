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

    // Amazon click — identify book by ASIN
    if (href.indexOf('amazon.com') !== -1) {
      var bookName = 'unknown';
      if (href.indexOf('B0GJTGCHS2') !== -1 || href.indexOf('B0GMRN61MG') !== -1) {
        bookName = 'The Aethelred Cipher';
      } else if (href.indexOf('B0GPM973N1') !== -1) {
        bookName = 'The Genesis Protocol';
      }
      gtag('event', 'amazon_click', {
        book_name: bookName,
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

  // Track email field focus (user intent)
  document.addEventListener('focusin', function(e) {
    var input = e.target;
    if (input && input.type === 'email' && input.closest('[data-newsletter]')) {
      var formType = input.closest('.tools-signup') ? 'tools' : 'newsletter';
      gtag('event', 'signup_form_focus', {
        form_type: formType,
        page_location: window.location.href
      });
    }
  });

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
      var formType = form.closest('.tools-signup') ? 'tools' : 'newsletter';
      var originalBtnText = btnText ? btnText.textContent : '';
      if (btn) btn.disabled = true;
      if (btnText) btnText.textContent = 'Sending...';

      // Track submit attempt
      gtag('event', 'signup_form_submit', {
        form_type: formType,
        page_location: window.location.href
      });

      fetch('https://script.google.com/macros/s/AKfycbwlmi9FeZlAeICXIImBGDU4-zKo1iwdMmVmzzaP68tD-uoTAP0ZmPK38zL-qOkY3VRX1A/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ action: 'welcome_subscribe', email: emailInput.value })
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.status === 'ok') {
          if (btnText) btnText.textContent = 'Subscribed!';
          if (msgDiv) { msgDiv.style.display = 'block'; msgDiv.setAttribute('role', 'status'); msgDiv.textContent = 'Check your inbox for The Edmund Fragments!'; }
          emailInput.value = '';
          gtag('event', 'newsletter_signup', { form_type: formType, page_location: window.location.href });
          setTimeout(function() {
            if (btn) btn.disabled = false;
            if (btnText) btnText.textContent = originalBtnText;
          }, 4000);
        } else {
          gtag('event', 'signup_form_error', { form_type: formType, error: 'server_error', page_location: window.location.href });
          if (btnText) btnText.textContent = 'Try again';
          if (btn) btn.disabled = false;
        }
      })
      .catch(function(err) {
        gtag('event', 'signup_form_error', { form_type: formType, error: 'network_error', page_location: window.location.href });
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
