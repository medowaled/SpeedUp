// Reusable Sticky Header Component
import logoUrl from '../../assets/logo.webp';

class SpeedupHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.highlightActiveLink();
  }

  render() {
    this.innerHTML = `
      <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-xs" id="main-header">
        <div class="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <!-- Logo -->
          <a href="./index.html" class="flex items-center select-none nav-link transition-transform hover:scale-105 duration-300 group py-0.5" aria-label="SpeedUp Home">
            <img src="${logoUrl}" alt="SpeedUp Logo" width="160" height="48" decoding="async" fetchpriority="high" class="h-10 md:h-12 w-auto object-contain transition-all duration-300 filter group-hover:brightness-105">
          </a>


          <!-- Desktop Navigation (Arabic text, right aligned list for RTL feeling) -->
          <nav class="hidden md:flex items-center gap-8 text-slate-700 font-semibold" dir="rtl">
            <a href="./index.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="home">الرئيسية</a>
            <a href="./services.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="services">الخدمات</a>
            <a href="./portfolio.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="portfolio">أعمالنا</a>
            <a href="./about.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="about">عن الشركة</a>
            <a href="./contact.html" class="nav-link relative py-2 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" data-page="contact">اتصل بنا</a>
          </nav>

          <!-- Desktop CTA & Socials -->
          <div class="hidden md:flex items-center gap-3">
            <a href="https://wa.me/201099444012" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105" 
               aria-label="تواصل عبر واتساب">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/speedup.dev" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105" 
               aria-label="صفحة فيسبوك">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="./contact.html" class="nav-link bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 glow-effect text-center text-sm">
              ابدأ مشروعك
            </a>
          </div>

          <!-- Mobile Actions (WhatsApp, Facebook, Toggle Menu) -->
          <div class="flex md:hidden items-center gap-1.5 sm:gap-2">
            <!-- WhatsApp quick button -->
            <a href="https://wa.me/201099444012" target="_blank" rel="noopener noreferrer" 
               class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-xs active:scale-95" 
               aria-label="تواصل عبر واتساب">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            <!-- Facebook quick button -->
            <a href="https://www.facebook.com/speedup.dev" target="_blank" rel="noopener noreferrer" 
               class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-xs active:scale-95" 
               aria-label="صفحة فيسبوك">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <!-- Mobile Hamburger Toggle Button -->
            <button id="mobile-menu-btn" class="w-9 h-9 flex items-center justify-center text-slate-800 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200/80 active:scale-95" aria-label="قائمة الموقع">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path id="hamburger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full border-t border-slate-200/50 shadow-xl py-6 px-6 transition-all duration-300 ease-in-out bg-white">
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
          header.classList.add('shadow-md', 'bg-white/95', 'py-2');
          header.classList.remove('py-3', 'bg-white/90');
        } else {
          header.classList.remove('shadow-md', 'bg-white/95', 'py-2');
          header.classList.add('py-3', 'bg-white/90');
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
