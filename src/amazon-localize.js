// Auto-localize Amazon links based on the reader's browser locale.
// Rewrites any anchor with href containing amazon.com to the reader's
// regional storefront (e.g. amazon.co.uk for en-GB, amazon.de for de-*).
// Runs at DOMContentLoaded and again whenever new anchors are injected.
(function() {
  var LOCALE_TO_TLD = {
    'en-US': 'com',  'es-US': 'com',  'en': 'com',
    'en-GB': 'co.uk','en-IE': 'co.uk',
    'en-CA': 'ca',   'fr-CA': 'ca',
    'en-AU': 'com.au',
    'en-IN': 'in',   'hi-IN': 'in',   'hi': 'in',
    'de': 'de',      'de-DE': 'de',   'de-AT': 'de',   'de-CH': 'de',
    'fr': 'fr',      'fr-FR': 'fr',   'fr-BE': 'fr',   'fr-CH': 'fr',
    'it': 'it',      'it-IT': 'it',   'it-CH': 'it',
    'es': 'es',      'es-ES': 'es',
    'es-MX': 'com.mx',
    'pt-BR': 'com.br','pt': 'com.br',
    'ja': 'co.jp',   'ja-JP': 'co.jp',
    'nl': 'nl',      'nl-NL': 'nl',   'nl-BE': 'nl',
    'pl': 'pl',      'pl-PL': 'pl',
    'sv': 'se',      'sv-SE': 'se',
    'tr': 'com.tr',  'tr-TR': 'com.tr'
  };

  function pickTld() {
    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'en-US'];
    for (var i = 0; i < langs.length; i++) {
      var full = langs[i];
      if (LOCALE_TO_TLD[full]) return LOCALE_TO_TLD[full];
      var base = full.split('-')[0];
      if (LOCALE_TO_TLD[base]) return LOCALE_TO_TLD[base];
    }
    return 'com';
  }

  var TLD = pickTld();
  if (TLD === 'com') return; // default storefront — nothing to do

  function rewrite(anchor) {
    if (!anchor.href || anchor.dataset.localized) return;
    var m = anchor.href.match(/^(https?:\/\/)(?:www\.)?amazon\.com(\/.*)?$/);
    if (!m) return;
    anchor.href = m[1] + 'www.amazon.' + TLD + (m[2] || '/');
    anchor.dataset.localized = TLD;
  }

  function rewriteAll(root) {
    var anchors = (root || document).querySelectorAll('a[href*="amazon.com"]');
    for (var i = 0; i < anchors.length; i++) rewrite(anchors[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { rewriteAll(); });
  } else {
    rewriteAll();
  }
})();
