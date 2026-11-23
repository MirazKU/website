function toggleMenu(){
  const menu = document.getElementById("menu");
  if(menu){
    menu.classList.toggle("active");
  }
}
window.toggleMenu = toggleMenu;

function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const menuLinks = document.querySelectorAll("#menu a");
  menuLinks.forEach(link => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    
    const isHome = (currentPath === "/" || currentPath.endsWith("/index.html") || currentPath === "" || currentPath.endsWith("/website/") || currentPath.endsWith("/website/index.html")) && (href === "/" || href === "index.html" || href === "/index.html");
    const isResearch = currentPath.includes("research") && href.includes("research");
    const isArticles = (currentPath.includes("articles") || currentPath.includes("dispatches")) && (href.includes("articles") || href.includes("dispatches"));
    const isAbout = currentPath.includes("about") && href.includes("about");
    const isExperience = currentPath.includes("experience") && href.includes("experience");
    const isContact = currentPath.includes("contact") && href.includes("contact");

    if (isHome || isResearch || isArticles || isAbout || isExperience || isContact) {
      if (!link.classList.contains("header-cv-btn")) {
        link.classList.add("active");
      }
    }
  });
}

function injectCvModal() {
  if (document.getElementById("cvDownloadModal")) return;

  const modalHtml = `
  <div class="cv-modal-backdrop" id="cvDownloadModal" onclick="handleCvModalBackdrop(event)">
    <div class="cv-modal-window">
      <div class="cv-modal-header">
        <div class="cv-modal-title">
          <i class="fas fa-shield-alt" style="color:#4ade80;"></i>
          <span>Curriculum Vitae Access</span>
        </div>
        <button type="button" class="cv-modal-close-btn" onclick="closeCvModal()">&times;</button>
      </div>
      
      <p class="cv-modal-desc">
        তথ্য সুরক্ষা ও ব্যক্তিগত গোপনীয়তার স্বার্থে পূর্ণাঙ্গ জীবনবৃত্তান্ত (CV) সরাসরি পাবলিক ডাউনলোড সংরক্ষিত রাখা হয়েছে। প্রাতিষ্ঠানিক, গবেষণা বা পেশাগত প্রয়োজনে জীবনবৃত্তান্ত পেতে অনুগ্রহ করে সরাসরি যোগাযোগ করার অনুরোধ করা হচ্ছে।
      </p>
      
      <div class="cv-modal-cards">
        <!-- Journalism & Media CV Card -->
        <div class="cv-modal-card-item cv-card-journalist" style="cursor:default;">
          <div class="cv-modal-icon"><i class="fas fa-newspaper"></i></div>
          <div class="cv-modal-text">
            <div class="cv-modal-card-title">Investigative Journalism & Editorial Portfolio</div>
            <div class="cv-modal-card-sub">Daily Kaler Kantho, Daily Agamir Somoy, KUJA General Secretary (300+ Reports)</div>
            <div class="cv-modal-badge"><i class="fas fa-check-circle"></i> Official Credential</div>
          </div>
        </div>
        
        <!-- Academic & Research CV Card -->
        <div class="cv-modal-card-item cv-card-forestry" style="cursor:default;">
          <div class="cv-modal-icon"><i class="fas fa-graduation-cap"></i></div>
          <div class="cv-modal-text">
            <div class="cv-modal-card-title">Academic & Historical Research Profile</div>
            <div class="cv-modal-card-sub">M.A. in International History, Sundarbans Coastal Climate Thesis, UNESCO & PIB Certified</div>
            <div class="cv-modal-badge"><i class="fas fa-award"></i> Verified Scholar</div>
          </div>
        </div>
      </div>

      <div style="background: rgba(2, 44, 34, 0.85); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 10px; padding: 14px 18px; margin: 18px 0; font-size: 0.88rem; line-height: 1.6;">
        <div style="margin-bottom: 6px;"><i class="fas fa-envelope" style="color:#4ade80;"></i> <strong>ইমেইল:</strong> <a href="mailto:mirazulislamku@gmail.com" style="color:#86efac; text-decoration:none;">mirazulislamku@gmail.com</a></div>
        <div><i class="fas fa-university" style="color:#4ade80;"></i> <strong>ঠিকানা:</strong> ইতিহাস ও সভ্যতা ডিসিপ্লিন, খুলনা বিশ্ববিদ্যালয়</div>
      </div>

      <div class="cv-modal-footer">
        <a href="contact.html" class="cv-modal-view-online"><i class="fas fa-paper-plane"></i> সিভি চেয়ে সরাসরি বার্তা পাঠান</a>
        <button type="button" class="cv-modal-close-action" onclick="closeCvModal()">Close</button>
      </div>
    </div>
  </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = modalHtml;
  document.body.appendChild(container.firstElementChild);

  document.addEventListener("click", function(e) {
    const target = e.target.closest("a, button");
    if (!target) return;
    const href = (target.getAttribute("href") || "").toLowerCase();
    const isCvQuickCard = target.classList.contains("card") && (target.innerText.includes("CV") || href.includes("cv"));
    const isCvModalClass = target.classList.contains("open-cv-modal") || target.classList.contains("header-cv-btn");
    
    if (isCvQuickCard || isCvModalClass) {
      e.preventDefault();
      openCvModal();
    }
  });
}

window.openCvModal = function() {
  const modal = document.getElementById("cvDownloadModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};
window.closeCvModal = function() {
  const modal = document.getElementById("cvDownloadModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};
window.handleCvModalBackdrop = function(e) {
  if (e.target.id === "cvDownloadModal") {
    closeCvModal();
  }
};

document.addEventListener("DOMContentLoaded", function(){
  injectCvModal();
  highlightActiveNav();

  fetch("data/config.json")
  .then(res => res.json())
  .then(cfg => {
    if(cfg.siteTitle && !document.title) document.title = cfg.siteTitle;
    
    // Auto-update header if placeholder exists
    const dynName = document.getElementById("dyn-name");
    if(dynName && cfg.name) dynName.innerText = cfg.name;
    const dynTitle = document.getElementById("dyn-title");
    if(dynTitle && cfg.title) dynTitle.innerText = cfg.title;
    const dynAbout = document.getElementById("dyn-about");
    if(dynAbout && cfg.about) dynAbout.innerText = cfg.about;

    if(cfg.socials) {
      for(let key in cfg.socials) {
        let el = document.getElementById("soc-" + key);
        if(el && cfg.socials[key]) {
          el.href = cfg.socials[key];
          el.style.display = "inline-flex"; el.style.alignItems = "center"; el.style.justifyContent = "center";
        }
      }
    }
  }).catch(() => {});
});