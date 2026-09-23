/**
 * जनगणना (Janganana) - Article Page Dynamic Renderer
 * Dynamic TOC, TTS Audio Reader, Reading Progress, Schema.org JSON-LD Injector, Social Share
 */

let speechUtterance = null;
let isSpeaking = false;

document.addEventListener('DOMContentLoaded', () => {
  renderArticlePage();
  initReadingProgressBar();
  initTTSReader();
  initSocialShare();
});

function renderArticlePage() {
  if (typeof JANGANANA_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id') || 'digital-census-self-enumeration-guide';

  const article = JANGANANA_DATA.articles.find(a => a.id === articleId) || JANGANANA_DATA.articles[0];
  const isHindi = document.body.classList.contains('lang-hi');

  // Update Page Title and Meta for SEO
  const title = isHindi ? article.title_hi : article.title_en;
  const excerpt = isHindi ? article.excerpt_hi : article.excerpt_en;
  const category = isHindi ? article.categoryName_hi : article.categoryName_en;
  const readTime = isHindi ? article.readTime_hi : article.readTime_en;
  const content = isHindi ? article.content_hi : article.content_en;

  document.title = `${title} | जनगणना (Janganana)`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', excerpt);

  // Update Breadcrumb & Header
  const bcCategory = document.getElementById('bcCategory');
  const bcTitle = document.getElementById('bcTitle');
  if (bcCategory) bcCategory.textContent = category;
  if (bcTitle) bcTitle.textContent = title;

  const catTag = document.getElementById('articleCategoryTag');
  if (catTag) {
    catTag.textContent = category;
    catTag.className = `article-category-tag badge-${article.category}`;
  }

  const headlineEl = document.getElementById('articleHeadline');
  if (headlineEl) headlineEl.textContent = title;

  const publishDateEl = document.getElementById('articlePublishDate');
  if (publishDateEl) publishDateEl.textContent = formatDate(article.publishDate);

  const readTimeEl = document.getElementById('articleReadTime');
  if (readTimeEl) readTimeEl.textContent = readTime;

  const authorEl = document.getElementById('articleAuthorName');
  if (authorEl) authorEl.textContent = article.author;

  const proseContainer = document.getElementById('articleProseContainer');
  if (proseContainer) {
    proseContainer.innerHTML = content;
    buildTableOfContents(proseContainer);
  }

  // Render Related Articles in Sidebar
  renderRelatedArticles(article.id);

  // Inject Google JSON-LD Schema Markup
  injectStructuredData(article);

  // Re-render on language toggle
  window.addEventListener('languageChanged', () => {
    renderArticlePage();
  }, { once: true });
}

/* ==========================================================================
   Build Dynamic Sticky Table of Contents (TOC) with ScrollSpy
   ========================================================================== */
function buildTableOfContents(proseContainer) {
  const tocList = document.getElementById('articleTocList');
  if (!tocList) return;

  const headings = proseContainer.querySelectorAll('h2, h3');
  if (headings.length === 0) {
    const tocWidget = document.getElementById('tocWidget');
    if (tocWidget) tocWidget.style.display = 'none';
    return;
  }

  tocList.innerHTML = '';
  headings.forEach((h, index) => {
    if (!h.id) {
      h.id = `heading-${index + 1}`;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.className = `toc-link ${h.tagName.toLowerCase() === 'h3' ? 'toc-h3' : ''}`;
    a.textContent = h.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // ScrollSpy for TOC Active State
  window.addEventListener('scroll', () => {
    let currentId = '';
    headings.forEach(h => {
      const top = h.getBoundingClientRect().top;
      if (top <= 140) {
        currentId = h.id;
      }
    });

    tocList.querySelectorAll('.toc-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  });
}

/* ==========================================================================
   Text-to-Speech (TTS) Voice Reader (Web Speech API)
   ========================================================================== */
function initTTSReader() {
  const ttsBtn = document.getElementById('toggleTtsBtn');
  if (!ttsBtn || !('speechSynthesis' in window)) {
    const box = document.getElementById('ttsReaderBox');
    if (box) box.style.display = 'none';
    return;
  }

  ttsBtn.addEventListener('click', () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      ttsBtn.classList.remove('playing');
      ttsBtn.innerHTML = '🔊 <span>' + (document.body.classList.contains('lang-hi') ? 'लेख सुनें' : 'Listen Article') + '</span>';
    } else {
      const proseContainer = document.getElementById('articleProseContainer');
      const headline = document.getElementById('articleHeadline');
      if (!proseContainer) return;

      const textToRead = `${headline ? headline.textContent : ''}. ${proseContainer.innerText}`;
      speechUtterance = new SpeechSynthesisUtterance(textToRead);
      const isHindi = document.body.classList.contains('lang-hi');
      speechUtterance.lang = isHindi ? 'hi-IN' : 'en-IN';
      speechUtterance.rate = 0.95;

      speechUtterance.onend = () => {
        isSpeaking = false;
        ttsBtn.classList.remove('playing');
        ttsBtn.innerHTML = '🔊 <span>' + (isHindi ? 'लेख सुनें' : 'Listen Article') + '</span>';
      };

      speechUtterance.onerror = () => {
        isSpeaking = false;
        ttsBtn.classList.remove('playing');
        ttsBtn.innerHTML = '🔊 <span>' + (isHindi ? 'लेख सुनें' : 'Listen Article') + '</span>';
      };

      window.speechSynthesis.speak(speechUtterance);
      isSpeaking = true;
      ttsBtn.classList.add('playing');
      ttsBtn.innerHTML = '⏹ <span>' + (isHindi ? 'रोकें' : 'Pause Audio') + '</span>';
    }
  });
}

/* ==========================================================================
   Reading Progress Bar
   ========================================================================== */
function initReadingProgressBar() {
  const bar = document.getElementById('readingProgressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  });
}

/* ==========================================================================
   Social Sharing and Print
   ========================================================================== */
function initSocialShare() {
  const shareWa = document.getElementById('shareWhatsApp');
  const shareX = document.getElementById('shareTwitter');
  const shareTg = document.getElementById('shareTelegram');
  const shareFb = document.getElementById('shareFacebook');
  const shareCopy = document.getElementById('shareCopyLink');
  const printBtn = document.getElementById('printArticleBtn');

  const curUrl = encodeURIComponent(window.location.href);
  const curTitle = encodeURIComponent(document.title);

  if (shareWa) shareWa.href = `https://api.whatsapp.com/send?text=${curTitle}%20${curUrl}`;
  if (shareX) shareX.href = `https://twitter.com/intent/tweet?text=${curTitle}&url=${curUrl}`;
  if (shareTg) shareTg.href = `https://t.me/share/url?url=${curUrl}&text=${curTitle}`;
  if (shareFb) shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${curUrl}`;

  if (shareCopy) {
    shareCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const isHindi = document.body.classList.contains('lang-hi');
        alert(isHindi ? 'लिंक क्लिपबोर्ड पर कॉपी हो गया!' : 'Article link copied to clipboard!');
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   Related Articles in Sidebar
   ========================================================================== */
function renderRelatedArticles(currentArticleId) {
  const container = document.getElementById('relatedArticlesList');
  if (!container || typeof JANGANANA_DATA === 'undefined') return;

  const isHindi = document.body.classList.contains('lang-hi');
  const related = JANGANANA_DATA.articles.filter(a => a.id !== currentArticleId).slice(0, 3);

  container.innerHTML = related.map(a => `
    <li class="related-post-item">
      <a href="article.html?id=${a.id}">
        <span class="related-post-title">${isHindi ? a.title_hi : a.title_en}</span>
        <span class="related-post-date">${formatDate(a.publishDate)} • ${isHindi ? a.readTime_hi : a.readTime_en}</span>
      </a>
    </li>
  `).join('');
}

/* ==========================================================================
   Inject Google-Compliant Schema.org JSON-LD
   ========================================================================== */
function injectStructuredData(article) {
  // Remove existing schema if any
  const existingScript = document.getElementById('articleJsonLdSchema');
  if (existingScript) existingScript.remove();

  const isHindi = document.body.classList.contains('lang-hi');
  const title = isHindi ? article.title_hi : article.title_en;
  const description = isHindi ? article.excerpt_hi : article.excerpt_en;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": article.category === 'tutorial' ? "HowTo" : "BlogPosting",
    "headline": title,
    "description": description,
    "image": [
      `https://janganana.com/${article.image}`
    ],
    "datePublished": `${article.publishDate}T09:00:00+05:30`,
    "dateModified": `${article.modifiedDate}T12:00:00+05:30`,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://janganana.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "जनगणना (Janganana) - Census of India Assistance Portal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://janganana.com/assets/images/ashoka-emblem.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://janganana.com/article.html?id=${article.id}`
    },
    "wordCount": article.wordCount,
    "inLanguage": isHindi ? "hi-IN" : "en-IN"
  };

  const script = document.createElement('script');
  script.id = 'articleJsonLdSchema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData, null, 2);
  document.head.appendChild(script);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
