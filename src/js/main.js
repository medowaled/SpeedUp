// main.js - Core Logic, Routing, and Page Interactions
import { services, portfolio, team, methodology } from './data.js';
import './components/Header.js';
import './components/Footer.js';

// Page transition variables
let isTransitioning = false;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize current page contents
  const initialPage = getPageName(window.location.pathname);
  initPage(initialPage);
  
  // Set up SPA Router Link interception
  initRouter();
  
  // Setup Analytics trigger placeholders
  triggerAnalyticsPageView(initialPage);
});

// GET CURRENT PAGE NAME
function getPageName(path) {
  if (path.includes('services.html')) return 'services';
  if (path.includes('portfolio.html')) return 'portfolio';
  if (path.includes('about.html')) return 'about';
  if (path.includes('contact.html')) return 'contact';
  return 'home';
}

// ROUTER IMPLEMENTATION (Pjax hybrid for smooth page transitions)
function initRouter() {
  // Intercept click on internal links
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    // Check if it is an internal link (e.g. starting with . or / and containing .html or index)
    if (href && (href.startsWith('.') || href.startsWith('/') || !href.includes('://')) && !href.startsWith('#')) {
      e.preventDefault();
      
      const targetUrl = new URL(href, window.location.href).pathname;
      if (targetUrl === window.location.pathname) return; // Already on this page
      
      navigateTo(href);
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    loadPageContent(window.location.pathname, false);
  });
}

function navigateTo(url) {
  if (isTransitioning) return;
  isTransitioning = true;
  
  const mainContent = document.querySelector('main');
  if (!mainContent) {
    window.location.href = url;
    return;
  }
  
  // Page exit animation
  mainContent.classList.add('transition-opacity', 'duration-300', 'opacity-0');
  
  setTimeout(() => {
    loadPageContent(url, true);
  }, 300);
}

async function loadPageContent(url, pushState = true) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to load page');
    
    const htmlText = await response.text();
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(htmlText, 'text/html');
    
    const newMain = newDoc.querySelector('main');
    const currentMain = document.querySelector('main');
    
    if (newMain && currentMain) {
      // Replace main container content
      currentMain.innerHTML = newMain.innerHTML;
      
      // Update page title
      document.title = newDoc.title;
      
      // Update browser history if requested
      if (pushState) {
        window.history.pushState(null, '', url);
      }
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Re-initialize active states in header
      const header = document.querySelector('speedup-header');
      if (header && typeof header.highlightActiveLink === 'function') {
        header.highlightActiveLink();
      }
      
      // Trigger animations / initializers for new page
      const pageName = getPageName(window.location.pathname);
      initPage(pageName);
      
      // Trigger analytics tracking
      triggerAnalyticsPageView(pageName);
      
      // Page enter animation
      currentMain.classList.remove('opacity-0');
      currentMain.classList.add('opacity-100');
    } else {
      // Fallback in case of parsing errors
      window.location.href = url;
    }
  } catch (error) {
    console.error('Error switching page, falling back:', error);
    window.location.href = url;
  } finally {
    isTransitioning = false;
  }
}

// INITIALIZE INDIVIDUAL PAGES
function initPage(pageName) {
  // Common Lazy-loading image setup
  initLazyLoading();

  switch(pageName) {
    case 'home':
      initHomePage();
      break;
    case 'services':
      initServicesPage();
      break;
    case 'portfolio':
      initPortfolioPage();
      break;
    case 'about':
      initAboutPage();
      break;
    case 'contact':
      initContactPage();
      break;
  }
}

// 1. HOME PAGE INITIALIZATION
function initHomePage() {
  // Count up animation for stats
  const counters = document.querySelectorAll('.stat-counter');
  
  const runCounters = () => {
    counters.forEach(counter => {
      const targetVal = parseFloat(counter.getAttribute('data-target'));
      const isPercent = counter.getAttribute('data-type') === 'percent';
      const isMultiplier = counter.getAttribute('data-type') === 'multiplier';
      const isSeconds = counter.getAttribute('data-type') === 'seconds';
      
      let count = 0;
      const duration = 1500; // ms
      const stepTime = 15;
      const increment = targetVal / (duration / stepTime);
      
      const timer = setInterval(() => {
        count += increment;
        if (count >= targetVal) {
          clearInterval(timer);
          formatValue(targetVal);
        } else {
          formatValue(count);
        }
      }, stepTime);
      
      function formatValue(val) {
        if (isSeconds) {
          counter.textContent = val.toFixed(1) + 's';
        } else if (isPercent) {
          counter.textContent = '+' + Math.round(val) + '%';
        } else if (isMultiplier) {
          counter.textContent = val.toFixed(1) + 'x';
        } else {
          counter.textContent = Math.round(val);
        }
      }
    });
  };

  // Run stats only when in viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('#stats-section');
    if (statsSection) observer.observe(statsSection);
  } else {
    runCounters();
  }

  // Coverflow Carousel Setup
  initCoverflowCarousel();
}

function initCoverflowCarousel() {
  const container = document.getElementById('hero-coverflow');
  const dotsContainer = document.getElementById('coverflow-dots');
  const titleEl = document.getElementById('active-slide-title');
  const descEl = document.getElementById('active-slide-desc');
  
  if (!container) return;

  // Render slides dynamically
  container.innerHTML = portfolio.map((project, idx) => `
    <div class="coverflow-slide" data-index="${idx}" data-url="${project.websiteUrl}">
      <img src="${project.imageUrl}" alt="${project.title}">
      <div class="coverflow-overlay">
        <div class="flex justify-between items-center gap-2">
          <div class="text-right">
            <h3 class="text-xs md:text-sm font-black leading-tight text-white">${project.title}</h3>
            <span class="text-[10px] font-bold text-slate-400 mt-1 block">${project.tag}</span>
          </div>
          ${project.websiteUrl ? `
          <span class="shrink-0 text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <span>زيارة</span>
            <svg class="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = portfolio.map((_, idx) => `
      <div class="coverflow-dot" data-index="${idx}"></div>
    `).join('');
  }

  let currentIndex = Math.floor(portfolio.length / 2); // Start at middle slide
  const slides = container.querySelectorAll('.coverflow-slide');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.coverflow-dot') : [];
  let autoPlayTimer = null;

  function updateCoverflow() {
    const activeProject = portfolio[currentIndex];
    
    // Smooth transition for titles
    if (titleEl && descEl) {
      titleEl.style.opacity = '0';
      descEl.style.opacity = '0';
      setTimeout(() => {
        titleEl.textContent = activeProject.title;
        descEl.textContent = activeProject.desc;
        titleEl.style.opacity = '1';
        descEl.style.opacity = '1';
      }, 150);
    }
    
    const N = portfolio.length;
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      let diff = idx - currentIndex;
      
      // Calculate circular distance for infinite scrolling
      if (diff > N / 2) {
        diff -= N;
      } else if (diff < -N / 2) {
        diff += N;
      }
      
      if (diff === 0) {
        // Active Center slide
        slide.style.transform = `translateX(0) scale(1) rotateY(0)`;
        slide.style.zIndex = '20';
        slide.style.opacity = '1';
        slide.classList.add('active');
        slide.style.pointerEvents = 'auto';
      } else if (diff < 0) {
        // Left slides
        const factor = Math.abs(diff);
        slide.style.transform = `translateX(${-110 - (factor - 1) * 70}px) scale(${1 - factor * 0.12}) rotateY(38deg)`;
        slide.style.zIndex = (10 - factor).toString();
        slide.style.opacity = Math.max(0.15, 0.7 - factor * 0.2).toString();
        slide.style.pointerEvents = 'none';
      } else {
        // Right slides
        const factor = Math.abs(diff);
        slide.style.transform = `translateX(${110 + (factor - 1) * 70}px) scale(${1 - factor * 0.12}) rotateY(-38deg)`;
        slide.style.zIndex = (10 - factor).toString();
        slide.style.opacity = Math.max(0.15, 0.7 - factor * 0.2).toString();
        slide.style.pointerEvents = 'none';
      }
    });

    // Sync dots
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  // Event Listeners for slide clicks
  slides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      if (idx === currentIndex) {
        const url = slide.getAttribute('data-url');
        if (url) window.open(url, '_blank');
      } else {
        currentIndex = idx;
        updateCoverflow();
        resetAutoPlay();
      }
    });
  });

  // Event Listeners for dot clicks
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateCoverflow();
      resetAutoPlay();
    });
  });

  // Next / Prev button triggers
  const prevBtn = document.getElementById('coverflow-prev');
  const nextBtn = document.getElementById('coverflow-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : portfolio.length - 1;
      updateCoverflow();
      resetAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < portfolio.length - 1) ? currentIndex + 1 : 0;
      updateCoverflow();
      resetAutoPlay();
    });
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : portfolio.length - 1;
      updateCoverflow();
      resetAutoPlay();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex < portfolio.length - 1) ? currentIndex + 1 : 0;
      updateCoverflow();
      resetAutoPlay();
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);

  // Autoplay functionality
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      currentIndex = (currentIndex < portfolio.length - 1) ? currentIndex + 1 : 0;
      updateCoverflow();
    }, 4500);
  }

  function resetAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      startAutoPlay();
    }
  }

  // Initial draw
  updateCoverflow();
  startAutoPlay();

  // Cleanup event listener when swapping page (SPA Router)
  const observer = new MutationObserver(() => {
    if (!document.getElementById('hero-coverflow')) {
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(autoPlayTimer);
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// 2. SERVICES PAGE INITIALIZATION
function initServicesPage() {
  const container = document.getElementById('services-detail-list');
  if (!container) return;

  // Render the detailed services from data.js
  container.innerHTML = services.map(service => `
    <div class="glass-card rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-slate-200/60 relative group overflow-hidden" id="${service.id}">
      <!-- Accent Top Border Glow -->
      <div class="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-500"></div>
      
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        
        <!-- Left Side / Summary info -->
        <div class="lg:w-1/3 flex flex-col gap-4">
          <div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            ${getIconSVG(service.icon)}
          </div>
          <h2 class="text-2xl font-extrabold text-slate-900">${service.title}</h2>
          <span class="text-xs font-bold text-slate-400 tracking-wider">${service.titleEn.toUpperCase()}</span>
          
          <div class="mt-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100/30 flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500">مقياس الأداء المستهدف</span>
            <span class="text-sm font-extrabold text-orange-600 bg-white px-3 py-1 rounded-md shadow-sm">${service.metric}</span>
          </div>
        </div>

        <!-- Right Side / Deep details -->
        <div class="lg:w-2/3 flex flex-col gap-6">
          <p class="text-slate-600 leading-relaxed text-base">${service.description}</p>
          
          <h3 class="text-sm font-bold text-slate-800 border-r-2 border-orange-500 pr-2">أبرز مجالات الحل والعمل:</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${service.features.map(feat => `
              <li class="flex items-start gap-2.5 text-sm text-slate-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>${feat}</span>
              </li>
            `).join('')}
          </ul>

          <div class="mt-4 self-end">
            <a href="./contact.html?service=${service.id}" class="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
              <span>طلب الخدمة بالتحديد</span>
              <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 12H5m7 7l-7-7 7-7"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  `).join('');
}

// 3. PORTFOLIO PAGE INITIALIZATION
function initPortfolioPage() {
  const container = document.getElementById('portfolio-grid');
  const filterContainer = document.getElementById('portfolio-filters');
  if (!container || !filterContainer) return;

  // Render filter buttons
  const categories = [
    { key: 'all', name: 'الكل' },
    { key: 'software', name: 'هندسة البرمجيات' },
    { key: 'web', name: 'حلول الويب' },
    { key: 'marketing', name: 'تسويق الأداء' },
    { key: 'data', name: 'تحليل البيانات' }
  ];

  filterContainer.innerHTML = categories.map(cat => `
    <button data-filter="${cat.key}" class="px-5 py-2 rounded-xl text-sm font-bold border transition-all duration-300 cursor-pointer ${
      cat.key === 'all' 
        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' 
        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
    }">
      ${cat.name}
    </button>
  `).join('');

  // Render portfolio cards
  const renderCards = (filter = 'all') => {
    const filtered = filter === 'all' ? portfolio : portfolio.filter(p => p.category === filter);
    
    container.innerHTML = filtered.map(project => `
      <div class="glass-card rounded-2xl border border-slate-200/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col group h-full">
        <!-- Accent indicator -->
        <div class="h-1.5 w-full bg-slate-900 group-hover:bg-orange-500 transition-colors duration-300"></div>
        
        <div class="p-6 md:p-8 flex flex-col flex-grow">
          <!-- Tag & Tech -->
          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-md">${project.tag}</span>
            <div class="flex gap-1">
              ${project.tech.slice(0, 3).map(t => `<span class="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono">${t}</span>`).join('')}
            </div>
          </div>
          
          <h3 class="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">${project.title}</h3>
          <p class="text-sm text-slate-500 mb-6 leading-relaxed">${project.desc}</p>
          
          <!-- Case Study Breakdowns (Problem -> Solution) -->
          <div class="border-t border-slate-100 pt-4 flex-grow flex flex-col gap-4">
            <div>
              <span class="text-xs font-extrabold text-red-500 block mb-1">المشكلة:</span>
              <p class="text-xs text-slate-600 leading-relaxed">${project.problem}</p>
            </div>
            <div>
              <span class="text-xs font-extrabold text-emerald-600 block mb-1">الحل:</span>
              <p class="text-xs text-slate-600 leading-relaxed">${project.solution}</p>
            </div>
          </div>

          <!-- Numbers / Results -->
          <div class="mt-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
            ${project.results.map(r => `
              <div class="p-2 bg-slate-50 rounded-lg border border-slate-100/50">
                <span class="block text-base font-black text-blue-600">${r.value}</span>
                <span class="text-[9px] font-bold text-slate-400 leading-tight block mt-0.5">${r.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  };

  // Initial render
  renderCards('all');

  // Filter click handlers
  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    // Toggle active state classes
    filterContainer.querySelectorAll('button').forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-md', 'shadow-blue-500/20');
      b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
    });

    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
    btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-md', 'shadow-blue-500/20');

    // Run cards filter render with a tiny delay for smoother swap feel
    const filterValue = btn.getAttribute('data-filter');
    container.classList.add('opacity-0', 'scale-98');
    setTimeout(() => {
      renderCards(filterValue);
      container.classList.remove('opacity-0', 'scale-98');
      container.classList.add('opacity-100', 'scale-100');
    }, 150);
  });
}

// 4. ABOUT PAGE INITIALIZATION
function initAboutPage() {
  const teamGrid = document.getElementById('team-grid');
  const methodologyList = document.getElementById('methodology-list');

  // Render team members
  if (teamGrid) {
    teamGrid.innerHTML = team.map(member => `
      <div class="glass-card rounded-2xl border border-slate-200/50 overflow-hidden text-center p-6 hover:shadow-lg transition-all duration-300">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500/20 p-1">
          <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover rounded-full bg-slate-100" loading="lazy">
        </div>
        <h3 class="text-lg font-extrabold text-slate-900">${member.name}</h3>
        <span class="text-xs font-bold text-orange-600 mt-1 block">${member.role}</span>
        <p class="text-xs text-slate-500 mt-3 leading-relaxed">${member.bio}</p>
      </div>
    `).join('');
  }

  // Render methodology steps
  if (methodologyList) {
    methodologyList.innerHTML = methodology.map((step, idx) => `
      <div class="flex gap-6 items-start relative group">
        <!-- Number Circle with line indicator -->
        <div class="flex flex-col items-center shrink-0">
          <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-blue-500/20 z-10">
            ${step.step}
          </div>
          ${idx !== methodology.length - 1 ? `<div class="w-0.5 h-20 bg-slate-800 mt-2 group-hover:bg-blue-500 transition-colors"></div>` : ''}
        </div>
        <!-- Content -->
        <div class="pb-8">
          <h3 class="text-lg font-extrabold text-white mb-2">${step.title}</h3>
          <p class="text-sm text-slate-300 leading-relaxed">${step.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

// 5. CONTACT PAGE INITIALIZATION
function initContactPage() {
  const budgetSlider = document.getElementById('project-budget');
  const budgetDisplay = document.getElementById('budget-value');
  const contactForm = document.getElementById('quote-form');
  const successModal = document.getElementById('quote-success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // URL query parameter selector (pre-select project type)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedService = urlParams.get('service');
  if (requestedService) {
    const serviceSelector = document.getElementById('project-type');
    if (serviceSelector) {
      if (requestedService.includes('software')) serviceSelector.value = 'software';
      else if (requestedService.includes('web')) serviceSelector.value = 'web';
      else if (requestedService.includes('marketing')) serviceSelector.value = 'marketing';
      else if (requestedService.includes('data')) serviceSelector.value = 'data';
    }
  }

  // Budget slider interaction
  if (budgetSlider && budgetDisplay) {
    const budgetTiers = [
      "أقل من 5,000 $",
      "5,000 $ - 10,000 $",
      "10,000 $ - 25,000 $",
      "25,000 $ - 50,000 $",
      "أكثر من 50,000 $"
    ];
    
    const updateBudgetText = () => {
      const idx = parseInt(budgetSlider.value);
      budgetDisplay.textContent = budgetTiers[idx];
    };
    
    budgetSlider.addEventListener('input', updateBudgetText);
    updateBudgetText(); // Set initial text
  }

  // Form submission modal simulation and WhatsApp redirection
  if (contactForm && successModal && modalCloseBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('client-name').value;
      const email = document.getElementById('client-email').value;
      const phone = document.getElementById('client-phone').value;
      const serviceSelector = document.getElementById('project-type');
      const service = serviceSelector.options[serviceSelector.selectedIndex].text;
      const budget = document.getElementById('budget-value').textContent;
      const details = document.getElementById('project-details').value;

      const message = `طلب استشارة جديد من موقع SpeedUp:
• الاسم: ${name}
• البريد الإلكتروني: ${email}
• رقم الجوال: ${phone}
• الخدمة المطلوبة: ${service}
• الميزانية المتوقعة: ${budget}
• التفاصيل: ${details || 'لا توجد تفاصيل إضافية'}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/201099444012?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Trigger visual success modal
      successModal.classList.remove('hidden');
      successModal.classList.add('flex');
      
      // Reset form
      contactForm.reset();
      if (budgetSlider) budgetSlider.value = 2; // back to middle
      if (budgetDisplay) budgetDisplay.textContent = "10,000 $ - 25,000 $"; // reset text
    });

    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
      successModal.classList.remove('flex');
    });
  }
}

// COMPONENT SVG ICONS HELPER
function getIconSVG(name) {
  const icons = {
    code: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
    globe: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`,
    'trending-up': `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
    'pie-chart': `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>`
  };
  return icons[name] || '';
}

// DRAW INTERACTIVE PERFORMANCE SVG CHART (Data-driven background pattern)
function renderPerformanceChart() {
  const svgContainer = document.getElementById('hero-performance-chart');
  if (!svgContainer) return;

  // Let's create an elegant, animating grid with glowing wave chart
  svgContainer.innerHTML = `
    <svg viewBox="0 0 500 200" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid lines -->
      <g stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4">
        <line x1="0" y1="40" x2="500" y2="40" />
        <line x1="0" y1="80" x2="500" y2="80" />
        <line x1="0" y1="120" x2="500" y2="120" />
        <line x1="0" y1="160" x2="500" y2="160" />
        
        <line x1="100" y1="0" x2="100" y2="200" />
        <line x1="200" y1="0" x2="200" y2="200" />
        <line x1="300" y1="0" x2="300" y2="200" />
        <line x1="400" y1="0" x2="400" y2="200" />
      </g>
      
      <!-- Gradient definition for glow and fill -->
      <defs>
        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2563eb" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.0" />
        </linearGradient>
        <linearGradient id="chart-line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="70%" stop-color="#2563eb" />
          <stop offset="100%" stop-color="#f97316" />
        </linearGradient>
      </defs>

      <!-- Shaded Area -->
      <path d="M 0 170 Q 100 160 180 90 T 320 70 T 450 30 L 500 25 L 500 200 L 0 200 Z" fill="url(#chart-grad)"></path>

      <!-- Glowing main path line -->
      <path d="M 0 170 Q 100 160 180 90 T 320 70 T 450 30 L 500 25" 
            fill="none" 
            stroke="url(#chart-line-grad)" 
            stroke-width="4.5"
            stroke-linecap="round"
            stroke-dasharray="1000"
            stroke-dashoffset="1000"
            class="animate-draw-line"
            style="animation: drawLine 2.5s ease-out forwards;">
      </path>
      
      <!-- Key Data nodes dots -->
      <circle cx="180" cy="90" r="5" fill="#2563eb" stroke="#fff" stroke-width="1.5" class="animate-bounce" style="animation-duration: 2s;"></circle>
      <circle cx="320" cy="70" r="5" fill="#2563eb" stroke="#fff" stroke-width="1.5" class="animate-bounce" style="animation-duration: 2.5s;"></circle>
      <circle cx="450" cy="30" r="6" fill="#f97316" stroke="#fff" stroke-width="2" class="animate-pulse"></circle>
    </svg>
    <style>
      @keyframes drawLine {
        to {
          stroke-dashoffset: 0;
        }
      }
    </style>
  `;
}

// LAZY LOADING IMAGES UTILITY
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Trigger actual image loading if using data-src
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imgObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imgObserver.observe(img));
  } else {
    // Fallback if observer not supported
    lazyImages.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
    });
  }
}

// ANALYTICS TRIGGER PLACEHOLDERS
function triggerAnalyticsPageView(pageName) {
  // Placeholder tracking hooks (Google Analytics, Hotjar, Facebook Pixel)
  console.log(`[Analytics] PageView Event Triggered for: ${pageName.toUpperCase()}`);
  
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_title: document.title, page_path: window.location.pathname });
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}
