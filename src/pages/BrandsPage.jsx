import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Flame, Cpu, Sparkles } from 'lucide-react';
import { RBC_LOGO, RBC_LOGO_WIDE, SHEFZAR_LOGO } from '../assets/images';

const brands = [
    {
        id: 'shefzar',
        name: 'شفزار',
        nameEn: 'Shefzar',
        tagline: 'حيث يلتقي الشغف بالنكهة',
        category: 'أغذية ومشروبات',
        status: 'نشط',
        statusColor: '#E8621A',
        statusBg: '#FFF3EC',
        color: '#E8621A',
        bg: '#FFF3EC',
        border: 'rgba(232,98,26,0.2)',
        icon: <Flame size={28} />,
        desc: 'علامة تجارية رائدة في قطاع الأغذية والمشروبات، تقدم تجربة طعام استثنائية تجمع بين الأصالة والحداثة. شفزار ليست مجرد مطعم — بل تجربة متكاملة تبدأ من اختيار المكونات وتنتهي بابتسامة العميل.',
        stats: [
            { label: 'فروع نشطة', val: '3+' },
            { label: 'عميل يومياً', val: '500+' },
            { label: 'تقييم العملاء', val: '4.8★' },
            { label: 'سنوات في السوق', val: '4+' },
        ],
        features: [
            'قائمة طعام متنوعة ومبتكرة',
            'مكونات طازجة عالية الجودة',
            'تجربة عميل استثنائية',
            'نظام طلب رقمي متكامل',
            'برنامج ولاء للعملاء',
            'توصيل سريع وموثوق',
        ],
        tags: ['F&B', 'مطاعم', 'توصيل', 'جودة عالية'],
    },
    {
        id: 'digital',
        name: 'حلول رقمية',
        nameEn: 'Digital Solutions',
        tagline: 'تقنية تُحوّل الأعمال',
        category: 'حلول رقمية',
        status: 'قريباً',
        statusColor: '#7C3AED',
        statusBg: '#F5F3FF',
        color: '#7C3AED',
        bg: '#F5F3FF',
        border: 'rgba(124,58,237,0.2)',
        icon: <Cpu size={28} />,
        desc: 'منصة رقمية ذكية تجمع بين الذكاء الاصطناعي وأتمتة العمليات لتحويل طريقة عمل الشركات. نبني حلولاً مخصصة تتكيف مع احتياجات كل عمل وتنمو معه.',
        stats: [
            { label: 'عميل مستهدف', val: '50+' },
            { label: 'عملية مؤتمتة', val: '200+' },
            { label: 'توفير في الوقت', val: '60%' },
            { label: 'دقة البيانات', val: '99%' },
        ],
        features: [
            'أتمتة العمليات التشغيلية',
            'لوحات تحكم تحليلية',
            'تكامل مع الأنظمة الحالية',
            'ذكاء اصطناعي مدمج',
            'تقارير فورية ودقيقة',
            'دعم فني على مدار الساعة',
        ],
        tags: ['تقنية', 'أتمتة', 'ذكاء اصطناعي', 'SaaS'],
    },
    {
        id: 'fnb2',
        name: 'علامة F&B جديدة',
        nameEn: 'New F&B Brand',
        tagline: 'مفهوم جديد يُعيد تعريف التجربة',
        category: 'أغذية ومشروبات',
        status: 'قيد التطوير',
        statusColor: '#F59E0B',
        statusBg: '#FFFBEB',
        color: '#F59E0B',
        bg: '#FFFBEB',
        border: 'rgba(245,158,11,0.2)',
        icon: <Sparkles size={28} />,
        desc: 'مفهوم تجاري جديد في قطاع F&B يجمع بين الأصالة العربية والتصميم العصري. نعمل على بناء تجربة فريدة من نوعها ستغير توقعات العملاء في هذا القطاع.',
        stats: [
            { label: 'مرحلة التطوير', val: '70%' },
            { label: 'فروع مخططة', val: '5+' },
            { label: 'استثمار مخصص', val: 'ضخم' },
            { label: 'موعد الإطلاق', val: '2026' },
        ],
        features: [
            'مفهوم تجاري فريد',
            'تصميم داخلي مميز',
            'قائمة مبتكرة',
            'تجربة رقمية متكاملة',
            'نموذج امتياز تجاري',
            'استدامة بيئية',
        ],
        tags: ['F&B', 'مفهوم جديد', 'ابتكار', 'امتياز'],
    },
];

export default function BrandsPage() {
    const [active, setActive] = useState(null);

    return (
        <div className="pt-20">
            <Helmet>
                <title>علاماتنا التجارية | RBC Solutions</title>
                <meta name="description" content="محفظة متنوعة من العلامات التجارية الرائدة والواعدة في قطاع الأغذية والمشروبات والحلول الرقمية — شفزار وغيرها." />
            </Helmet>
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#FFF8F5] via-white to-[#F0FDFB] overflow-hidden">
                <div className="hero-blob w-[350px] h-[350px] bg-[#E8621A] top-[-80px] right-[-80px]" />
                <div className="hero-blob w-[300px] h-[300px] bg-[#00BFA5] bottom-[-60px] left-[-60px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mx-auto mb-5 reveal">محفظتنا التجارية</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 reveal">
                        علاماتنا <span className="text-gradient-teal">التجارية</span>
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed reveal">
                        محفظة متنوعة من العلامات التجارية الرائدة والواعدة. كل علامة تحمل هوية مستقلة، رؤية واضحة، وتشغيلاً احترافياً متكاملاً.
                    </p>
                </div>
            </section>

            {/* ── Brands ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {brands.map((brand, i) => (
                        <div
                            key={brand.id}
                            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
                        >
                            {/* Info */}
                            <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                                <div className="reveal">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-bold"
                                            style={{ background: brand.statusBg, color: brand.statusColor }}
                                        >
                                            ● {brand.status}
                                        </span>
                                        <span className="text-[#718096] text-xs">{brand.category}</span>
                                    </div>

                                    <div className="flex items-center gap-4 mb-3">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                            style={{ background: brand.bg, color: brand.color }}
                                        >
                                            {brand.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332]">{brand.name}</h2>
                                            <div className="text-sm font-medium tracking-widest" style={{ color: brand.color }}>{brand.nameEn}</div>
                                        </div>
                                    </div>

                                    <p className="text-[#718096] text-sm italic mb-4" style={{ color: brand.color }}>"{brand.tagline}"</p>
                                    <p className="text-[#4A5568] leading-relaxed mb-6">{brand.desc}</p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {brand.features.map((f, j) => (
                                            <div key={j} className="flex items-center gap-2 text-sm text-[#4A5568]">
                                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: brand.color }} />
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {brand.tags.map((t, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 rounded-full text-xs font-semibold border"
                                                style={{ background: brand.bg, color: brand.color, borderColor: brand.border }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats card */}
                            <div className={`reveal-${i % 2 !== 0 ? 'left' : 'right'}`}>
                                <div
                                    className="rounded-3xl p-8 border"
                                    style={{ background: brand.bg, borderColor: brand.border }}
                                >
                                    {/* Brand logo display */}
                                    {brand.id === 'shefzar' && (
                                        <div className="text-center mb-6 pb-6 border-b" style={{ borderColor: brand.border }}>
                                            <img
                                                src={SHEFZAR_LOGO}
                                                alt="شفزار Shefzar"
                                                className="max-h-36 max-w-[240px] w-auto object-contain mx-auto drop-shadow-md"
                                            />
                                        </div>
                                    )}

                                    {/* Stats grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {brand.stats.map((s, j) => (
                                            <div key={j} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                                                <div className="text-2xl font-black mb-1" style={{ color: brand.color }}>{s.val}</div>
                                                <div className="text-xs text-[#718096]">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {brand.id !== 'shefzar' && (
                                        <div className="mt-6 text-center">
                                            <div
                                                className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto overflow-hidden bg-white shadow-sm"
                                            >
                                                <img src={RBC_LOGO} alt="RBC Solutions" className="w-full h-full object-contain p-2" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Partnership CTA ── */}
            <section className="py-16 bg-[#F7F9FC]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="section-label mx-auto mb-4 reveal">انضم إلينا</div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4 reveal">
                        هل لديك فكرة علامة تجارية؟
                    </h2>
                    <p className="text-[#718096] mb-8 reveal">
                        نحن دائماً نبحث عن مفاهيم تجارية مبتكرة لإضافتها لمحفظتنا. إذا كان لديك فكرة واعدة، تحدث معنا.
                    </p>
                    <Link to="/contact" className="btn-teal inline-flex items-center gap-2 reveal">
                        تحدث معنا عن فكرتك
                        <ArrowLeft size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
