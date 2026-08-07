// 🔥 GLOBAL HEADER FIX (Mobile Menu + Consistent Load)

function toggleMenu(){
  const menu = document.getElementById("menu");
  if(menu){
    menu.classList.toggle("active");
  }
}

document.addEventListener("DOMContentLoaded", function(){

  // Load config first to populate meta, header & pages
  fetch("data/config.json")
  .then(res => res.json())
  .then(cfg => {
    // Dynamic Meta
    if(cfg.siteTitle) document.title = cfg.siteTitle;
    
    // Load header
    fetch("header.html")
    .then(res => res.text())
    .then(data => {
      const headerEl = document.getElementById("header");
      if(headerEl) headerEl.innerHTML = data;

      // Update header title
      if(cfg.headerTitle) {
        const headerH2 = document.querySelector("header h2");
        if(headerH2) headerH2.innerText = cfg.headerTitle;
      }

      // Update menu links dynamically
      if(cfg.headerMenu) {
        const menu = document.getElementById("menu");
        if(menu) {
          menu.innerHTML = "";
          cfg.headerMenu.forEach(item => {
            const a = document.createElement("a");
            a.href = item.url;
            a.innerText = item.label;
            menu.appendChild(a);
          });
        }
      }

      // AFTER header loads → attach menu event
      const menuBtn = document.querySelector(".menu-btn");
      const menu = document.getElementById("menu");

      if(menuBtn && menu){
        menuBtn.onclick = function(e){
          e.stopPropagation();
          menu.classList.toggle("active");
        };
      }
    });

    // Run page specific configurations if they exist
    // About Page
    const aboutTitle = document.getElementById("dyn-about-title");
    const aboutHeadline = document.getElementById("dyn-about-headline");
    const aboutCard = document.getElementById("dyn-about-card");
    if(aboutTitle && cfg.aboutPage) {
       aboutTitle.innerText = cfg.aboutPage.title;
       if(aboutHeadline) aboutHeadline.innerText = cfg.aboutPage.headline;
       if(aboutCard && cfg.aboutPage.paragraphs) {
          aboutCard.innerHTML = cfg.aboutPage.paragraphs.map(p => `<p>${p}</p>`).join("");
       }
    }
  });

  // Load footer
  fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    const footerEl = document.getElementById("footer");
    if(footerEl) footerEl.innerHTML = data;
  });

});
