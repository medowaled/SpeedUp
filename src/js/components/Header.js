// Reusable Sticky Header Component
import logoUrl from '../../assets/logo.jpg';

class SpeedupHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.highlightActiveLink();
  }

  render() {
    this.innerHTML = `
      <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4" id="main-header">
        <div class="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <!-- Logo -->
          <a href="./index.html" class="flex items-center select-none nav-link bg-white border border-slate-200/80 shadow-sm rounded-xl p-1.5 hover:shadow-md hover:border-blue-500/30 transition-all duration-300">
            <img src="${logoUrl}" alt="SpeedUp Logo" class="h-8 md:h-9 w-auto object-contain transition-all duration-300">
          </a>


          <!-- Desktop Navigation (Arabic text, right aligned list for RTL feeling) -->
          <nav class="hidden md:flex items-center gap-8 text-slate-700 font-semibold" dir="rtl">
            <a href="./index.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="home">الرئيسية</a>
            <a href="./services.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="services">الخدمات</a>
            <a href="./portfolio.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="portfolio">أعمالنا</a>
            <a href="./about.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="about">عن الشركة</a>
            <a href="./contact.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="contact">اتصل بنا</a>
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden md:flex items-center gap-4">
            <a href="./contact.html" class="nav-link bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 glow-effect text-center text-sm">
              ابدأ مشروعك
            </a>
          </div>

          <!-- Mobile Toggle Button -->
          <button id="mobile-menu-btn" class="md:hidden text-slate-800 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors" aria-label="Toggle Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path id="hamburger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full glass-card border-t border-slate-200/50 shadow-xl py-6 px-6 transition-all duration-300 ease-in-out bg-white/95">
          <nav class="flex flex-col gap-4 text-slate-800 font-bold text-lg text-right" dir="rtl">
            <a href="./index.html" class="nav-link py-2 border-b border-slate-100 hover:text-blue-600" data-page="home">الرئيسية</a>
            <a href="./services.html" class="nav-link py-2 border-b border-slate-100 hover:text-blue-600" data-page="services">الخدمات</a>
            <a href="./portfolio.html" class="nav-link py-2 border-b border-slate-100 hover:text-blue-600" data-page="portfolio">أعمالنا</a>
            <a href="./about.html" class="nav-link py-2 border-b border-slate-100 hover:text-blue-600" data-page="about">عن الشركة</a>
            <a href="./contact.html" class="nav-link py-2 border-b border-slate-100 hover:text-blue-600" data-page="contact">اتصل بنا</a>
            <a href="./contact.html" class="nav-link mt-4 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 shadow-md">
              ابدأ مشروعك الآن
            </a>
          </nav>
        </div>
      </header>
    `;
    
    // Add mobile toggle behavior
    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');
    const icon = this.querySelector('#hamburger-icon');
    
    if (btn && menu && icon) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
          icon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        } else {
          icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
      });

      // Close menu when clicking links
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.add('hidden');
          icon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        });
      });
    }

    // Add scroll glass effect
    const header = this.querySelector('#main-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('glass-card', 'shadow-md', 'backdrop-blur-md', 'bg-white/85', 'py-3');
          header.classList.remove('py-4');
        } else {
          header.classList.remove('glass-card', 'shadow-md', 'backdrop-blur-md', 'bg-white/85', 'py-3');
          header.classList.add('py-4');
        }
      });
    }
  }

  highlightActiveLink() {
    const currentPath = window.location.pathname;
    let page = 'home';
    if (currentPath.includes('services.html')) page = 'services';
    else if (currentPath.includes('portfolio.html')) page = 'portfolio';
    else if (currentPath.includes('about.html')) page = 'about';
    else if (currentPath.includes('contact.html')) page = 'contact';

    // Clear all previous active states
    this.querySelectorAll('[data-page]').forEach(link => {
      link.classList.remove('text-blue-600', 'after:w-full');
      link.classList.add('text-slate-700', 'after:w-0');
    });

    // Set new active state
    this.querySelectorAll(`[data-page="${page}"]`).forEach(link => {
      link.classList.add('text-blue-600', 'after:w-full');
      link.classList.remove('text-slate-700', 'text-slate-800', 'after:w-0');
    });
  }
}

customElements.define('speedup-header', SpeedupHeader);
export default SpeedupHeader;
