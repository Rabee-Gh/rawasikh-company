// ─────────────────────────────────────────
//  Home Page Data
// ─────────────────────────────────────────
import { Tag, Megaphone, Sparkles } from 'lucide-react';
import { Award, Globe, TrendingUp, Zap, Lightbulb, Settings, Rocket, Star } from 'lucide-react';

// ── Hero Slides ──────────────────────────
export const HERO_SLIDES = [
    {
        id: 'main',
        badge: { icon: <Sparkles size={13} />, text: 'شركة تشغيلية متكاملة', bg: '#E0F7F4', color: '#00897B' },
        headline: ['نبتكر', 'المفاهيم', 'ونقود', 'النمو'],
        headlineAccent: [false, true, false, true],
        sub: 'شركة تشغيلية تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية.',
        cta: { label: 'اكتشف علاماتنا', to: '/brands' },
        ctaSecondary: { label: 'تعرف علينا', to: '/about' },
        accentColor: '#00BFA5',
        accentDark: '#00897B',
        visual: 'dashboard',
    },
    {
        id: 'offer',
        badge: { icon: <Tag size={13} />, text: 'فرصة شراكة', bg: '#F5F3FF', color: '#6D28D9' },
        headline: ['هل أنت', 'مستعد', 'لشراكة', 'حقيقية؟'],
        headlineAccent: [false, true, false, false],
        sub: 'نبحث دائماً عن شركاء طموحين لبناء علامات تجارية ناجحة معاً — تواصل مع فريقنا وابدأ رحلة النمو.',
        cta: { label: 'تواصل مع فريقنا', to: '/contact' },
        ctaSecondary: { label: 'اعرف أكثر', to: '/services' },
        accentColor: '#6D28D9',
        accentDark: '#4C1D95',
        visual: 'offer',
    },
    {
        id: 'brand',
        badge: { icon: <Megaphone size={13} />, text: 'إعلان جديد', bg: '#FFF3EC', color: '#D4580F' },
        headline: ['شفزار', 'تتوسع', 'في مناطق', 'جديدة'],
        headlineAccent: [true, false, false, false],
        sub: 'علامتنا التجارية الرائدة في قطاع الأغذية والمشروبات تفتح أبوابها في مواقع جديدة — تجربة طعام استثنائية تصل إليك.',
        cta: { label: 'اكتشف شفزار', to: '/brands' },
        ctaSecondary: { label: 'تواصل معنا', to: '/contact' },
        accentColor: '#D4580F',
        accentDark: '#A8420A',
        visual: 'brand',
    },
];

export const HERO_INTERVAL_MS = 5500;

// ── Stats ────────────────────────────────
export const HOME_STATS = [
    { icon: <Award size={22} />, value: 5, suffix: '+', label: 'علامات تجارية' },
    { icon: <Globe size={22} />, value: 3, suffix: '+', label: 'قطاعات مستهدفة' },
    { icon: <TrendingUp size={22} />, value: 100, suffix: '%', label: 'أتمتة شاملة' },
    { icon: <Zap size={22} />, value: 10, suffix: '+', label: 'سنوات خبرة' },
];

// ── Features ─────────────────────────────
export const HOME_FEATURES = [
    {
        icon: <Lightbulb size={28} />,
        title: 'نبتكر المفاهيم',
        desc: 'نصمم علامات تجارية مبتكرة مدروسة بعمق، تجمع بين فهم السوق وتوقعات العملاء.',
        color: '#00BFA5',
        bg: '#E0F7F4',
    },
    {
        icon: <Settings size={28} />,
        title: 'نؤتمت العمليات',
        desc: 'نحول كل عملية تشغيلية إلى منظومة رقمية ذكية تعمل بكفاءة قصوى على مدار الساعة.',
        color: '#E8621A',
        bg: '#FFF3EC',
    },
    {
        icon: <Rocket size={28} />,
        title: 'نقود النمو',
        desc: 'نضع استراتيجيات توسع مدروسة مبنية على بيانات دقيقة لضمان نمو مستدام وحقيقي.',
        color: '#7C3AED',
        bg: '#F5F3FF',
    },
];

// ── Brands preview text ───────────────────
export const HOME_BRANDS_SECTION = {
    label: 'علاماتنا التجارية',
    heading: 'محفظة تجارية',
    accent: 'رائدة',
    desc: 'نمتلك ونشغّل علامات تجارية متنوعة في قطاعات استراتيجية عالية النمو. كل علامة تجارية تحمل هوية مستقلة وتشغيلاً احترافياً متكاملاً.',
    bullets: [
        'قطاع الأغذية والمشروبات (F&B)',
        'الحلول الرقمية الذكية',
        'التوسع الجغرافي المدروس',
    ],
    cta: { label: 'استكشف علاماتنا', to: '/brands' },
    // Shefzar card
    shefzarCard: {
        badge: 'علامة تجارية نشطة',
        desc: 'علامة تجارية رائدة في قطاع الأغذية والمشروبات، تقدم تجربة طعام استثنائية مدفوعة بالشغف والجودة والابتكار.',
        tags: ['F&B', 'مطاعم', 'جودة عالية', 'تجربة فريدة'],
    },
};

// ── Testimonials ─────────────────────────
export const HOME_TESTIMONIALS = [
    {
        name: 'أحمد الشمري',
        role: 'مدير تنفيذي',
        text: 'RBC Solutions غيّرت طريقة تفكيرنا في التشغيل. الأتمتة التي طبقوها وفّرت علينا ساعات عمل يومية.',
        rating: 5,
    },
    {
        name: 'سارة العتيبي',
        role: 'مؤسسة شركة ناشئة',
        text: 'الفريق محترف جداً ويفهم احتياجات السوق السعودي بعمق. نتائج ملموسة من الشهر الأول.',
        rating: 5,
    },
    {
        name: 'محمد القحطاني',
        role: 'مستثمر',
        text: 'محفظتهم التجارية متنوعة ومدروسة. شراكة استراتيجية حقيقية وليست مجرد خدمة.',
        rating: 5,
    },
];

// ── Dashboard visual mini-stats ───────────
export const DASHBOARD_STATS = [
    { label: 'العلامات النشطة', val: '5', color: '#00BFA5' },
    { label: 'نسبة الأتمتة', val: '94%', color: '#E8621A' },
    { label: 'معدل النمو', val: '+32%', color: '#7C3AED' },
    { label: 'رضا العملاء', val: '4.9★', color: '#F59E0B' },
];

export const DASHBOARD_BARS = [
    { label: 'F&B Operations', pct: 88 },
    { label: 'Digital Solutions', pct: 72 },
    { label: 'Market Expansion', pct: 60 },
];

// ── Partnership visual items ──────────────
export const PARTNERSHIP_ITEMS = [
    'محفظة علامات تجارية متنوعة',
    'تشغيل احترافي متكامل',
    'استراتيجيات نمو مدروسة',
];
