// Editorial Portfolio Main JavaScript (Multi-page Architecture)

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeader();
  initMobileDrawer();
  if (document.getElementById("hero-canvas")) initHeroCanvas();
  if (document.getElementById("articles-grid")) initPublications();
  if (document.getElementById("portfolio-contact-form")) initContactForm();
});

// Theme Management (Light / Dark Mode Sync across pages)
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateIcon(saved);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon(next);
    });
  }

  function updateIcon(t) {
    if (icon) icon.className = t === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}

// Hero Canvas Animation (Used on index.html)
function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h;
  let particles = [];

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((w * h) / 18000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1
      });
    }
  }

  window.addEventListener("resize", resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const pColor = isDark ? "rgba(245, 158, 11, 0.4)" : "rgba(180, 83, 9, 0.25)";
    const lColor = isDark ? "rgba(245, 158, 11," : "rgba(180, 83, 9,";

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = pColor;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 100) {
          const alpha = (1 - dist / 100) * (isDark ? 0.15 : 0.1);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lColor + alpha + ")";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// Header Scroll Effect & Mobile Drawer
function initHeader() {
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }, { passive: true });
  }
}

function initMobileDrawer() {
  const openBtn = document.querySelector(".mobile-menu-btn");
  const closeBtn = document.querySelector(".mobile-drawer-close");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const links = document.querySelectorAll(".mobile-nav-links a");

  function open() { 
    if (drawer) drawer.classList.add("active"); 
    if (overlay) overlay.classList.add("active"); 
  }
  function close() { 
    if (drawer) drawer.classList.remove("active"); 
    if (overlay) overlay.classList.remove("active"); 
  }

  if (openBtn) openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (overlay) overlay.addEventListener("click", close);
  links.forEach(l => l.addEventListener("click", close));
}

// Publications Grid Rendering, Filtering & Search (Used on dispatches.html)
function initPublications() {
  const container = document.getElementById("articles-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("article-search");

  if (!container || typeof articlesData === "undefined") return;

  let currentFilter = "all";
  let query = "";
  let displayedCount = 9;
  const PAGE_INCREMENT = 9;

  function render(list) {
    if (!container) return;
    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 50px 20px; color:var(--text-muted);">
          <i class="fas fa-search" style="font-size:2.2rem; margin-bottom:14px; opacity:0.4;"></i>
          <h4 style="font-size:1.1rem; color:var(--text-primary); margin-bottom:6px;">কোনো প্রতিবেদন পাওয়া যায়নি</h4>
          <p>ভিন্ন কোনো বিষয় অনুসন্ধান করুন অথবা "সকল প্রতিবেদন" নির্বাচন করুন।</p>
        </div>
      `;
      updateLoadMore(0, 0);
      return;
    }

    const visibleItems = list.slice(0, displayedCount);

    container.innerHTML = visibleItems.map(item => {
      let formatBadge = '';
      let playOverlay = '';
      if (item.format === 'video') {
        formatBadge = '<span class="card-format-pill video-pill"><i class="fas fa-video"></i> ভিডিও প্যাকেজ</span>';
        playOverlay = '<div class="card-play-overlay"><i class="fas fa-play"></i></div>';
      } else if (item.format === 'print') {
        formatBadge = '<span class="card-format-pill print-pill"><i class="fas fa-print"></i> প্রিন্ট স্পেশাল</span>';
      } else {
        formatBadge = '<span class="card-format-pill online-pill"><i class="fas fa-newspaper"></i> অনলাইন স্পেশাল</span>';
      }

      return `
        <div class="article-card" onclick="openReaderModal('${item.id}')">
          <div class="article-card-img">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            ${playOverlay}
            <div class="card-format-badge-wrap">
              ${formatBadge}
            </div>
          </div>
          <div class="article-card-body">
            <div class="article-card-meta">
              <span class="category-pill">${item.categoryLabel || item.category}</span>
              <span class="meta-sep">•</span>
              <span class="date"><i class="far fa-calendar-alt"></i> ${item.date}</span>
            </div>
            <h3 class="article-card-title">${item.title}</h3>
            ${item.englishTitle ? `<div class="article-card-title-en">${item.englishTitle}</div>` : ''}
            <p class="article-card-summary">${item.summary}</p>
            <div class="article-card-footer">
              <span class="publication-badge"><i class="fas fa-newspaper"></i> ${item.newspaper}</span>
              <span class="read-more-link">
                ${item.format === 'video' ? 'ভিডিও ও প্রিভিউ →' : 'প্রতিবেদন পড়ুন →'}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join("");

    updateLoadMore(visibleItems.length, list.length);
  }

  function updateLoadMore(showing, total) {
    let loadMoreWrap = document.getElementById("load-more-wrap");
    if (!loadMoreWrap) {
      loadMoreWrap = document.createElement("div");
      loadMoreWrap.id = "load-more-wrap";
      loadMoreWrap.className = "load-more-wrap";
      container.parentNode.appendChild(loadMoreWrap);
    }

    if (showing < total) {
      const remaining = total - showing;
      loadMoreWrap.innerHTML = `
        <button id="load-more-btn" class="load-more-btn" onclick="window.loadMoreDispatches()">
          <i class="fas fa-plus-circle"></i> আরো ${remaining}টি প্রতিবেদন দেখুন (Load More)
        </button>
      `;
    } else {
      loadMoreWrap.innerHTML = "";
    }
  }

  window.loadMoreDispatches = function() {
    displayedCount += PAGE_INCREMENT;
    filterAndRender();
  };

  function filterAndRender() {
    let filtered = articlesData;
    if (currentFilter !== "all") {
      const filterLower = currentFilter.toLowerCase();
      filtered = filtered.filter(a => {
        const format = (a.format || "").toLowerCase();
        const newspaper = (a.newspaper || "").toLowerCase();
        const cat = (a.category || "").toLowerCase();
        const catLabel = (a.categoryLabel || "").toLowerCase();
        const type = (a.type || "").toLowerCase();
        const tags = (a.tags || []).map(t => t.toLowerCase()).join(" ");

        if (filterLower === "video") return format === "video";
        if (filterLower === "print") return format === "print" || newspaper.includes("observer") || newspaper.includes("আগামী");
        if (filterLower === "kaler kantho") return newspaper.includes("কালের কণ্ঠ") || newspaper.includes("kaler kantho");
        if (filterLower === "campus") return cat.includes("ক্যাম্পাস") || cat.includes("campus") || catLabel.includes("ক্যাম্পাস") || type === "campus";
        if (filterLower === "climate") return cat.includes("পরিবেশ") || cat.includes("জলবায়ু") || cat.includes("উপকূল") || tags.includes("climate") || tags.includes("সুন্দরবন");
        if (filterLower === "investigative") return format !== "video" && (cat.includes("অনুসন্ধান") || type === "investigative" || catLabel.includes("অপরাধ") || catLabel.includes("প্রশাসন") || catLabel.includes("শৃঙ্খলা") || catLabel.includes("অনিয়ম"));

        return newspaper.includes(filterLower) || 
               format.includes(filterLower) ||
               cat.includes(filterLower) || 
               catLabel.includes(filterLower) || 
               type.includes(filterLower) ||
               tags.includes(filterLower);
      });
    }
    if (query.trim() !== "") {
      const q = query.toLowerCase();
      filtered = filtered.filter(a =>
        (a.title && a.title.toLowerCase().includes(q)) ||
        (a.englishTitle && a.englishTitle.toLowerCase().includes(q)) ||
        (a.summary && a.summary.toLowerCase().includes(q)) ||
        (a.content && a.content.toLowerCase().includes(q)) ||
        (a.newspaper && a.newspaper.toLowerCase().includes(q)) ||
        (a.writer && a.writer.toLowerCase().includes(q))
      );
    }
    render(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      displayedCount = 9;
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value;
      displayedCount = 9;
      filterAndRender();
    });
  }

  window.filterBySource = function(src) {
    filterBtns.forEach(b => {
      if (b.getAttribute("data-filter") === src) b.classList.add("active");
      else b.classList.remove("active");
    });
    currentFilter = src;
    displayedCount = 9;
    filterAndRender();
    const pubs = document.getElementById("publications");
    if (pubs) pubs.scrollIntoView({ behavior: "smooth" });
  };

  render(articlesData);
}

// Modal Reader Functionality (Rich Interactive Preview)
window.openReaderModal = function(id) {
  if (typeof articlesData === "undefined") return;
  const item = articlesData.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById("reader-modal");
  const content = document.getElementById("reader-modal-content");
  if (!modal || !content) return;

  let headerExtra = "";
  if (item.format === "video") {
    headerExtra = `
      <div class="modal-video-banner" style="background: linear-gradient(135deg, rgba(217, 119, 6, 0.12), rgba(15, 23, 42, 0.95)); border: 1px solid var(--accent-border); border-radius: var(--radius-md); padding: 18px 20px; margin-bottom: 22px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:44px; height:44px; border-radius:50%; background:var(--accent-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.2rem;">
            <i class="fas fa-play"></i>
          </div>
          <div>
            <strong style="color:#fff; font-size:1rem; display:block;">বিশেষ ভিডিও সম্প্রচার ও প্যাকেজ</strong>
            <span style="color:var(--text-muted); font-size:0.85rem;">সরাসরি ফেসবুকে সম্প্রচারিত ভিডিও প্রতিবেদন</span>
          </div>
        </div>
        <a href="${item.videoUrl || item.source}" target="_blank" class="btn btn-primary btn-sm" style="box-shadow: 0 4px 12px rgba(217,119,6,0.3);">
          <i class="fab fa-facebook"></i> ফেসবুকে সম্পূর্ণ ভিডিও দেখুন <i class="fas fa-external-link-alt" style="font-size:0.75rem; margin-left:4px;"></i>
        </a>
      </div>
    `;
  } else if (item.format === "print") {
    headerExtra = `
      <div class="modal-print-banner" style="background: var(--bg-surface); border-left: 4px solid var(--accent-primary); padding: 12px 18px; margin-bottom: 20px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
        <div style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--accent-primary); font-weight:700;">
          <i class="fas fa-print"></i> জাতীয় দৈনিকের প্রিন্ট সংস্করণ
        </div>
        <div style="font-size:0.95rem; font-weight:600; color:var(--text-primary); margin-top:2px;">
          ${item.printDetails || item.newspaper}
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="modal-header-meta">
      <span class="category-pill">${item.categoryLabel || item.category}</span>
      <span style="color:var(--text-muted);">•</span>
      <span style="color:var(--text-muted); font-size:0.875rem;"><i class="fas fa-newspaper"></i> ${item.newspaper}</span>
      <span style="color:var(--text-muted);">•</span>
      <span style="color:var(--text-muted); font-size:0.875rem;"><i class="far fa-calendar-alt"></i> ${item.date}</span>
    </div>

    <h2 class="modal-title-bn">${item.title}</h2>
    ${item.englishTitle ? `<div class="modal-title-en">${item.englishTitle}</div>` : ""}

    <div class="modal-byline">
      <span>By <strong>${item.writer || 'মো. মিরাজুল ইসলাম'}</strong></span>
      <span>•</span>
      <span>${item.readTime || 'প্রতিবেদন প্রিভিউ'}</span>
    </div>

    ${headerExtra}

    <div style="position:relative; margin-bottom:24px; border-radius:var(--radius-md); overflow:hidden;">
      <img src="${item.image}" alt="${item.title}" class="modal-featured-img" style="margin-bottom:0;">
      ${item.format === 'video' ? `<a href="${item.videoUrl || item.source}" target="_blank" style="position:absolute; inset:0; background:rgba(0,0,0,0.35); display:flex; align-items:center; justify-content:center; text-decoration:none;"><span style="width:68px; height:68px; border-radius:50%; background:var(--accent-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 6px 20px rgba(0,0,0,0.4);"><i class="fas fa-play" style="margin-left:4px;"></i></span></a>` : ''}
    </div>

    <div class="modal-body-text" style="font-size: 1.05rem; line-height: 1.85; color: var(--text-primary); margin: 24px 0;">
      ${item.content ? item.content.split('\n\n').map(p => `<p style="margin-bottom: 1.15em;">${p}</p>`).join('') : `<p>${item.summary}</p>`}
    </div>

    <div class="modal-action-bar">
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        ${item.format === 'video' ? `
          <a href="${item.videoUrl}" target="_blank" class="btn btn-primary btn-sm">
            <i class="fab fa-facebook"></i> ফেসবুকে ভিডিও দেখুন <i class="fas fa-external-link-alt"></i>
          </a>
        ` : `
          <a href="${item.source || 'https://www.kalerkantho.com'}" target="_blank" class="btn btn-primary btn-sm">
            <i class="fas fa-external-link-alt"></i> মূল প্রতিবেদন (Original Publication)
          </a>
        `}
        <a href="${item.archive || 'https://kuja-web.live/Profile/miraz.html'}" target="_blank" class="btn btn-outline btn-sm">
          <i class="fas fa-archive"></i> প্রেস আর্কাইভ (KUJA Profile)
        </a>
      </div>
      <button class="btn btn-outline btn-sm" onclick="closeReaderModal()">
        বন্ধ করুন (Close Story)
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeReaderModal = function() {
  const modal = document.getElementById("reader-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// CV Access Restricted Modal Functionality
window.handleCvClick = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const cvModal = document.getElementById("cv-modal");
  if (cvModal) {
    cvModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeCvModal = function() {
  const cvModal = document.getElementById("cv-modal");
  if (cvModal) {
    cvModal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeReaderModal();
    closeCvModal();
  }
});

const modalEl = document.getElementById("reader-modal");
if (modalEl) {
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeReaderModal();
  });
}

const cvModalEl = document.getElementById("cv-modal");
if (cvModalEl) {
  cvModalEl.addEventListener("click", (e) => {
    if (e.target === cvModalEl) closeCvModal();
  });
}

// Contact Form AJAX Handler (Used on contact.html)
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitBtn = document.getElementById("contact-submit-btn");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const origText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Transmitting...`;
    submitBtn.disabled = true;

    try {
      const res = await fetch("https://formspree.io/f/xjgpaopd", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        feedback.className = "form-feedback success";
        feedback.innerHTML = `<strong>Message Transmitted.</strong> Thank you! Your inquiry has been sent to Md. Mirazul Islam.`;
        form.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      feedback.className = "form-feedback";
      feedback.style.display = "block";
      feedback.style.background = "rgba(239, 68, 68, 0.12)";
      feedback.style.color = "#dc2626";
      feedback.innerHTML = `Direct email fallback: <a href="mailto:mirazulislamku@gmail.com">mirazulislamku@gmail.com</a>`;
    } finally {
      submitBtn.innerHTML = origText;
      submitBtn.disabled = false;
    }
  });
}