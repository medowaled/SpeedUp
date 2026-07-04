// Data for SpeedUp Website
import mustafaKhalilImg from '../assets/mustafa-khalil.png';
import newPowerGlobalImg from '../assets/new-power-global.png';
import alShareefImg from '../assets/al-shareef.png';
import lisbonClubImg from '../assets/lisbon-club.png';
import medicCareImg from '../assets/medic-care.png';
import mocaCafeImg from '../assets/moca-cafe.png';
import zayEcommerceImg from '../assets/zay-ecommerce.png';
import restoranImg from '../assets/restoran.png';
import nouryanTravelImg from '../assets/nouryan-travel.png';

// Team Images
import teamCtoImg from '../assets/team-cto.png';
import teamCmoImg from '../assets/team-cmo.png';
import teamLeadImg from '../assets/team-lead.png';

// Dashboard / Marketing / Data Images
import marketingDashboard1Img from '../assets/marketing-dashboard-1.png';
import marketingDashboard2Img from '../assets/marketing-dashboard-2.png';
import dataDashboard1Img from '../assets/data-dashboard-1.png';
import dataDashboard2Img from '../assets/data-dashboard-2.png';

export const services = [
  {
    id: "software-engineering",
    category: "software",
    title: "هندسة البرمجيات",
    titleEn: "Software Engineering",
    icon: "code",
    shortDesc: "بناء أنظمة برمجية مرنة وقابلة للتوسع بأعلى معايير الجودة والكفاءة.",
    description: "نقوم بتصميم وتطوير النظم البرمجية المعقدة وحلول المؤسسات الكبرى. نضمن أن تكون بنيتك التحتية قابلة للتوسع وتتحمل الضغط العالي مع الحفاظ على الأمان المطلق.",
    features: [
      "بناء البنية التحتية السحابية (Cloud Architecture)",
      "تطوير الخدمات الخلفية (Microservices & APIs)",
      "قواعد بيانات متطورة وموزعة (Scalable Databases)",
      "أنظمة الأمان والتشفير المتقدمة"
    ],
    metric: "99.99% Up-time"
  },
  {
    id: "web-solutions",
    category: "web",
    title: "حلول الويب المتقدمة",
    titleEn: "Web Solutions",
    icon: "globe",
    shortDesc: "تصميم وتطوير تطبيقات ويب وتجارة إلكترونية سريعة وفائقة الأداء.",
    description: "مواقعنا وتطبيقات الويب الخاصة بنا مصممة لتحقيق أقصى سرعة تحميل. نركز على تحسين محركات البحث وتجربة مستخدم لا مثيل لها لزيادة التحويلات والمبيعات.",
    features: [
      "مواقع ويب سريعة جداً (Vite/Next.js/HTML5)",
      "منصات تجارة إلكترونية متطورة (E-commerce)",
      "تصميم متجاوب بالكامل وتفاعلي (Fluid UI)",
      "تحسين محركات البحث التقني والأداء (Core Web Vitals)"
    ],
    metric: "< 1.2s Load Time"
  },
  {
    id: "performance-ads",
    category: "marketing",
    title: "إعلانات الأداء والتسويق الرقمي",
    titleEn: "Performance Ads",
    icon: "trending-up",
    shortDesc: "حملات تسويقية مدفوعة بالبيانات لتحقيق أقصى عائد على الاستثمار (ROI).",
    description: "لسنا مجرد وكالة تسويق؛ نحن وكالة أداء. ندير ميزانيتك الإعلانية بذكاء باستخدام تحليلات دقيقة وتقسيم ذكي للجمهور لضمان أعلى معدل تحويل وأقل تكلفة للاكتساب.",
    features: [
      "إعلانات شبكات التواصل الاجتماعي (Meta, TikTok, LinkedIn)",
      "إعلانات محركات البحث والتسويق (Google Ads, YouTube)",
      "حملات إعادة الاستهداف الذكية والوصول المباشر",
      "تحسين معدلات التحويل للمبيعات (CRO)"
    ],
    metric: "4.5x Average ROAS"
  },
  {
    id: "data-analytics",
    category: "data",
    title: "تحليل البيانات والتتبع",
    titleEn: "Data Analytics & Tracking",
    icon: "pie-chart",
    shortDesc: "تتبع أحداث التحويل من جهة الخادم بدقة عالية لضمان صحة البيانات.",
    description: "نوفر أنظمة تتبع متقدمة من جهة الخادم (Server-Side Tracking) لربط منصات الإعلانات مباشرة بقواعد البيانات وتفادي القيود المفروضة على المتصفحات.",
    features: [
      "تتبع الأحداث من جهة الخادم (Server-Side GTM)",
      "ربط وتحسين Conversions API لـ Meta & Google Ads",
      "تقارير وتحليلات مخصصة تفاعلية (Looker Studio)",
      "تتبع سلوك المستخدم وحل مشاكل الفقد في البيانات"
    ],
    metric: "99.8% Tracking Accuracy"
  }
];

export const portfolio = [
  {
    id: "project-1",
    category: "web",
    title: "منصة مستر مصطفى خليل التعليمية",
    desc: "منصة تعليمية تفاعلية لمادة العلوم.",
    problem: "صعوبة تتبع تقدم الطلاب إلكترونياً وبطء استجابة المنصات الجاهزة لضغط الزوار المتزامن أثناء المراجعات النهائية.",
    solution: "تطوير منصة ويب خاصة فائقة السرعة متوافقة مع الهواتف الذكية مع نظام تتبع درجات واختبارات تفاعلية مستمرة للطلاب.",
    results: [
      { label: "سرعة استجابة فائقة تحت الضغط", value: "+400%" },
      { label: "عدد الطلاب النشطين شهرياً", value: "10K+" },
      { label: "نسبة رضا الطلاب وأولياء الأمور", value: "98%" }
    ],
    tech: ["Vite", "Tailwind CSS", "Vanilla JS", "Node.js", "MongoDB"],
    tag: "Web Solutions",
    imageUrl: mustafaKhalilImg,
    websiteUrl: "https://www.mostafa-khalil.com/"
  },
  {
    id: "project-2",
    category: "software",
    title: "بوابة نيو باور جلوبال للمناولة الصناعية",
    desc: "نظام إدارة وتأجير معدات المناولة الصناعية.",
    problem: "صعوبة إدارة وتأجير الكلاركات ومعدات الطاقة الصناعية بنظام تتبع ورقي تقليدي يؤدي لفقدان فرص البيع.",
    solution: "بناء نظام سحابي متكامل لتتبع وإيجار وتأجير المعدات مع بوابة لحساب التكاليف وطلب عروض الأسعار الفورية.",
    results: [
      { label: "زيادة طلبات عروض الأسعار", value: "+85%" },
      { label: "تنظيم عمليات الصيانة والتشغيل", value: "100%" },
      { label: "سرعة الرد على العملاء", value: "أقل من 5 د" }
    ],
    tech: ["HTML5", "Vite", "Tailwind CSS", "Go", "PostgreSQL"],
    tag: "Software Engineering",
    imageUrl: newPowerGlobalImg,
    websiteUrl: "https://www.new-power-global.com/"
  },
  {
    id: "project-3",
    category: "web",
    title: "موقع شركة الشريف للخزانات",
    desc: "تطوير الهوية الرقمية والموقع الإلكتروني الرسمي لشركة الشريف الرائدة في صناعة خزانات البولي إيثيلين.",
    problem: "عدم وجود تمثيل رقمي قوي يعبر عن جودة ومتانة المنتجات محلياً وإقليمياً، وضعف الوصول للعملاء عبر الإنترنت.",
    solution: "بناء موقع ويب تعريفي تفاعلي فخم يستعرض المنتجات بمواصفاتها الدقيقة ومقاييس الجودة، مدمج بقنوات الاتصال المباشر.",
    results: [
      { label: "زيادة المبيعات عبر الموقع", value: "+60%" },
      { label: "عدد الزيارات المستهدفة شهرياً", value: "50K+" },
      { label: "معدل التحويل (Conversion Rate)", value: "4.8%" }
    ],
    tech: ["HTML5", "Vite", "Tailwind CSS", "Vanilla JS", "WhatsApp Integration"],
    tag: "Web Solutions",
    imageUrl: alShareefImg,
    websiteUrl: "https://alsharif-tanks.com/"
  },
  {
    id: "project-4",
    category: "software",
    title: "نظام الإدارة الشامل لنادي لشبونة",
    desc: "نظام إداري ولوحة تحكم سحابية شاملة لإدارة الموظفين واللاعبين وعمليات تسجيل الدخول الحساسة.",
    problem: "تشتت بيانات الأعضاء والموظفين بين ملفات متعددة وصعوبة التحقق من الصلاحيات وسلامة الدخول للنظام.",
    solution: "تطوير لوحة إدارة متطورة وموحدة مع نظام حماية قوي للمصادقة وتوزيع المهام والصلاحيات بدقة.",
    results: [
      { label: "كفاءة العمليات الإدارية", value: "+150%" },
      { label: "أمان البيانات والتحقق", value: "100%" },
      { label: "تقليل الوقت المهدر في الإدارة", value: "-70%" }
    ],
    tech: ["Node.js", "Express", "React", "PostgreSQL", "JWT Auth"],
    tag: "Software Engineering",
    imageUrl: lisbonClubImg,
    websiteUrl: "https://www.lisbon-club.com/"
  },
  {
    id: "project-5",
    category: "web",
    title: "منصة Medic Care الطبية",
    desc: "منصة إلكترونية متكاملة للرعاية الصحية والاستشارات وحجز مواعيد العيادات.",
    problem: "صعوبة إدارة حجز المواعيد وتتتبع ملفات المرضى إلكترونياً، وتأخر التواصل مع الأطباء الاستشاريين.",
    solution: "تطوير منصة ويب سريعة وآمنة تتيح للمرضى حجز الاستشارات الفورية ومتابعة تقاريرهم الطبية مع الأطباء.",
    results: [
      { label: "زيادة الحجوزات الطبية", value: "+120%" },
      { label: "سرعة تأكيد المواعيد", value: "< 2 د" },
      { label: "معدل رضا المرضى", value: "98%" }
    ],
    tech: ["Vite", "Tailwind CSS", "Vanilla JS", "Node.js", "MongoDB"],
    tag: "Web Solutions",
    imageUrl: medicCareImg,
    websiteUrl: "https://medowaled.github.io/Medic-Care-main/"
  },
  {
    id: "project-6",
    category: "web",
    title: "موقع وتطبيق Moca Cafe",
    desc: "منصة طلبات وحجوزات ذكية لسلسلة مقاهي موكا كافيه الراقية.",
    problem: "ازدحام طوابير الانتظار الصباحية وفقدان الطلبات المستعجلة أثناء ساعات العمل الرسمية.",
    solution: "تطوير تطبيق ويب للطلب المسبق السريع للقهوة والمأكولات وحجز الطاولات لتوفير الوقت للعملاء.",
    results: [
      { label: "زيادة مبيعات الطلب المسبق", value: "+55%" },
      { label: "تقليل زمن انتظار الزبائن", value: "-90%" },
      { label: "نمو معدل تكرار الزيارة", value: "40%" }
    ],
    tech: ["Vite", "Tailwind CSS", "Vanilla JS", "Express", "Node.js"],
    tag: "Web Solutions",
    imageUrl: mocaCafeImg,
    websiteUrl: "https://medowaled.github.io/moca/"
  },
  {
    id: "project-7",
    category: "web",
    title: "متجر Zay الإلكتروني للأحذية",
    desc: "متجر تجارة إلكترونية متطور للأحذية والمنتجات الرياضية العصرية.",
    problem: "بطء واجهة تصفح المنتجات وارتفاع نسبة سلات التسوق المتروكة بسبب تعقيد عملية الدفع.",
    solution: "بناء واجهة متجر تفاعلية وسريعة للغاية مع دمج عملية الدفع بصفحة واحدة وتسهيل فلترة المقاسات.",
    results: [
      { label: "زيادة المبيعات والتحويلات", value: "+80%" },
      { label: "سرعة تحميل صفحات المنتجات", value: "0.9 ث" },
      { label: "انخفاض معدل التخلي عن السلة", value: "-35%" }
    ],
    tech: ["Vite", "Tailwind CSS", "Vanilla JS", "GraphQL", "Shopify API"],
    tag: "Web Solutions",
    imageUrl: zayEcommerceImg,
    websiteUrl: "https://medowaled.github.io/zay_shop-main/"
  },
  {
    id: "project-8",
    category: "web",
    title: "منصة Restoran لحجوزات المطاعم",
    desc: "موقع تفاعلي متكامل لحجز طاولات مطاعم المشويات الفاخرة وإدارة الطلبات الخارجية.",
    problem: "صعوبة تنسيق حجوزات الطاولات يدوياً وتداخل المواعيد في أوقات العطلات والمناسبات.",
    solution: "تطوير نظام حجز رقمي فوري يوضح للعميل الطاولات الشاغرة بالوقت الحقيقي ويتيح طلب الوجبات مسبقاً.",
    results: [
      { label: "كفاءة تنظيم الطاولات", value: "100%" },
      { label: "ارتفاع طلبات الحجز المسبق", value: "+150%" },
      { label: "توفير وقت طاقم الخدمة", value: "-45%" }
    ],
    tech: ["Vite", "Tailwind CSS", "Vanilla JS", "Go", "PostgreSQL"],
    tag: "Web Solutions",
    imageUrl: restoranImg,
    websiteUrl: "https://medowaled.github.io/Restaurant-main/"
  },
  {
    id: "project-9",
    category: "web",
    title: "موقع نوريان للسياحة والسفر",
    desc: "منصة متكاملة لخدمات السياحة الخارجية، الحج والعمرة، وحجز التأشيرات.",
    problem: "صعوبة تصفح البرامج السياحية إلكترونياً وتنسيق حجوزات العملاء يدوياً لرحلات الحج والعمرة.",
    solution: "بناء موقع تعريفي تفاعلي يستعرض الرحلات ويسهل حجز البرامج المختلفة والتواصل المباشر مع خدمة العملاء.",
    results: [
      { label: "زيادة استفسارات الحجز", value: "+110%" },
      { label: "سرعة معالجة طلبات الفيزا", value: "80%" },
      { label: "معدل الرضا عن خدمات السفر", value: "99%" }
    ],
    tech: ["Vite", "Tailwind CSS", "Vanilla JS", "Bootstrap", "Owl Carousel"],
    tag: "Web Solutions",
    imageUrl: nouryanTravelImg,
    websiteUrl: "https://nouryan-travel.com/"
  },
  {
    id: "project-10",
    category: "marketing",
    title: "حملة تسويق الأداء لمتجر ملابس راقٍ",
    desc: "إدارة وإطلاق حملات إعلانية مدفوعة على Meta وTikTok حققت عائداً استثمارياً ضخماً.",
    problem: "ارتفاع تكلفة العميل الجديد (CAC) وانخفاض معدل تكرار الشراء من العملاء الحاليين.",
    solution: "إعادة تقسيم الجمهور واستخدام استراتيجيات إعادة الاستهداف الديناميكي وتصميمات إعلانية مخصصة.",
    results: [
      { label: "معدل العائد الإعلاني ROAS", value: "5.8x" },
      { label: "انخفاض تكلفة الاكتساب CAC", value: "-35%" },
      { label: "زيادة القيمة الحياتية للعميل LTV", value: "+45%" }
    ],
    tech: ["Meta Ads", "TikTok Ads", "Google Analytics 4", "Snapchat Ads"],
    tag: "Performance Ads",
    imageUrl: marketingDashboard1Img,
    websiteUrl: ""
  },
  {
    id: "project-11",
    category: "marketing",
    title: "حملة محركات البحث لشركة استشارات عقارية",
    desc: "تحسين حملات Google Ads وتصدر نتائج البحث للكلمات المفتاحية عالية القيمة.",
    problem: "الحصول على زوار غير مستهدفين وارتفاع تكلفة النقرة للكلمات العقارية التنافسية.",
    solution: "تصفية الكلمات السلبية وتحسين صفحات الهبوط (LPO) لزيادة معدل تحويل النقرة لطلب حقيقي.",
    results: [
      { label: "زيادة العملاء المستهدفين Leads", value: "+180%" },
      { label: "تقليل تكلفة النقرة CPC", value: "-28%" },
      { label: "نسبة التحويل من صفحات الهبوط", value: "8.2%" }
    ],
    tech: ["Google Ads", "Google Search Console", "Semrush", "Unbounce"],
    tag: "Performance Ads",
    imageUrl: marketingDashboard2Img,
    websiteUrl: ""
  },
  {
    id: "project-12",
    category: "marketing",
    title: "حملة تسويق نمو لتطبيق توصيل طلبات",
    desc: "استراتيجية نمو متكاملة لإعادة تنشيط المستخدمين غير النشطين وزيادة حجم الطلبات اليومية.",
    problem: "ارتفاع نسبة إلغاء تثبيت التطبيق وتراجع أعداد الطلبات المتكررة شهرياً.",
    solution: "إرسال إشعارات مخصصة بناءً على سلوك المستخدم، وإطلاق حملات إعلانية ممولة لإعادة التنشيط.",
    results: [
      { label: "إعادة تنشيط المستخدمين", value: "+65%" },
      { label: "زيادة الطلبات اليومية", value: "+45%" },
      { label: "انخفاض معدل خسارة العملاء", value: "-22%" }
    ],
    tech: ["Braze", "Firebase", "Meta Ads", "App Store Connect"],
    tag: "Performance Ads",
    imageUrl: marketingDashboard1Img,
    websiteUrl: ""
  },
  {
    id: "project-13",
    category: "data",
    title: "نظام تتبع الخادم (Server-Side Tracking)",
    desc: "إعداد البنية التحتية لتتبع أحداث التحويل من جهة الخادم لضمان دقة البيانات بنسبة 99.8%.",
    problem: "فقدان أكثر من 30% من بيانات التحويلات بسبب حواجب الإعلانات وتحديثات خصوصية iOS.",
    solution: "تعديل تتبع Google Tag Manager ليعمل بالكامل من جهة الخادم وربطه بـ Meta Conversions API.",
    results: [
      { label: "استعادة البيانات المفقودة", value: "+32%" },
      { label: "دقة مطابقة أحداث التحويل", value: "9.2/10" },
      { label: "دقة بيانات المبيعات", value: "99.8%" }
    ],
    tech: ["Server-Side GTM", "Google Cloud", "Meta Conversions", "GA4"],
    tag: "Data Analytics",
    imageUrl: dataDashboard1Img,
    websiteUrl: ""
  },
  {
    id: "project-14",
    category: "data",
    title: "بناء لوحة تحليلات ذكاء الأعمال (BI Dashboard)",
    desc: "تصميم لوحة تقارير تفاعلية مركزية عبر Looker Studio لربط المبيعات بالمخزون.",
    problem: "تشتت البيانات بين ملفات إكسل متعددة وتأخر إصدار تقارير الأداء الأسبوعية.",
    solution: "تطوير خطوط نقل بيانات (Data Pipelines) تلقائية من الـ ERP وقواعد البيانات مباشرة إلى لوحات العرض.",
    results: [
      { label: "توفير وقت إعداد التقارير", value: "100%" },
      { label: "سرعة اتخاذ القرارات الإدارية", value: "فوري" },
      { label: "تقليل الأخطاء البشرية بالتقارير", value: "99%" }
    ],
    tech: ["Looker Studio", "BigQuery", "SQL", "Google Sheet API"],
    tag: "Data Analytics",
    imageUrl: dataDashboard2Img,
    websiteUrl: ""
  },
  {
    id: "project-15",
    category: "data",
    title: "نظام تحليل سلوك المستخدم وتحسين CRO",
    desc: "تتبع رحلة العميل لتحديد نقاط الاختناق في صفحة الدفع وزيادة المبيعات.",
    problem: "خروج المستخدمين المفاجئ في الخطوة الأخيرة من الدفع دون إتمام الطلب.",
    solution: "إجراء تحليلات الخرائط الحرارية (Heatmaps) وتسجيلات الجلسات لتسريع وتبسيط حقول الدفع.",
    results: [
      { label: "ارتفاع معدل التحويل CRO", value: "+38%" },
      { label: "تخفيض نسبة التخلي عن السلة", value: "-25%" },
      { label: "تقليل زمن ملء حقول الدفع", value: "-40%" }
    ],
    tech: ["Hotjar", "Mixpanel", "Google Optimize", "GTM"],
    tag: "Data Analytics",
    imageUrl: dataDashboard1Img,
    websiteUrl: ""
  }
];

export const team = [
  {
    name: "م.احمد وليد ",
    role: "الرئيس التنفيذي للتقنية (CEO)",
    image: teamCtoImg,
    bio: "خبير في هندسة البرمجيات والأنظمة الموزعة لأكثر من 5 عاماً."
  },
  {
    name: "م. اسلام سعد ",
    role: "مدير العمليات والانظمة البرمجيه المقعدة   (COO)",
    image: teamCmoImg,
    bio: "خبير في عالم البرمجيات وادارة المشاريع الكبري لمدة تزيد عن 4 سنوات"
  },
  {
    name: "م . سالم محمود ",
    role: "(CMO ) خبير في عالم تحديد الاستراتجيات والبراندينج وبناء انظمة حديثه ومتطورة  ",
    image: teamLeadImg,
    bio: "مهووس بالسرعة وتحسين تجربة المستخدم وأداء المواقع الفائق."
  }
];

export const methodology = [
  {
    step: "01",
    title: "التحليل وتحديد الأهداف (Analyze & Define)",
    desc: "ندرس نموذج عملك، بياناتك الحالية، ونقاط الألم لنحدد أهدافاً رقمية واضحة للسرعة والأداء والنمو."
  },
  {
    step: "02",
    title: "الهندسة والابتكار (Engineer & Build)",
    desc: "نبني بنية برمجية صلبة ومواقع فائقة السرعة مع التركيز على الكود النظيف والتدرجية غير المحدودة."
  },
  {
    step: "03",
    title: "تكامل التتبع الذكي (Integrate Tracking)",
    desc: "نربط أدوات التحليل وسلوك المستخدم للتأكد من قياس كل نقرة وقراءة كل بايت من البيانات بدقة."
  },
  {
    step: "04",
    title: "التسويق المدفوع بالأرقام (Optimize & Scale)",
    desc: "نطلق حملات إعلانية ذكية ونقوم بالاختبار المستمر (A/B Testing) لنضاعف النتائج ونخفض تكلفة الاستحواذ."
  }
];
