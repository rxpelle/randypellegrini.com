// The Architecture of Survival - Interactive Features
// Author: Randy Pellegrini

// Expandable Content Toggling
document.addEventListener('DOMContentLoaded', function() {

  // Initialize expand/collapse functionality for book details
  const expandButtons = document.querySelectorAll('.expand-button');

  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);

      if (content) {
        // Toggle expanded class
        content.classList.toggle('expanded');
        this.classList.toggle('expanded');

        // Update button text
        if (content.classList.contains('expanded')) {
          const originalText = this.textContent;
          this.setAttribute('data-original-text', originalText);
          this.textContent = 'Show Less';
        } else {
          const originalText = this.getAttribute('data-original-text');
          this.textContent = originalText || 'Read Full Plot';
        }
      }
    });
  });

  // Character Filtering
  const filterButtons = document.querySelectorAll('.filter-button');
  const characterCards = document.querySelectorAll('.character-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter characters
      characterCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
          // Add fade-in animation
          card.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          const cardFilter = card.getAttribute('data-book') || card.getAttribute('data-network');
          if (cardFilter === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeUp 0.5s ease forwards';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Timeline intersection observer for reveal animations
  const timelineEvents = document.querySelectorAll('.timeline-event');

  if (timelineEvents.length > 0) {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    timelineEvents.forEach(event => {
      event.style.opacity = '0';
      event.style.transform = 'translateY(30px)';
      event.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(event);
    });
  }

  // Book card hover enhancement
  const bookCards = document.querySelectorAll('.book-card');

  bookCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Reading order tabs (if present on series.html)
  const orderTabs = document.querySelectorAll('[data-order-tab]');
  const orderContents = document.querySelectorAll('[data-order-content]');

  orderTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.getAttribute('data-order-tab');

      // Update active tab
      orderTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Show target content
      orderContents.forEach(content => {
        if (content.getAttribute('data-order-content') === target) {
          content.style.display = 'block';
          content.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });

  // Copy generation number functionality
  const genNumbers = document.querySelectorAll('.character-meta');

  genNumbers.forEach(meta => {
    if (meta.textContent.includes('Generation')) {
      meta.style.cursor = 'pointer';
      meta.title = 'Click to copy generation info';

      meta.addEventListener('click', function() {
        const text = this.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
          // Show brief feedback
          const original = this.textContent;
          this.textContent = '✓ Copied!';
          setTimeout(() => {
            this.textContent = original;
          }, 1500);
        });
      });
    }
  });

  // Search functionality (if search box exists)
  const searchInput = document.querySelector('#search-books');

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const bookCards = document.querySelectorAll('.book-card');

      bookCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Lazy loading for book cover images
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-number');

  if (statNumbers.length > 0) {
    const countUp = (element, target) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString();
        }
      }, 30);
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.textContent.replace(/,/g, ''));
          if (!isNaN(target)) {
            countUp(entry.target, target);
          }
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  // Mobile menu toggle (if needed)
  const mobileMenuButton = document.querySelector('#mobile-menu-toggle');
  const nav = document.querySelector('.nav');

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener('click', function() {
      nav.classList.toggle('mobile-open');
      this.setAttribute('aria-expanded',
        this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }

  // Easter egg: Konami code for hidden content
  let konamiCode = [];
  const konamiPattern = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
      // Easter egg: Show hidden generation 0 info
      console.log('🔑 Genesis Protocol Activated');
      console.log('Generation 0: Nefertari (1177 BCE)');
      console.log('First Carrier: Tausret, the Living Key');
      console.log('Current Generation: 138 (Sarah Chen, 2025 CE)');
      console.log('Years Elapsed: 3,202');
      console.log('Estimated Generations Remaining: Unknown');

      // Show subtle visual feedback
      document.body.style.animation = 'pulse 0.5s ease';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 500);
    }
  });

  // Form validation enhancement
  const signupForm = document.querySelector('.signup');

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        e.preventDefault();
        emailInput.style.borderColor = 'var(--accent)';
        emailInput.focus();

        // Reset border after 2 seconds
        setTimeout(() => {
          emailInput.style.borderColor = '';
        }, 2000);
      }
    });
  }

  // Print functionality
  window.printPage = function() {
    window.print();
  };

  // Share functionality
  window.sharePage = function() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Check out The Architecture of Survival - a 12-book epic spanning 3,200 years',
        url: window.location.href
      }).catch(err => console.log('Share cancelled'));
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL copied to clipboard!');
      });
    }
  };

  console.log('🔮 The Architecture of Survival - Website initialized');
  console.log('📚 12 books | 3,200 years | 138 generations');
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
`;
document.head.appendChild(style);
