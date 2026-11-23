// My Blog Data & Functionality for Md. Mirazul Islam

const blogPosts = [
  {
    id: 1,
    title: "শতবর্ষের রাসমেলায় সম্প্রীতির উৎসব, সংকটে সুন্দরবন",
    category: "climate",
    categoryName: "পরিবেশ ও সুন্দরবন",
    date: "নভেম্বর ২০২৪",
    readTime: "৭ মিনিট",
    tags: ["সুন্দরবন", "রাসমেলা", "উপকূলীয় সংকট", "জীববৈচিত্র্য"],
    excerpt: "নভেম্বরের মাঝামাঝি পূর্ণিমার চাঁদ উঠলে সুন্দরবনের নদী-খাল রূপালী আলোয় ভরে যায়। আলোয় ভাসতে ভাসতে দূর-দূরান্ত থেকে শত শত নৌকার সারি এসে ভেড়ে দুবলার চরে। তবে সম্প্রীতির এই মহোৎসবের আড়ালে সুন্দরবনের পরিবেশ ও বাস্তুসংস্থান আজ চরম সংকটে...",
    content: `
      <p>নভেম্বরের মাঝামাঝি পূর্ণিমার চাঁদ উঠলে সুন্দরবনের নদী-খাল রূপালী আলোয় ভরে যায়। আলোয় ভাসতে ভাসতে দূর-দূরান্ত থেকে নৌকার সারি এসে ভেড়ে দুবলার চরে। নৌকায় থাকেন হিন্দু-মুসলিম নির্বিশেষে হাজার হাজার মানুষ। কারও মনে পুণ্যের আশা, কারও মনে মানত, কারও বা শুধুই উৎসবের টান।</p>
      
      <p>প্রায় শতবর্ষ ধরে চলে আসা রাসমেলা সুন্দরবনের এক অনন্য মানবিক ঐতিহ্য। যেখানে গহীন অরণ্যের মোহনায় প্রকৃতি ও মানবাত্মা একাকার হয়ে যায়। বাওয়ালী, মৌয়াল, মৎস্যজীবী থেকে শুরু করে দর্শনার্থীদের মিলনমেলায় পরিণত হয় এই দ্বীপচর।</p>
      
      <p>কিন্তু এই উৎসবের অন্য একটি অন্ধকার পিঠ রয়েছে যা নিয়ে কথা বলা এখন সময়ের দাবি। প্রতি বছর রাসমেলাকে কেন্দ্র করে লাখো মানুষের সমাগম, যান্ত্রিক ট্রলারের বিকট শব্দ, প্লাস্টিক বর্জ্যের দূষণ এবং হরিণ শিকারীদের অপতৎপরতা সুন্দরবনের সংকটাপন্ন জীববৈচিত্র্যকে ধ্বংসের মুখে ঠেলে দিচ্ছে।</p>
      
      <p>জলবায়ু পরিবর্তনের অভিঘাতে সুন্দরবন এমনিতেই লবণাক্ততা বৃদ্ধি ও ঘূর্ণিঝড়ের আঘাতে ক্ষতবিক্ষত। তার ওপর অনিয়ন্ত্রিত পর্যটন ও বর্জ্য ব্যবস্থাপনা সংকটে ফেলে দিচ্ছে বিশ্ব ঐতিহ্য এই ম্যানগ্রোভ বনকে। ঐতিহ্য টিকে থাকুক, তবে তা যেন সুন্দরবনের নিঃশব্দ কান্নার কারণ না হয়—এটাই হোক আমাদের অঙ্গীকার।</p>
    `
  },
  {
    id: 2,
    title: "How Khulna's Bihari Families Are Moving Away from Urdu",
    category: "research",
    categoryName: "ভাষাতত্ত্ব ও গবেষণা",
    date: "নভেম্বর ২০২৪",
    readTime: "৮ মিনিট",
    tags: ["Sociolinguistics", "Bihari Community", "Language Shift", "Oral History"],
    excerpt: "In the narrow back streets of Urdu-speaking neighbourhoods in Khulna, three generations converse in three different linguistic patterns. While grandmothers speak Urdu, teenagers answer in standard Bangla. An exploration of linguistic assimilation and identity...",
    content: `
      <p>In the narrow back streets of Urdu-speaking neighbourhoods in Khulna, three changes of chat are possible in a single conversation before it cools. An elderly grandmother will speak in fluent Urdu; a teenager will answer back in colloquial Bangla; and a younger cousin will complete the chat in a dynamic bilingual mix, with English words thrown in.</p>
      
      <p>It is chaotic for outsiders, but a vivid snapshot of a community in mid-transition for sociolinguists. The language shift among the Bihari population in Khalishpur and greater Khulna reveals that language is as much about economic survival and belonging as it is about cultural heritage.</p>
      
      <p>Our anthropological and linguistic survey in Khalishpur camps indicates that over 85% of Gen-Z Bihari youths prefer Bangla for formal education, professional commerce, and social media communication. Urdu remains largely confined to domestic elder communication and religious rituals.</p>
      
      <p>This linguistic transition symbolizes a broader civic integration—moving away from the historical stigma of strandedness toward an active, participatory identity within contemporary Bangladesh.</p>
    `
  },
  {
    id: 3,
    title: "মফস্বল সাংবাদিকতায় অনুসন্ধান ও তথ্য সুরক্ষার নিত্য সংকট",
    category: "journalism",
    categoryName: "অনুসন্ধানী সাংবাদিকতা",
    date: "অক্টোবর ২০২৪",
    readTime: "৬ মিনিট",
    tags: ["অনুসন্ধানী সাংবাদিকতা", "প্রেস ফ্রিডম", "ডিজিটাল নিরাপত্তা", "তথ্য অধিকার"],
    excerpt: "রাজধানীর বাইরে মফস্বল ও আঞ্চলিক পর্যায়ে অনুসন্ধানী সাংবাদিকতা করা এক বিপজ্জনক লড়াই। ক্ষমতাধরদের চোখ রাঙানি, ডিজিটাল নজরদারি এবং সুরক্ষার অভাবের মধ্যেও কীভাবে সত্য উন্মোচন করছেন তরুণ সাংবাদিকরা...",
    content: `
      <p>বাংলাদেশি গণমাধ্যমের বড় একটি অংশ রাজধানী কেন্দ্রিক হলেও প্রকৃত মাঠের সত্য লুকিয়ে থাকে দেশের প্রত্যন্ত জনপদে। মফস্বল ও বিশ্ববিদ্যালয় ক্যাম্পাসগুলোতে অনুসন্ধানী সাংবাদিকতা করতে গিয়ে সাংবাদিকদের প্রতিনিয়ত নানামুখী চাপ, হুমকি ও মামলা-হামলার মুখোমুখি হতে হয়।</p>
      
      <p>তৃণমূল পর্যায়ে সবচেয়ে বড় সংকট হলো তথ্য সুরক্ষার। ডিজিটাল নিরাপত্তা ও গোপনীয়তা রক্ষার আধুনিক প্রযুক্তিগত জ্ঞান না থাকায় স্থানীয় পর্যায়ের অনুসন্ধানী সাংবাদিকদের সূত্র (Source) ও ব্যক্তিগত তথ্য সহজেই উন্মুক্ত হয়ে পড়ে।</p>
      
      <p>প্রকৃত সাংবাদিকতার মান ধরে রাখতে হলে সাংবাদিকদের প্রাতিষ্ঠানিক আইনি সহায়তা, নিয়মিত ডিজিটাল সিকিউরিটি ওয়ার্কশপ এবং নৈতিক সাহস নিশ্চিত করা জরুরি। নির্ভীক সাংবাদিকতাই পারে স্থানীয় অনিয়ম ও দুর্নীতির বিরুদ্ধে কার্যকর প্রতিরোধ গড়তে।</p>
    `
  },
  {
    id: 4,
    title: "জুলাই গণ-অভ্যুত্থানে তথ্যের সত্যতা ও ডিজিটাল গুজবের বিস্তার",
    category: "media",
    categoryName: "তথ্য যাচাই ও ফ্যাক্ট-চেক",
    date: "আগস্ট ২০২৪",
    readTime: "৭ মিনিট",
    tags: ["ফ্যাক্ট-চেক", "জুলাই অভ্যুত্থান", "তথ্য যাচাই", "মিডিয়া লিটারেসি"],
    excerpt: "জুলাই গণ-আন্দোলনের দিনগুলোতে সোশ্যাল মিডিয়ায় তথ্যের প্লাবন ঘটেছিল। একই সাথে সত্য ভিডিও ও পরিকল্পিত প্রপাগান্ডা মানুষের মনে বিভ্রান্তি তৈরি করে। সত্য যাচাইয়ে ফ্যাক্ট-চেকিংয়ের ভূমিকা ছিল অত্যন্ত তাৎপর্যপূর্ণ...",
    content: `
      <p>২০২৪ সালের জুলাই গণ-অভ্যুত্থান কেবল রাজপথের লড়াই ছিল না, এটি ছিল সাইবার স্পেস ও তথ্যের লড়াই। ইন্টারনেট ব্ল্যাকআউট এবং মূলধারার গণমাধ্যমের সীমাবদ্ধতার সময় নাগরিকরা খবরের জন্য পুরোপুরি সোশ্যাল মিডিয়ার ওপর নির্ভরশীল হয়ে পড়েছিলেন।</p>
      
      <p>এই সুযোগে যেমন রাজপথের নির্মম সত্যগুলো বিশ্ববাসীর সামনে এসেছে, তেমনি ভুয়া ভিডিও, পুরোনো ঘটনার বিভ্রান্তিকর বিবরণ ও অপতথ্যও ছড়িয়ে পড়ে দ্রুতগতিতে। মাঠের সাংবাদিকদের কাজ ছিল তখন দ্বিগুণ কঠিন—একদিকে জীবনের ঝুঁকি নিয়ে রিপোর্ট করা, অন্যদিকে ছড়িয়ে পড়া তথ্যের সত্যতা যাচাই করা।</p>
      
      <p>ভবিষ্যতের যে কোনো সংকটকালীন সময়ে জনমত ও নিরাপত্তা সুরক্ষায় প্রতিটি নাগরিকের জন্য মৌলিক মিডিয়া লিটারেসি ও ওপেন সোর্স ইনভেস্টিগেশন (OSINT) জ্ঞানের প্রয়োজনীয়তা আজ অনস্বীকার্য।</p>
    `
  },
  {
    id: 5,
    title: "উপকূলীয় জোয়ারের সাথে লড়াই: দাকোপ ও কয়রায় লবণাক্ততার নীরব আঘাত",
    category: "climate",
    categoryName: "পরিবেশ ও সুন্দরবন",
    date: "জুলাই ২০২৪",
    readTime: "৫ মিনিট",
    tags: ["জলবায়ু পরিবর্তন", "লবণাক্ততা", "দাকোপ", "কয়রা", "খাবার পানি"],
    excerpt: "খুলনার দাকোপ ও কয়রা উপজেলার প্রতিটি পরিবারে খাবার পানির জন্য এক নীরব হাহাকার। মিষ্টি পানির উৎসগুলো সমুদ্রের নোনাজলে প্লাবিত হয়ে বদলে দিচ্ছে মানুষের জীবনযাত্রা ও কৃষি অর্থনীতি...",
    content: `
      <p>উপকূলীয় এলাকায় সূর্য ওঠার আগেই একদল নারী ও কিশোরীকে দেখা যায় কলসি কাঁখে কিলোমিটারের পর কিলোমিটার পথ হাঁটতে। গন্তব্য—একটি সচল পিএসএফ (পন্ড স্যান্ড ফিল্টার) বা মিষ্টি পানির পুকুর। এটি কোনো মৌসুমি দৃশ্য নয়, খুলনার দাকোপ ও কয়রা উপজেলার মানুষের প্রতিদিনের রুটিন।</p>
      
      <p>সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি ও একের পর এক ঘূর্ণিঝড়ের কারণে বাঁধ ভেঙে ভূগর্ভস্থ ও ভূ-উপরিভাগের পানি লবণাক্ত হয়ে পড়েছে। এর ফলে শুধু খাবার পানির তীব্র সংকটই নয়, কৃষিজমি অনুর্বর হয়ে পড়ছে এবং নারীদের মধ্যে নানা জটিল স্বাস্থ্যসমস্যা দেখা দিচ্ছে।</p>
      
      <p>জলবায়ু সংকট কোনো দূরবর্তী ভবিষ্যৎ নয়, দক্ষিণাঞ্চলের মানুষের কাছে এটি প্রতিদিনের রক্তক্ষরণ। টেকসই বেড়িবাঁধ ও বৃষ্টির পানি সংরক্ষণের কেন্দ্রীয় উদ্যোগ ছাড়া এই বিশাল জনগোষ্ঠীকে বাস্তুচ্যুত হওয়া থেকে রক্ষা করা অসম্ভব।</p>
    `
  },
  {
    id: 6,
    title: "ইতিহাস চর্চায় প্রান্তিক জনগোষ্ঠীর মৌখিক সাক্ষ্য সংরক্ষণের তাৎপর্য",
    category: "research",
    categoryName: "ভাষাতত্ত্ব ও গবেষণা",
    date: "মে ২০২৪",
    readTime: "৬ মিনিট",
    tags: ["মৌখিক ইতিহাস", "Oral History", "প্রান্তিক জনগোষ্ঠী", "ইতিহাস চর্চা"],
    excerpt: "লিখিত নথিপত্র সবসময় শাসক ও অভিজাতদের দৃষ্টিভঙ্গি তুলে ধরে। কিন্তু সাধারণ মানুষ, বাস্তুচ্যুত শরণার্থী ও শ্রমজীবী মানুষের সত্য ইতিহাস সংরক্ষণে ওরাল হিস্ট্রি বা মৌখিক সাক্ষ্যের কোনো বিকল্প নেই...",
    content: `
      <p>প্রথাগত ঐতিহাসিক গবেষণায় সরকারি নথিপত্র ও প্রভাবশালী মহলের দলিলকেই পরম প্রামাণ্য বিবেচনা করা হয়। ফলে দলিত, আদিবাসী, শরণার্থী ও তৃণমূল শ্রমজীবীদের আত্মত্যাগ ও জীবনসংগ্রাম ইতিহাসের পাতার অন্তরালেই থেকে যায়।</p>
      
      <p>মৌখিক ইতিহাস (Oral History) চর্চার মাধ্যমে আমরা সেইসব মানুষের জবানবন্দি লিপিবদ্ধ করতে পারি যারা কখনো বই লেখেননি, কিন্তু ইতিহাসের গুরুত্বপূর্ণ কালপর্বের প্রত্যক্ষ সাক্ষী ছিলেন। খুলনা অঞ্চলের চা শ্রমিক, নৌকার মাঝি ও ক্যাম্পের বয়োজ্যেষ্ঠদের স্মৃতিচারণ আমাদের স্থানীয় ইতিহাসের এক অমূল্য ভাণ্ডার।</p>
      
      <p>তরুণ গবেষকদের দায়িত্ব হলো এই জীবন্ত দলিলগুলো বিলীন হয়ে যাওয়ার আগেই সংরক্ষণ করা এবং একটি অন্তর্ভুক্তিমূলক ঐতিহাসিক দলিল গড়ে তোলা।</p>
    `
  }
];

let currentCategory = "all";
let currentSearch = "";

function renderBlogPosts() {
  const container = document.getElementById("blog-posts-container");
  if (!container) return;

  const filtered = blogPosts.filter(post => {
    const matchCat = currentCategory === "all" || post.category === currentCategory;
    const searchLower = currentSearch.toLowerCase().trim();
    const matchSearch = !searchLower || 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tags.some(t => t.toLowerCase().includes(searchLower));
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
          <span class="blog-category-tag">${post.categoryName}</span>
          <span><i class="far fa-clock"></i> ${post.readTime}</span>
        </div>
        
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        
        <div class="blog-tags">
          ${post.tags.map(t => `<span class="blog-tag">#${t}</span>`).join("")}
        </div>
        
        <div class="blog-card-footer">
          <div class="blog-author-info">
            <img src="images/profile.jpg" alt="Md. Mirazul Islam" class="blog-author-img">
            <span>মিরাজুল ইসলাম • ${post.date}</span>
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
      <span class="blog-category-tag" style="margin-right:10px;">${post.categoryName}</span>
      <span><i class="far fa-calendar-alt"></i> ${post.date}</span> • 
      <span><i class="far fa-clock"></i> ${post.readTime}</span> • 
      <span><i class="fas fa-user-edit"></i> মোঃ মিরাজুল ইসলাম</span>
    `;
  }
  if (bodyEl) bodyEl.innerHTML = post.content;

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
