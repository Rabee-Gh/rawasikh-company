import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, Zap, Globe, Award, ChevronDown, Star, Lightbulb, Settings, Rocket } from 'lucide-react';
import { RBC_LOGO_WIDE, SHEFZAR_LOGO } from '../assets/images';

/* ── CountUp ── */
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

const stats = [
    { icon: <Award size={22} />, value: 5, suffix: '+', label: 'علامات تجارية' },
    { icon: <Globe size={22} />, value: 3, suffix: '+', label: 'قطاعات مستهدفة' },
    { icon: <TrendingUp size={22} />, value: 100, suffix: '%', label: 'أتمتة شاملة' },
    { icon: <Zap size={22} />, value: 10, suffix: '+', label: 'سنوات خبرة' },
];

const features = [
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

const testimonials = [
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

export default function HomePage() {
    const heroRef = useRef(null);

    useEffect(() => {
        // Stagger hero elements
        const els = heroRef.current?.querySelectorAll('[data-hero]');
        els?.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 + i * 150);
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>RBC Solutions | الرئيسية — حلول الأعمال المتكاملة</title>
                <meta name="description" content="شركة تشغيلية تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية." />
            </Helmet>
            {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F0FDFB] to-[#E0F7F4]">
                {/* Decorative blobs */}
                <div className="hero-blob w-[500px] h-[500px] bg-[#00BFA5] top-[-100px] right-[-100px]" />
                <div className="hero-blob w-[400px] h-[400px] bg-[#00897B] bottom-[-80px] left-[-80px]" />

                {/* Animated grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(#00BFA5 1px, transparent 1px), linear-gradient(90deg, #00BFA5 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Floating shapes */}
                <div className="absolute top-1/4 right-[8%] w-16 h-16 rounded-2xl bg-[#00BFA5]/15 border border-[#00BFA5]/30 animate-float rotate-12" />
                <div className="absolute bottom-1/3 left-[6%] w-10 h-10 rounded-xl bg-[#E8621A]/15 border border-[#E8621A]/30 animate-float-slow -rotate-6" />
                <div className="absolute top-1/2 left-[15%] w-6 h-6 rounded-full bg-[#00BFA5]/30 animate-bounce-soft" />

                <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left text */}
                        <div>
                            {/* Badge */}
                            <div
                                data-hero
                                className="section-label mb-6"
                                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
                            >
                                <span className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
                                شركة تشغيلية متكاملة
                            </div>

                            <h1
                                data-hero
                                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 text-[#1A2332]"
                                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
                            >
                                نبتكر{' '}
                                <span className="text-gradient-teal">المفاهيم</span>
                                <br />
                                ونقود{' '}
                                <span className="text-gradient-teal">النمو</span>
                            </h1>

                            <p
                                data-hero
                                className="text-[#718096] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
                            >
                                شركة تشغيلية تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية — من خلال الأتمتة الشاملة والتشغيل الاحترافي المستدام.
                            </p>

                            <div
                                data-hero
                                className="flex flex-col sm:flex-row gap-4"
                                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
                            >
                                <Link to="/brands" className="btn-teal text-center text-sm">
                                    اكتشف علاماتنا التجارية
                                </Link>
                                <Link to="/about" className="btn-outline text-center text-sm">
                                    تعرف علينا
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div
                                data-hero
                                className="flex items-center gap-4 mt-8 pt-8 border-t border-[#E2E8F0]"
                                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
                            >
                                <div className="flex -space-x-2 space-x-reverse">
                                    {['#00BFA5', '#00897B', '#E8621A', '#7C3AED'].map((c, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-0.5 mb-0.5">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                                    </div>
                                    <p className="text-xs text-[#718096]">موثوق من قِبل عشرات الشركاء</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div
                            data-hero
                            className="relative"
                            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
                        >
                            {/* Main card */}
                            <div className="relative bg-white rounded-3xl shadow-card-hover p-8 border border-[#E2E8F0] animate-float">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-xs text-[#718096] mb-1">لوحة التحكم التشغيلية</div>
                                        <div className="font-black text-[#1A2332]">RBC Dashboard</div>
                                    </div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#00BFA5] to-[#00897B] rounded-xl flex items-center justify-center">
                                        <Zap size={18} color="white" />
                                    </div>
                                </div>

                                {/* Stats mini */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {[
                                        { label: 'العلامات النشطة', val: '5', color: '#00BFA5' },
                                        { label: 'نسبة الأتمتة', val: '94%', color: '#E8621A' },
                                        { label: 'معدل النمو', val: '+32%', color: '#7C3AED' },
                                        { label: 'رضا العملاء', val: '4.9★', color: '#F59E0B' },
                                    ].map((s, i) => (
                                        <div key={i} className="bg-[#F7F9FC] rounded-xl p-3">
                                            <div className="font-black text-lg" style={{ color: s.color }}>{s.val}</div>
                                            <div className="text-xs text-[#718096]">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Progress bars */}
                                <div className="space-y-3">
                                    {[
                                        { label: 'F&B Operations', pct: 88 },
                                        { label: 'Digital Solutions', pct: 72 },
                                        { label: 'Market Expansion', pct: 60 },
                                    ].map((b, i) => (
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

                            {/* Floating mini cards */}
                            {/* <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-3 border border-[#E2E8F0] animate-float-slow">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#E0F7F4] rounded-lg flex items-center justify-center text-sm">🔥</div>
                                    <div>
                                        <div className="text-xs font-bold text-[#1A2332]">شفزار</div>
                                        <div className="text-[10px] text-[#00BFA5]">نشط</div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-3 border border-[#E2E8F0] animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#FFF3EC] rounded-lg flex items-center justify-center text-[#E8621A]">
                                        <TrendingUp size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-[#1A2332]">نمو مستمر</div>
                                        <div className="text-[10px] text-[#E8621A]">+32% هذا الربع</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-soft">
                    <span className="text-[#A0AEC0] text-xs">اسحب للأسفل</span>
                    <ChevronDown size={20} className="text-[#00BFA5]" />
                </div>
            </section>

            {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
            <section className="py-16 bg-white border-y border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((s, i) => (
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

            {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
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
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="card p-8 text-center reveal"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                                    style={{ background: f.bg, color: f.color }}
                                >
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

            {/* ══════════════════════════════════════════
          BRANDS PREVIEW
      ══════════════════════════════════════════ */}
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

                        {/* Shefzar preview card */}
                        <div className="reveal-right">
                            <div className="brand-card-shefzar card p-8 text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3EC] text-[#E8621A] text-xs font-bold mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] animate-pulse" />
                                    علامة تجارية نشطة
                                </div>
                                {/* Real Shefzar logo */}
                                <div className="flex items-center justify-center mb-5">
                                    <img
                                        src={SHEFZAR_LOGO}
                                        alt="شفزار Shefzar"
                                        className="max-h-40 max-w-[280px] w-auto object-contain drop-shadow-md"
                                    />
                                </div>
                                <p className="text-[#718096] text-sm leading-relaxed mb-6">
                                    علامة تجارية رائدة في قطاع الأغذية والمشروبات، تقدم تجربة طعام استثنائية مدفوعة بالشغف والجودة والابتكار.
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['F&B', 'مطاعم', 'جودة عالية', 'تجربة فريدة'].map((t, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-[#FFF3EC] text-[#E8621A] text-xs font-semibold border border-[#E8621A]/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
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
                        {testimonials.map((t, i) => (
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
