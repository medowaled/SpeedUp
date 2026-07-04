// Reusable Footer Component
import logoUrl from '../../assets/logo.jpg';

class SpeedupFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 bg-grid-pattern relative" dir="rtl">
        <!-- Overlay decorative data lines -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>

        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <!-- Column 1: Agency Brand -->
            <div class="flex flex-col gap-4">
              <a href="./index.html" class="w-fit self-start bg-white p-2.5 rounded-2xl shadow-lg border border-slate-850 nav-link transition-transform hover:scale-103 duration-300">
                <img src="${logoUrl}" alt="SpeedUp Logo" class="h-8 md:h-10 w-auto object-contain">
              </a>


              <p class="text-sm text-slate-400 leading-relaxed">
                وكالة متكاملة متخصصة في هندسة البرمجيات وتسويق الأداء. ندمج الحلول البرمجية عالية السرعة مع الحملات الإعلانية الذكية لتحقيق نمو حقيقي وقابل للتوسع لأعمالك.
              </p>
              <!-- Social links -->
              <div class="flex gap-4 mt-2">
                <a href="#" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-all" aria-label="LinkedIn">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579454496946" target="_blank" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all" aria-label="Facebook">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13c-3 0-4 1.5-4 4v3z"/></svg>
                </a>
                <a href="https://wa.me/201099444012" target="_blank" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-green-500 hover:border-green-500 transition-all" aria-label="WhatsApp">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.09 1.51 5.82L0 24l6.38-1.51C8.08 23.45 10.06 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.85 15.35c-.17-.08-1.02-.5-1.18-.5-.16 0-.28.03-.4.2-.12.17-.46.56-.56.68-.1.12-.2.13-.37.05-.17-.08-.73-.27-1.39-.86-.51-.45-.85-1.01-.95-1.18-.1-.17-.01-.26.07-.35.08-.09.17-.23.26-.35.09-.12.12-.2.18-.33.06-.13.03-.25-.01-.35-.04-.1-.38-.92-.52-1.26-.14-.33-.28-.29-.39-.33-.1-.04-.21-.04-.32-.04-.11 0-.29.04-.44.2-.15.16-.58.57-.58 1.4s.6 1.62.68 1.74c.08.12 1.17 1.79 2.83 2.51.39.17.7.27.94.35.4.13.76.11 1.05.07.32-.05 1.02-.42 1.16-.81.14-.39.14-.72.1-.81-.04-.09-.15-.14-.32-.22z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="flex flex-col gap-4 md:mr-8">
              <h3 class="text-white font-bold text-lg border-r-2 border-orange-500 pr-3">روابط سريعة</h3>
              <ul class="flex flex-col gap-2.5 text-sm">
                <li><a href="./index.html" class="nav-link hover:text-orange-500 transition-colors">الرئيسية</a></li>
                <li><a href="./services.html" class="nav-link hover:text-orange-500 transition-colors">خدماتنا بالتفصيل</a></li>
                <li><a href="./portfolio.html" class="nav-link hover:text-orange-500 transition-colors">معرض أعمالنا</a></li>
                <li><a href="./about.html" class="nav-link hover:text-orange-500 transition-colors">قصة الوكالة</a></li>
                <li><a href="./contact.html" class="nav-link hover:text-orange-500 transition-colors">اتصل بنا / طلب تسعيرة</a></li>
              </ul>
            </div>

            <!-- Column 3: Contact Info -->
            <div class="flex flex-col gap-4">
              <h3 class="text-white font-bold text-lg border-r-2 border-orange-500 pr-3">معلومات الاتصال</h3>
              <ul class="flex flex-col gap-3 text-sm">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>طريق مصر اسكندريه الزراعي - قليوب - برج اسماك السلطان - الدور الخامس</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v11z"></path></svg>
                  <a href="mailto:info@speedup.sa" class="hover:text-blue-400">info@speedup.sa</a>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2c.08.314-.006.647-.248.881L8.83 8.56a17.124 17.124 0 007.07 7.07l1.71-1.71a1 1 0 01.933-.248l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <div class="flex gap-2">
                    <a href="tel:01099444012" class="hover:text-blue-400">01099444012</a>
                    <span>/</span>
                    <a href="tel:01095412229" class="hover:text-blue-400">01095412229</a>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Column 4: Newsletter -->
            <div class="flex flex-col gap-4">
              <h3 class="text-white font-bold text-lg border-r-2 border-orange-500 pr-3">النشرة الإخبارية</h3>
              <p class="text-xs text-slate-400">احصل على أحدث تقارير تسويق الأداء وتقنيات البرمجة مباشرة في بريدك.</p>
              <form class="flex gap-2" id="newsletter-form">
                <input type="email" placeholder="بريدك الإلكتروني" class="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-600 w-full text-right" required>
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md">اشترك</button>
              </form>
              <div id="newsletter-success" class="hidden text-xs text-green-400 font-bold mt-1">تم الاشتراك بنجاح! شكراً لك.</div>
            </div>

          </div>

          <hr class="border-slate-900 my-8">

          <!-- Copyrights & Disclaimers -->
          <div class="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div>
              <span>© ${new Date().getFullYear()} وكالة SpeedUp. جميع الحقوق محفوظة.</span>
            </div>
            <div class="flex gap-4">
              <a href="#" class="hover:text-slate-400">سياسة الخصوصية</a>
              <span>•</span>
              <a href="#" class="hover:text-slate-400">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    // Newsletter submission handler
    const form = this.querySelector('#newsletter-form');
    const successMsg = this.querySelector('#newsletter-success');
    if (form && successMsg) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        // Placeholder for newsletter subscription pixel trigger
        console.log('Newsletter subscription pixel trigger');
      });
    }
  }
}

customElements.define('speedup-footer', SpeedupFooter);
export default SpeedupFooter;
