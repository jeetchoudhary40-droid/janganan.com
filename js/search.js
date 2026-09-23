/**
 * जनगणना (Janganana) - Instant Fuzzy Search & Modal System
 */

document.addEventListener('DOMContentLoaded', () => {
  initSearchSystem();
});

function initSearchSystem() {
  const searchTriggers = document.querySelectorAll('#headerSearchBtn, #heroSearchBtn, .trigger-search-modal');
  const searchModal = document.getElementById('searchModalBackdrop');
  const searchCloseBtn = document.getElementById('searchModalClose');
  const searchInput = document.getElementById('searchModalInput');
  const searchResults = document.getElementById('searchResultsContainer');

  if (!searchModal || !searchInput || !searchResults) return;

  // Open Modal
  searchTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('open');
      searchInput.value = '';
      searchResults.innerHTML = getInitialQuickLinks();
      setTimeout(() => searchInput.focus(), 100);
    });
  });

  // Close Modal
  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', () => {
      searchModal.classList.remove('open');
    });
  }

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('open')) {
      searchModal.classList.remove('open');
    }
    // Command/Ctrl + K shortcut to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchModal.classList.add('open');
      setTimeout(() => searchInput.focus(), 100);
    }
  });

  // Live Real-Time Search Query Handling
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = getInitialQuickLinks();
      return;
    }

    if (typeof JANGANANA_DATA === 'undefined') return;

    const isHindi = document.body.classList.contains('lang-hi');
    const articles = JANGANANA_DATA.articles;
    const faqs = JANGANANA_DATA.faqs;

    const matchedArticles = articles.filter(art => {
      return (
        art.title_en.toLowerCase().includes(query) ||
        art.title_hi.toLowerCase().includes(query) ||
        art.excerpt_en.toLowerCase().includes(query) ||
        art.excerpt_hi.toLowerCase().includes(query) ||
        art.tags.some(t => t.toLowerCase().includes(query))
      );
    });

    const matchedFaqs = faqs.filter(f => {
      return (
        f.question_en.toLowerCase().includes(query) ||
        f.question_hi.toLowerCase().includes(query) ||
        f.answer_en.toLowerCase().includes(query) ||
        f.answer_hi.toLowerCase().includes(query)
      );
    });

    renderSearchResults(searchResults, matchedArticles, matchedFaqs, query, isHindi);
  });
}

function getInitialQuickLinks() {
  const isHindi = document.body.classList.contains('lang-hi');
  return `
    <div style="padding: 1rem; color: var(--text-muted); font-size: 0.8125rem;">
      <p style="font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">
        ${isHindi ? 'लोकप्रिय खोज विषय (Popular Topics)' : 'Popular Search Topics'}
      </p>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <a href="article.html?id=digital-census-self-enumeration-guide" class="article-category-tag badge-tutorial" style="text-decoration:none;">
          ${isHindi ? 'ऑनलाइन स्व-गणना' : 'Self-Enumeration'}
        </a>
        <a href="article.html?id=house-listing-31-questions-guide" class="article-category-tag badge-guide" style="text-decoration:none;">
          ${isHindi ? '31 प्रश्न सूची' : '31 Questions List'}
        </a>
        <a href="article.html?id=census-helpline-directory" class="article-category-tag badge-update" style="text-decoration:none;">
          ${isHindi ? 'टोल-फ्री हेल्पलाइन' : 'Helpline 1800-180-2026'}
        </a>
        <a href="faqs.html" class="article-category-tag badge-faq" style="text-decoration:none;">
          ${isHindi ? 'सामान्य प्रश्न (FAQs)' : 'FAQs'}
        </a>
      </div>
    </div>
  `;
}

function renderSearchResults(container, articles, faqs, query, isHindi) {
  if (articles.length === 0 && faqs.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">
          ${isHindi ? 'कोई परिणाम नहीं मिला' : 'No results found'}
        </p>
        <p style="font-size: 0.875rem; margin-top: 0.25rem;">
          ${isHindi ? `"${query}" के लिए कोई लेख या प्रश्न उपलब्ध नहीं है।` : `No articles matching "${query}".`}
        </p>
      </div>
    `;
    return;
  }

  let html = '';

  if (articles.length > 0) {
    html += `
      <div style="padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 800; color: var(--color-saffron); text-transform: uppercase;">
        ${isHindi ? 'लेख एवं ट्यूटोरियल' : 'Articles & Guides'} (${articles.length})
      </div>
    `;
    articles.forEach(art => {
      const title = isHindi ? art.title_hi : art.title_en;
      const excerpt = isHindi ? art.excerpt_hi : art.excerpt_en;
      html += `
        <a href="article.html?id=${art.id}" class="search-result-item">
          <h4>${highlightQuery(title, query)}</h4>
          <p>${highlightQuery(excerpt.substring(0, 110) + '...', query)}</p>
        </a>
      `;
    });
  }

  if (faqs.length > 0) {
    html += `
      <div style="padding: 0.5rem 1rem; margin-top: 0.5rem; font-size: 0.75rem; font-weight: 800; color: #7e22ce; text-transform: uppercase;">
        ${isHindi ? 'सामान्य प्रश्न उत्तर' : 'Frequently Asked Questions'} (${faqs.length})
      </div>
    `;
    faqs.forEach(f => {
      const q = isHindi ? f.question_hi : f.question_en;
      const a = isHindi ? f.answer_hi : f.answer_en;
      html += `
        <a href="faqs.html#${f.id}" class="search-result-item">
          <h4>❓ ${highlightQuery(q, query)}</h4>
          <p>${highlightQuery(a.substring(0, 110) + '...', query)}</p>
        </a>
      `;
    });
  }

  container.innerHTML = html;
}

function highlightQuery(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background: #fef08a; padding: 0 2px; border-radius: 2px;">$1</mark>');
}
