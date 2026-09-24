/**
 * जनगणना (Janganana) - Global Application Logic
 * GIGW Accessibility Toolbar, Multilingual Engine, Population Counter, Ticker, Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  initLanguage();
  initLivePopulationCounter();
  initVisitorCounter();
  initTicker();
  initMobileMenu();
  initFaqAccordions();
  initBookmarks();
  registerServiceWorker();
});

/* ==========================================================================
   1. GIGW Accessibility Engine (Font Size Scaling & Contrast Switcher)
   ========================================================================== */
function initAccessibility() {
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  // Font Size Resizer
  const fontBtns = document.querySelectorAll('.font-btn');
  const savedFontSize = localStorage.getItem('janganana_font_size') || 'font-md';
  htmlEl.classList.add(savedFontSize);
  
  fontBtns.forEach(btn => {
    if (btn.dataset.size === savedFontSize) btn.classList.add('active');
    btn.addEventListener('click', () => {
      fontBtns.forEach(b => b.classList.remove('active'));
      htmlEl.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
      const sizeClass = btn.dataset.size;
      htmlEl.classList.add(sizeClass);
      btn.classList.add('active');
      localStorage.setItem('janganana_font_size', sizeClass);
    });
  });

  // Contrast Mode Switcher
  const contrastBtn = document.getElementById('contrastToggleBtn');
  const savedTheme = localStorage.getItem('janganana_theme') || 'theme-standard';
  if (savedTheme !== 'theme-standard') {
    bodyEl.classList.add(savedTheme);
  }

  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      if (bodyEl.classList.contains('theme-high-contrast')) {
        bodyEl.classList.remove('theme-high-contrast');
        bodyEl.classList.add('theme-sepia');
        localStorage.setItem('janganana_theme', 'theme-sepia');
        updateContrastBtnText('Sepia');
      } else if (bodyEl.classList.contains('theme-sepia')) {
        bodyEl.classList.remove('theme-sepia');
        localStorage.setItem('janganana_theme', 'theme-standard');
        updateContrastBtnText('Standard');
      } else {
        bodyEl.classList.add('theme-high-contrast');
        localStorage.setItem('janganana_theme', 'theme-high-contrast');
        updateContrastBtnText('High Contrast');
      }
    });
  }

  function updateContrastBtnText(mode) {
    if (!contrastBtn) return;
    const isHindi = document.body.classList.contains('lang-hi');
    contrastBtn.innerHTML = `🎨 <span class="contrast-label">${isHindi ? 'थीम: ' + mode : 'Theme: ' + mode}</span>`;
  }
}

/* ==========================================================================
   2. Multilingual Engine (Hindi & English State)
   ========================================================================== */
function initLanguage() {
  const currentLang = localStorage.getItem('janganana_lang') || 'hi'; // Default Hindi / Indian context
  setLanguage(currentLang);

  const langToggles = document.querySelectorAll('.lang-toggle-btn, #siteLangToggle');
  langToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeLang = document.body.classList.contains('lang-hi') ? 'hi' : 'en';
      const newLang = activeLang === 'hi' ? 'en' : 'hi';
      setLanguage(newLang);
    });
  });
}

function setLanguage(lang) {
  const body = document.body;
  const isHindi = lang === 'hi';
  
  if (isHindi) {
    body.classList.add('lang-hi');
    body.classList.remove('lang-en');
    document.documentElement.lang = 'hi';
  } else {
    body.classList.add('lang-en');
    body.classList.remove('lang-hi');
    document.documentElement.lang = 'en';
  }

  localStorage.setItem('janganana_lang', lang);

  // Update dynamic translatable elements with data-en & data-hi attributes
  document.querySelectorAll('[data-en][data-hi]').forEach(el => {
    const val = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
    // If element contains HTML tags, use innerHTML, else textContent
    if (val && (val.includes('<') && val.includes('>'))) {
      el.innerHTML = val;
    } else if (val !== null) {
      el.textContent = val;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-placeholder-en][data-placeholder-hi]').forEach(el => {
    el.placeholder = isHindi ? el.getAttribute('data-placeholder-hi') : el.getAttribute('data-placeholder-en');
  });

  // Update Language toggle button label
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.innerHTML = isHindi ? '🌐 English' : '🌐 हिन्दी';
  });

  // Dispatch global language change event for other components
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/* ==========================================================================
   3. Real-Time Population Estimator Ticker (India Live Population)
   ========================================================================== */
function initLivePopulationCounter() {
  const popDisplay = document.getElementById('livePopulationDisplay');
  if (!popDisplay || typeof JANGANANA_DATA === 'undefined') return;

  const baseStats = JANGANANA_DATA.populationStats;
  const baseTime = new Date('2026-01-01T00:00:00Z').getTime();

  function updateCounter() {
    const now = Date.now();
    const elapsedSeconds = (now - baseTime) / 1000;
    const currentEstimate = Math.floor(baseStats.baseCount + (elapsedSeconds * baseStats.growthPerSecond));
    
    // Format Indian Number System with commas (e.g. 1,44,17,19,852)
    popDisplay.textContent = formatIndianNumber(currentEstimate);
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

function formatIndianNumber(x) {
  let s = x.toString();
  let afterLastThree = s.substring(0, s.length - 3);
  let lastThree = s.substring(s.length - 3);
  if (afterLastThree !== '') {
    lastThree = ',' + lastThree;
  }
  return afterLastThree.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

/* ==========================================================================
   4. Announcement Ticker
   ========================================================================== */
function initTicker() {
  const tickerContainer = document.getElementById('liveTickerContainer');
  if (!tickerContainer || typeof JANGANANA_DATA === 'undefined') return;

  let currentIndex = 0;
  const items = JANGANANA_DATA.tickerItems;

  function renderTickerItem() {
    const isHindi = document.body.classList.contains('lang-hi');
    const item = items[currentIndex];
    const title = isHindi ? item.title_hi : item.title_en;
    
    tickerContainer.innerHTML = `
      <a href="${item.link}" class="ticker-link" title="${title}">
        ${item.isBreaking ? '<span class="ticker-badge">NEW</span> ' : ''}${title}
      </a>
    `;

    currentIndex = (currentIndex + 1) % items.length;
  }

  renderTickerItem();
  setInterval(renderTickerItem, 6000);

  window.addEventListener('languageChanged', renderTickerItem);
}

/* ==========================================================================
   5. Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuToggleBtn');
  const navList = document.querySelector('.nav-links');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = navList.classList.toggle('mobile-open');
      menuBtn.setAttribute('aria-expanded', isExpanded);
      if (isExpanded) {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'absolute';
        navList.style.top = '100%';
        navList.style.left = '0';
        navList.style.right = '0';
        navList.style.background = '#ffffff';
        navList.style.padding = '1.5rem';
        navList.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
        navList.style.zIndex = '999';
      } else {
        navList.removeAttribute('style');
      }
    });
  }
}

/* ==========================================================================
   6. FAQ Interactive Accordions
   ========================================================================== */
function initFaqAccordions() {
  const faqContainer = document.getElementById('homepageFaqContainer');
  if (faqContainer && typeof JANGANANA_DATA !== 'undefined') {
    renderFaqList(faqContainer, JANGANANA_DATA.faqs.slice(0, 4));
    window.addEventListener('languageChanged', () => {
      renderFaqList(faqContainer, JANGANANA_DATA.faqs.slice(0, 4));
    });
  }
}

function renderFaqList(container, faqs) {
  const isHindi = document.body.classList.contains('lang-hi');
  container.innerHTML = faqs.map(faq => `
    <div class="faq-item" id="${faq.id}">
      <button class="faq-question" type="button" aria-expanded="false">
        <span>${isHindi ? faq.question_hi : faq.question_en}</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">
          <p>${isHindi ? faq.answer_hi : faq.answer_en}</p>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      const answer = item.querySelector('.faq-answer');

      // Close other FAQs
      container.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-answer').style.maxHeight = null;
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   7. Local Bookmarking System
   ========================================================================== */
function initBookmarks() {
  document.addEventListener('click', (e) => {
    const bookmarkBtn = e.target.closest('.btn-bookmark');
    if (!bookmarkBtn) return;
    const articleId = bookmarkBtn.dataset.articleId;
    if (!articleId) return;

    let saved = JSON.parse(localStorage.getItem('janganana_bookmarks') || '[]');
    if (saved.includes(articleId)) {
      saved = saved.filter(id => id !== articleId);
      bookmarkBtn.classList.remove('bookmarked');
      showToast(document.body.classList.contains('lang-hi') ? 'बुकमार्क हटाया गया' : 'Bookmark removed');
    } else {
      saved.push(articleId);
      bookmarkBtn.classList.add('bookmarked');
      showToast(document.body.classList.contains('lang-hi') ? 'लेख बुकमार्क किया गया' : 'Article bookmarked');
    }
    localStorage.setItem('janganana_bookmarks', JSON.stringify(saved));
  });
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'janganana-toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #0f172a;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.875rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    z-index: 99999;
    animation: fadeIn 0.2s ease-out;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2500);
}

/* ==========================================================================
   8. PWA Service Worker Registration
   ========================================================================== */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {
        // SW registration silently handled in offline/local environments
      });
    });
  }
}

/* ==========================================================================
   9. Live Visitor Counter Engine
   ========================================================================== */
function initVisitorCounter() {
  const counterEl = document.getElementById('visitorCounter');
  if (!counterEl) return;
  const baseCount = 128450;
  let visits = parseInt(localStorage.getItem('janganana_visit_count') || '0', 10);
  visits += 1;
  localStorage.setItem('janganana_visit_count', visits.toString());
  const total = baseCount + visits;
  counterEl.textContent = total.toLocaleString('en-IN');
}

