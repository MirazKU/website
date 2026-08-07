// 🔥 GLOBAL HEADER FIX (Mobile Menu + Consistent Load)

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
      document.getElementById("header").innerHTML = data;

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
        menuBtn.addEventListener("click", () => {
          menu.classList.toggle("active");
        });
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

    // Research Page
    const resGradTitle = document.getElementById("dyn-res-grad-title");
    if(resGradTitle && cfg.researchPage) {
       resGradTitle.innerText = cfg.researchPage.graduate.title;
       document.getElementById("dyn-res-grad-topic").innerHTML = `<strong>Title:</strong> ${cfg.researchPage.graduate.topic}`;
       
       const gradUl = document.getElementById("dyn-res-grad-ul");
       if(gradUl) {
          gradUl.innerHTML = cfg.researchPage.graduate.bullets.map(b => `<li>${b}</li>`).join("");
       }
       const mapTitle = document.getElementById("dyn-res-map-title");
       if(mapTitle) mapTitle.innerText = cfg.researchPage.title + " Study Area & Map Preview";
       
       const timelineList = document.getElementById("dyn-res-timeline");
       if(timelineList) {
          timelineList.innerHTML = cfg.researchPage.timeline.map(t => `<div>${t}</div>`).join("");
       }

       document.getElementById("dyn-res-under-title").innerText = cfg.researchPage.undergraduate.title;
       document.getElementById("dyn-res-under-topic").innerHTML = `<strong>${cfg.researchPage.undergraduate.topic}</strong>`;
       
       const underUl = document.getElementById("dyn-res-under-ul");
       if(underUl) {
          underUl.innerHTML = cfg.researchPage.undergraduate.bullets.map(b => `<li>${b}</li>`).join("");
       }

       const pubUl = document.getElementById("dyn-res-pub-ul");
       if(pubUl) {
          pubUl.innerHTML = cfg.researchPage.publications.map(p => `<li>${p}</li>`).join("");
       }
    }
  });

  // Load footer
  fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

});
