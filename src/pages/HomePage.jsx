import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, Zap, ChevronDown, Star, Rocket } from 'lucide-react';
import { SHEFZAR_LOGO } from '../assets/images';
import {
    HERO_SLIDES, HERO_INTERVAL_MS,
    HOME_STATS, HOME_FEATURES, HOME_BRANDS_SECTION, HOME_TESTIMONIALS,
    DASHBOARD_STATS, DASHBOARD_BARS, PARTNERSHIP_ITEMS,
} from '../data/home.data';

/* ─────────────────────────────────────────
   CountUp
───────────────────────────────────────── */
function CountUp({ to, suffix = '', duration = 2000 }) {
    const [val, setVal] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    useEffect(() => {
        if (!started) return;
        let cur = 0;
        const step = to / (duration / 16);
        const t = setInterval(() => {
            cur += step;
            if (cur >= to) { setVal(to); clearInterval(t); } else setVal(Math.floor(cur));
        }, 16);
        return () => clearInterval(t);
    }, [started, to, duration]);
    return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────────────────────────────────────
   Visual panels per slide
───────────────────────────────────────── */
function DashboardVisual() {
    return (
        <div className="hero-card-float relative w-full max-w-[420px] mx-auto">
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-card-hover">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <div className="text-[#718096] text-xs mb-1">لوحة التحكم التشغيلية</div>
                        <div className="text-[#1A2332] font-black text-base">RBC Dashboard</div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00BFA5] to-[#00897B] rounded-xl flex items-center justify-center">
                        <Zap size={18} color="white" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    {DASHBOARD_STATS.map((s, i) => (
                        <div key={i} className="bg-[#F7F9FC] rounded-xl p-3">
                            <div className="font-black text-lg" style={{ color: s.color }}>{s.val}</div>
                            <div className="text-[#718096] text-xs">{s.label}</div>
                        </div>
                    ))}
                </div>
                <div className="space-y-3">
                    {DASHBOARD_BARS.map((b, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-xs text-[#718096] mb-1">
                                <span>{b.label}</span>
                                <span className="font-semibold text-[#00BFA5]">{b.pct}%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${b.pct}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-3 border border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#E0F7F4] rounded-lg flex items-center justify-center text-[#00BFA5]">
                        <TrendingUp size={15} />
                    </div>
                    <div>
                        <div className="text-xs font-black text-[#1A2332]">نمو مستمر</div>
                        <div className="text-[10px] text-[#00BFA5]">+32% هذا الربع</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OfferVisual() {
    return (
        <div className="hero-card-float relative w-full max-w-[420px] mx-auto">
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-7 shadow-card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <Rocket size={28} color="white" />
                </div>
                <div className="text-[#718096] text-xs mb-2 uppercase tracking-widest">انضم إلينا</div>
                <div className="text-[#1A2332] font-black text-3xl mb-1">كن شريكنا</div>
                <div className="text-[#6D28D9] font-bold text-sm mb-5">نبني معاً، ننمو معاً</div>
                <div className="space-y-3 text-right mb-6">
                    {[
                        'محفظة علامات تجارية متنوعة',
                        'تشغيل احترافي متكامل',
                        'استراتيجيات نمو مدروسة',
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#F5F3FF] border border-[#6D28D9]/30 flex items-center justify-center flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-[#6D28D9]" />
                            </div>
                            <span className="text-[#4A5568] text-sm">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="bg-[#F5F3FF] border border-[#6D28D9]/20 rounded-xl p-3">
                    <div className="text-[#6D28D9] text-xs font-bold">🤝 تواصل معنا وابدأ رحلة النمو</div>
                </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-3 border border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#F5F3FF] rounded-lg flex items-center justify-center text-[#6D28D9]">
                        <Star size={15} fill="#6D28D9" />
                    </div>
                    <div>
                        <div className="text-xs font-black text-[#1A2332]">شركاء موثوقون</div>
                        <div className="text-[10px] text-[#6D28D9]">4.9 / 5.0 ★</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BrandVisual({ logo }) {
    return (
        <div className="hero-card-float relative w-full max-w-[420px] mx-auto">
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-7 shadow-card-hover text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF3EC] border border-[#D4580F]/20 text-[#D4580F] text-xs font-bold mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4580F] animate-pulse" />
                    توسع جديد
                </div>
                <div className="flex items-center justify-center mb-5 bg-[#F7F9FC] rounded-2xl p-4">
                    <img
                        src={logo}
                        alt="شفزار"
                        className="max-h-28 max-w-[220px] w-auto object-contain drop-shadow-md"
                    />
                </div>
                <div className="text-[#1A2332] font-black text-xl mb-2">شفزار</div>
                <div className="text-[#718096] text-sm mb-5 leading-relaxed">
                    تجربة طعام استثنائية تصل إلى مناطق جديدة
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    {['F&B', 'مطاعم', 'جودة عالية', 'توسع 2026'].map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#FFF3EC] text-[#D4580F] text-xs font-semibold border border-[#D4580F]/20">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-3 border border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#FFF3EC] rounded-lg flex items-center justify-center text-[#D4580F]">
                        <Rocket size={15} />
                    </div>
                    <div>
                        <div className="text-xs font-black text-[#1A2332]">إطلاق جديد</div>
                        <div className="text-[10px] text-[#D4580F]">2026 ←</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   HeroSlider component
───────────────────────────────────────── */
function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [progressKey, setProgressKey] = useState(0);
    const timerRef = useRef(null);

    const goTo = useCallback((idx) => {
        setCurrent(idx);
        setProgressKey(k => k + 1);
    }, []);

    const next = useCallback(() => goTo((current + 1) % HERO_SLIDES.length), [current, goTo]);

    /* auto-advance */
    useEffect(() => {
        timerRef.current = setTimeout(next, HERO_INTERVAL_MS);
        return () => clearTimeout(timerRef.current);
    }, [current, next]);

    const slide = HERO_SLIDES[current];

    return (
        <section className="relative flex flex-col overflow-hidden bg-gradient-to-br from-white via-[#F0FDFB] to-[#E0F7F4]">
            {/* ── Background blobs (ثابتة) ── */}
            <div className="hero-blob w-[500px] h-[500px] bg-[#00BFA5] top-[-100px] right-[-100px]" />
            <div className="hero-blob w-[400px] h-[400px] bg-[#00897B] bottom-[-80px] left-[-80px]" />

            {/* ── Grid overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(#00BFA5 1px, transparent 1px), linear-gradient(90deg, #00BFA5 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* ── Floating shapes ── */}
            <div className="absolute top-1/4 right-[8%] w-16 h-16 rounded-2xl bg-[#00BFA5]/15 border border-[#00BFA5]/30 animate-float rotate-12" />
            <div className="absolute bottom-1/3 left-[6%] w-10 h-10 rounded-xl bg-[#E8621A]/15 border border-[#E8621A]/30 animate-float-slow -rotate-6" />
            <div className="absolute top-1/2 left-[15%] w-6 h-6 rounded-full bg-[#00BFA5]/30 animate-bounce-soft" />

            {/* ── Slides ── */}
            <div className="relative">
                {HERO_SLIDES.map((s, idx) => (
                    <div key={s.id} className={`hero-slide ${idx === current ? 'active' : ''}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full min-h-screen flex flex-col justify-center">
                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                                {/* ── Left: Text ── */}
                                <div>
                                    {/* Badge */}
                                    <div className="slide-content-item opacity-0 mb-6">
                                        <span
                                            className="section-label"
                                            style={{ background: s.badge.bg, color: s.badge.color }}
                                        >
                                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: s.badge.color }} />
                                            {s.badge.text}
                                        </span>
                                    </div>

                                    {/* Headline */}
                                    <h1 className="slide-content-item opacity-0 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 text-[#1A2332]">
                                        {s.headline.map((word, wi) => (
                                            <span key={wi}>
                                                {s.headlineAccent[wi]
                                                    ? <span style={{
                                                        background: `linear-gradient(135deg, ${s.accentColor}, ${s.accentDark})`,
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                    }}>{word}</span>
                                                    : <span>{word}</span>
                                                }
                                                {wi < s.headline.length - 1 && (wi % 2 === 1 ? <br /> : ' ')}
                                            </span>
                                        ))}
                                    </h1>

                                    {/* Sub */}
                                    <p className="slide-content-item opacity-0 text-[#718096] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                                        {s.sub}
                                    </p>

                                    {/* CTAs */}
                                    <div className="slide-content-item opacity-0 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to={s.cta.to}
                                            className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-1"
                                            style={{
                                                background: `linear-gradient(135deg, ${s.accentColor}, ${s.accentDark})`,
                                                color: '#fff',
                                                boxShadow: `0 4px 20px ${s.accentColor}44`,
                                            }}
                                        >
                                            {s.cta.label}
                                            <ArrowLeft size={15} />
                                        </Link>
                                        <Link
                                            to={s.ctaSecondary.to}
                                            className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-7 py-3.5 text-sm border-2 transition-all duration-300 hover:-translate-y-1"
                                            style={{
                                                borderColor: s.accentColor,
                                                color: s.accentColor,
                                            }}
                                        >
                                            {s.ctaSecondary.label}
                                        </Link>
                                    </div>

                                    {/* Trust row */}
                                    <div className="slide-content-item opacity-0 flex items-center gap-4 mt-8 pt-8 border-t border-[#E2E8F0]">
                                        <div className="flex -space-x-2 space-x-reverse">
                                            {['#00BFA5', '#00897B', '#E8621A', '#7C3AED'].map((c, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                                                    {String.fromCharCode(65 + i)}
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="flex gap-0.5 mb-0.5">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F59E0B" color="#F59E0B" />)}
                                            </div>
                                            <p className="text-xs text-[#718096]">موثوق من قِبل عشرات الشركاء</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Right: Visual (responsive — ينزل للأسفل على الموبايل) ── */}
                                <div className="slide-content-item opacity-0">
                                    {s.visual === 'dashboard' && <DashboardVisual />}
                                    {s.visual === 'offer' && <OfferVisual />}
                                    {s.visual === 'brand' && <BrandVisual logo={SHEFZAR_LOGO} />}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Controls bar (dots + progress فقط) ── */}
            <div className="relative z-20 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center gap-4">

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {HERO_SLIDES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx)}
                                className={`slide-dot ${idx === current ? 'active' : ''}`}
                                aria-label={`الانتقال إلى البنر ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="flex-1 max-w-[180px]">
                        <div className="slide-progress-bar" style={{ background: 'rgba(0,0,0,0.12)' }}>
                            <div
                                key={progressKey}
                                className="slide-progress-fill running"
                                style={{
                                    transitionDuration: `${HERO_INTERVAL_MS}ms`,
                                    background: slide.accentColor,
                                }}
                            />
                        </div>
                    </div>

                    {/* Counter */}
                    <div className="text-[#A0AEC0] text-xs font-mono">
                        {String(current + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
                    </div>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 animate-bounce-soft pointer-events-none hidden sm:flex">
                <span className="text-[#A0AEC0] text-xs">اسحب للأسفل</span>
                <ChevronDown size={18} className="text-[#00BFA5]" />
            </div>
        </section>
    );
}
/* ─────────────────────────────────────────
   HomePage
───────────────────────────────────────── */
export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>RBC Solutions | الرئيسية — حلول الأعمال المتكاملة</title>
                <meta name="description" content="شركة تشغيلية سعودية تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية — شفزار، سويت، MLR Frozen." />
                <link rel="canonical" href="https://rawasikhbusiness.com/" />
                <meta property="og:url" content="https://rawasikhbusiness.com/" />
                <meta property="og:title" content="RBC Solutions | حلول الأعمال المتكاملة" />
                <meta property="og:description" content="شركة تشغيلية سعودية تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية." />
                <meta property="og:image" content="https://rawasikhbusiness.com/logo.jpg" />
            </Helmet>

            {/* ══ HERO SLIDER ══ */}
            <HeroSlider />

            {/* ══ STATS ══ */}
            <section className="py-16 bg-white border-y border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {HOME_STATS.map((s, i) => (
                            <div key={i} className="stat-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="w-12 h-12 bg-white rounded-xl shadow-teal-sm flex items-center justify-center text-[#00BFA5] mx-auto mb-3">
                                    {s.icon}
                                </div>
                                <div className="text-3xl sm:text-4xl font-black text-[#1A2332] mb-1">
                                    <CountUp to={s.value} suffix={s.suffix} />
                                </div>
                                <div className="text-sm text-[#718096]">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ FEATURES ══ */}
            <section className="py-20 sm:py-28 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mx-auto mb-4 reveal">ما نقدمه</div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A2332] mb-4 reveal">
                            منظومة متكاملة من{' '}
                            <span className="text-gradient-teal">الابتكار والتشغيل</span>
                        </h2>
                        <div className="teal-divider reveal" />
                        <p className="text-[#718096] text-base sm:text-lg max-w-2xl mx-auto mt-4 reveal">
                            نجمع بين الإبداع في بناء المفاهيم التجارية والكفاءة في تشغيلها لنحقق نتائج استثنائية.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {HOME_FEATURES.map((f, i) => (
                            <div key={i} className="card p-8 text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: f.bg, color: f.color }}>
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-black text-[#1A2332] mb-3">{f.title}</h3>
                                <p className="text-[#718096] text-sm leading-relaxed">{f.desc}</p>
                                <div className="mt-5 h-1 rounded-full mx-auto w-12" style={{ background: f.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ BRANDS PREVIEW ══ */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="section-label mb-4 reveal">علاماتنا التجارية</div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A2332] mb-5 reveal">
                                محفظة تجارية{' '}
                                <span className="text-gradient-teal">رائدة</span>
                            </h2>
                            <p className="text-[#718096] text-base leading-relaxed mb-6 reveal">
                                نمتلك ونشغّل علامات تجارية متنوعة في قطاعات استراتيجية عالية النمو. كل علامة تجارية تحمل هوية مستقلة وتشغيلاً احترافياً متكاملاً.
                            </p>
                            <div className="space-y-3 mb-8 reveal">
                                {['قطاع الأغذية والمشروبات (F&B)', 'الحلول الرقمية الذكية', 'التوسع الجغرافي المدروس'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#E0F7F4] flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-[#00BFA5]" />
                                        </div>
                                        <span className="text-[#4A5568] text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/brands" className="btn-teal inline-flex items-center gap-2 text-sm reveal">
                                استكشف علاماتنا
                                <ArrowLeft size={16} />
                            </Link>
                        </div>
                        <div className="reveal-right">
                            <div className="brand-card-shefzar card p-8 text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3EC] text-[#E8621A] text-xs font-bold mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] animate-pulse" />
                                    علامة تجارية نشطة
                                </div>
                                <div className="flex items-center justify-center mb-5">
                                    <img src={SHEFZAR_LOGO} alt="شفزار Shefzar" className="max-h-40 max-w-[280px] w-auto object-contain drop-shadow-md" />
                                </div>
                                <p className="text-[#718096] text-sm leading-relaxed mb-6">
                                    علامة تجارية رائدة في قطاع الأغذية والمشروبات، تقدم تجربة طعام استثنائية مدفوعة بالشغف والجودة والابتكار.
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['F&B', 'مطاعم', 'جودة عالية', 'تجربة فريدة'].map((t, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-[#FFF3EC] text-[#E8621A] text-xs font-semibold border border-[#E8621A]/20">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ TESTIMONIALS ══ */}
            <section className="py-20 sm:py-28 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mx-auto mb-4 reveal">آراء شركائنا</div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332] reveal">
                            ماذا يقول <span className="text-gradient-teal">شركاؤنا</span>
                        </h2>
                        <div className="teal-divider reveal" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {HOME_TESTIMONIALS.map((t, i) => (
                            <div key={i} className="card p-6 reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />)}
                                </div>
                                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">"{t.text}"</p>
                                <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BFA5] to-[#00897B] flex items-center justify-center text-white font-bold text-sm">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-[#1A2332]">{t.name}</div>
                                        <div className="text-xs text-[#718096]">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
