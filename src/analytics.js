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

    // Amazon click — identify book by ASIN, capture regional storefront
    var amazonMatch = href.match(/amazon\.([a-z.]{2,})/);
    if (amazonMatch) {
      var bookName = 'unknown';
      if (href.indexOf('B0GJTGCHS2') !== -1 || href.indexOf('B0GMRN61MG') !== -1) {
        bookName = 'The Aethelred Cipher';
      } else if (href.indexOf('B0GPM973N1') !== -1) {
        bookName = 'The Genesis Protocol';
      } else if (href.indexOf('B0GSWLM1WV') !== -1 || href.indexOf('B0GWD1BVM6') !== -1) {
        bookName = 'The First Key';
      }
      gtag('event', 'amazon_click', {
        book_name: bookName,
        link_url: href,
        link_text: (link.textContent || '').trim().substring(0, 100),
        amazon_tld: amazonMatch[1],
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

      var submittedEmail = emailInput.value;
      var showSuccess = function() {
        if (btnText) btnText.textContent = 'Subscribed!';
        if (msgDiv) { msgDiv.style.display = 'block'; msgDiv.setAttribute('role', 'status'); msgDiv.textContent = 'Check your inbox for The Edmund Fragments!'; }
        emailInput.value = '';
        gtag('event', 'newsletter_signup', { form_type: formType, page_location: window.location.href });
        setTimeout(function() {
          if (btn) btn.disabled = false;
          if (btnText) btnText.textContent = originalBtnText;
        }, 4000);
      };
      var queueFallback = function(reason) {
        try {
          var key = 'pending_signups_v1';
          var queue = JSON.parse(localStorage.getItem(key) || '[]');
          queue.push({ email: submittedEmail, formType: formType, ts: Date.now(), reason: reason });
          localStorage.setItem(key, JSON.stringify(queue));
        } catch (e) { /* storage unavailable */ }
      };

      fetch('https://script.google.com/macros/s/AKfycbyFCwozI7oerHXJdLXWLZacJ1A2SFNXMoEXhoB-IC0FOp0kvJIniEeLjZmat3JTv-H2AA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ action: 'welcome_subscribe', email: submittedEmail })
      })
      .then(showSuccess)
      .catch(function(err) {
        queueFallback('network_error');
        gtag('event', 'signup_form_error', { form_type: formType, error: 'network_error', page_location: window.location.href });
        showSuccess();
      });
    }
  });

  // Retry any queued signups from previous failed submissions
  try {
    var pendingKey = 'pending_signups_v1';
    var pending = JSON.parse(localStorage.getItem(pendingKey) || '[]');
    if (pending.length) {
      var remaining = [];
      pending.forEach(function(item) {
        fetch('https://script.google.com/macros/s/AKfycbyFCwozI7oerHXJdLXWLZacJ1A2SFNXMoEXhoB-IC0FOp0kvJIniEeLjZmat3JTv-H2AA/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({ action: 'welcome_subscribe', email: item.email, requeued: true })
        }).catch(function() { remaining.push(item); });
      });
      setTimeout(function() {
        localStorage.setItem(pendingKey, JSON.stringify(remaining));
      }, 3000);
    }
  } catch (e) { /* storage unavailable */ }

  // Contact form handler
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.contact-submit');
      var btnText = contactForm.querySelector('.contact-btn-text');
      var statusDiv = contactForm.querySelector('.contact-form-status');
      var name = document.getElementById('contact-name').value;
      var email = document.getElementById('contact-email').value;
      var message = document.getElementById('contact-message').value;

      if (!name || !email || !message) return;

      btn.disabled = true;
      btnText.textContent = 'Sending...';

      fetch('https://script.google.com/macros/s/AKfycbyFCwozI7oerHXJdLXWLZacJ1A2SFNXMoEXhoB-IC0FOp0kvJIniEeLjZmat3JTv-H2AA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ action: 'contact_message', name: name, email: email, message: message })
      })
      .then(function() {
        btnText.textContent = 'Sent!';
        statusDiv.style.display = 'block';
        statusDiv.textContent = 'Thanks! I\'ll get back to you soon.';
        statusDiv.style.color = '#2e7d32';
        contactForm.reset();
        gtag('event', 'contact_form_submit', { page_location: window.location.href });
        setTimeout(function() {
          btn.disabled = false;
          btnText.textContent = 'Send Message';
        }, 4000);
      })
      .catch(function() {
        btnText.textContent = 'Try again';
        statusDiv.style.display = 'block';
        statusDiv.textContent = 'Network error. Try again or reach out on social media.';
        statusDiv.style.color = '#c62828';
        btn.disabled = false;
      });
    });
  }

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
