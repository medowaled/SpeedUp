// Reusable Footer Component
import logoLightUrl from '../../assets/logo-light.webp';

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
              <a href="./index.html" class="w-fit self-start nav-link transition-transform hover:scale-105 duration-300 group py-1" aria-label="SpeedUp Home">
                <img src="${logoLightUrl}" alt="SpeedUp Logo" width="160" height="48" decoding="async" loading="lazy" class="h-11 md:h-13 w-auto object-contain transition-all duration-300 filter group-hover:brightness-110">
              </a>


              <p class="text-sm text-slate-400 leading-relaxed">
                وكالة متكاملة متخصصة في هندسة البرمجيات وتسويق الأداء. ندمج الحلول البرمجية عالية السرعة مع الحملات الإعلانية الذكية لتحقيق نمو حقيقي وقابل للتوسع لأعمالك.
              </p>
              <!-- Social links -->
              <div class="flex gap-3 mt-2 flex-wrap items-center">
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/company/speedup1" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all hover:scale-105" aria-label="LinkedIn">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <!-- Facebook -->
                <a href="https://www.facebook.com/speedup.dev" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all hover:scale-105" aria-label="Facebook">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13c-3 0-4 1.5-4 4v3z"/></svg>
                </a>
                <!-- TikTok -->
                <a href="https://www.tiktok.com/@speed.up9824" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#ff0050] hover:border-[#ff0050] transition-all hover:scale-105" aria-label="TikTok">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.068-.102a2.895 2.895 0 0 1 2.373-4.532c.38 0 .742.073 1.074.206V9.452a6.34 6.34 0 0 0-1.074-.092 6.34 6.34 0 0 0-6.339 6.34 6.34 6.34 0 0 0 10.784 4.528l.06-.057a6.31 6.31 0 0 0 1.834-4.593V8.847a8.212 8.212 0 0 0 4.796 1.547v-3.45a4.81 4.81 0 0 1-1.003-.258z"/></svg>
                </a>
                <!-- WhatsApp -->
                <a href="https://wa.me/201099444012" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-green-500 hover:border-green-500 transition-all hover:scale-105" aria-label="WhatsApp">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.859 2.796.859 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.768-5.767-5.768zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.025-.494-1.606-.669-2.651-2.316-2.73-2.424-.078-.108-.65-0.865-.65-1.652 0-.786.41-1.173.556-1.332.146-.16.319-.2.425-.2.106 0 .213.001.306.006.098.005.23-.037.36.275.133.324.453 1.107.493 1.188.04.081.067.175.013.282-.053.107-.08.175-.16.269-.08.093-.169.208-.242.279-.081.08-.166.167-.071.33.095.163.423.698.908 1.13.624.556 1.15.728 1.313.809.163.081.258.072.355-.04.097-.113.415-.483.526-.649.111-.166.222-.138.373-.082.151.055.958.452 1.123.535.166.082.277.123.318.192.041.069.041.402-.103.807z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.054 22l4.978-1.305A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.163 8.163 0 01-4.172-1.144l-.299-.178-3.097.812.827-3.018-.195-.31A8.169 8.169 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"/>
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
                  <a href="mailto:Speeduptech2026@gmail.com" class="hover:text-blue-400 text-xs md:text-sm">Speeduptech2026@gmail.com</a>
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
                <input type="email" id="newsletter-email" name="email" placeholder="بريدك الإلكتروني" class="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-600 w-full text-right text-white" required>
                <button type="submit" id="newsletter-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md shrink-0 flex items-center justify-center min-w-[70px]">
                  <span id="newsletter-btn-text">اشترك</span>
                  <svg id="newsletter-btn-spinner" class="hidden animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                </button>
              </form>
              <div id="newsletter-success" class="hidden text-xs text-green-400 font-bold mt-1 bg-green-950/40 border border-green-800/50 p-2.5 rounded-lg flex items-center gap-2">
                <svg class="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span>تم الاشتراك بنجاح! شكراً لك.</span>
              </div>
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
    const emailInput = this.querySelector('#newsletter-email');
    const btn = this.querySelector('#newsletter-btn');
    const btnText = this.querySelector('#newsletter-btn-text');
    const btnSpinner = this.querySelector('#newsletter-btn-spinner');
    const successMsg = this.querySelector('#newsletter-success');

    if (form && emailInput && btn && successMsg) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) return;

        btn.disabled = true;
        if (btnText) btnText.classList.add('hidden');
        if (btnSpinner) btnSpinner.classList.remove('hidden');

        try {
          // Submit directly via FormSubmit AJAX API to Speeduptech2026@gmail.com
          await fetch("https://formsubmit.co/ajax/Speeduptech2026@gmail.com", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: "مشترك جديد في النشرة الإخبارية - SpeedUp",
              _template: "table",
              email: email,
              date: new Date().toLocaleString('ar-EG'),
              page: window.location.href
            })
          });
        } catch (err) {
          console.warn('Newsletter delivery note:', err);
        } finally {
          form.classList.add('hidden');
          successMsg.classList.remove('hidden');
          btn.disabled = false;
          if (btnText) btnText.classList.remove('hidden');
          if (btnSpinner) btnSpinner.classList.add('hidden');
        }
      });
    }
  }
}

customElements.define('speedup-footer', SpeedupFooter);
export default SpeedupFooter;
