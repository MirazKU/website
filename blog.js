// My Blog Data & Functionality for Md. Mirazul Islam

const blogPosts = [];

let currentCategory = "all";
let currentSearch = "";

function renderBlogPosts() {
  const container = document.getElementById("blog-posts-container");
  if (!container) return;

  if (blogPosts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 70px 20px; color: #bbf7d0;">
        <i class="fas fa-feather-alt" style="font-size: 3rem; color: #4ade80; margin-bottom: 20px; display: block; opacity: 0.9;"></i>
        <h3 style="font-size: 1.45rem; color: #ffffff; margin-bottom: 10px; font-weight: 600;">শীঘ্রই নতুন ব্লগ পোস্ট আসছে</h3>
        <p style="font-size: 0.98rem; color: #86efac; max-width: 520px; margin: 0 auto; line-height: 1.6;">
          অনুসন্ধানী সাংবাদিকতা, গবেষণা ও মাঠপর্যায়ের নতুন লেখাগুলো এখানে প্রকাশিত হবে।
        </p>
      </div>
    `;
    return;
  }

  const filtered = blogPosts.filter(post => {
    const matchCat = currentCategory === "all" || post.category === currentCategory;
    const searchLower = currentSearch.toLowerCase().trim();
    const matchSearch = !searchLower || 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(searchLower)));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: #bbf7d0;">
        <i class="fas fa-search" style="font-size: 2.5rem; color: #4ade80; margin-bottom: 15px; display: block;"></i>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">কোনো প্রবন্ধ বা ব্লগ পোস্ট পাওয়া যায়নি</h3>
        <p style="font-size: 0.95rem; color: #86efac;">অন্য কোনো কি-ওয়ার্ড দিয়ে খুঁজুন অথবা ক্যাটাগরি ফিল্টার পরিবর্তন করুন।</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="blog-card" onclick="openBlogModal(${post.id})">
      <div class="blog-card-body">
        <div class="blog-meta">
          <span class="blog-category-tag">${post.categoryName || ''}</span>
          <span><i class="far fa-clock"></i> ${post.readTime || ''}</span>
        </div>
        
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        
        <div class="blog-tags">
          ${(post.tags || []).map(t => `<span class="blog-tag">#${t}</span>`).join("")}
        </div>
        
        <div class="blog-card-footer">
          <div class="blog-author-info">
            <img src="images/profile.jpg" alt="Md. Mirazul Islam" class="blog-author-img">
            <span>মিরাজুল ইসলাম • ${post.date || ''}</span>
          </div>
          <button type="button" class="blog-read-btn">
            <span>পড়ুন</span> <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

window.filterBlogCategory = function(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderBlogPosts();
};

window.handleBlogSearch = function(val) {
  currentSearch = val;
  renderBlogPosts();
};

window.openBlogModal = function(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById("blogReadingModal");
  const titleEl = document.getElementById("blogModalTitle");
  const metaEl = document.getElementById("blogModalMeta");
  const bodyEl = document.getElementById("blogModalBody");

  if (titleEl) titleEl.innerText = post.title;
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="blog-category-tag" style="margin-right:10px;">${post.categoryName || ''}</span>
      <span><i class="far fa-calendar-alt"></i> ${post.date || ''}</span> • 
      <span><i class="far fa-clock"></i> ${post.readTime || ''}</span> • 
      <span><i class="fas fa-user-edit"></i> মোঃ মিরাজুল ইসলাম</span>
    `;
  }
  if (bodyEl) bodyEl.innerHTML = post.content || '';

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeBlogModal = function() {
  const modal = document.getElementById("blogReadingModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

window.handleBlogBackdrop = function(e) {
  if (e.target.id === "blogReadingModal") {
    closeBlogModal();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderBlogPosts();
});
