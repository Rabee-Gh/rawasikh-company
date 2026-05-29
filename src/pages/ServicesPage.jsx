import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Lightbulb, Cpu, BarChart3, Rocket, Handshake, Settings, MessageSquare, Search, PenLine } from 'lucide-react';

const services = [
    {
        icon: <Lightbulb size={28} />,
        title: 'ابتكار المفاهيم التجارية',
        subtitle: 'Brand Concept Innovation',
        desc: 'نصمم مفاهيم تجارية مبتكرة مدروسة بعمق، تجمع بين فهم السوق وتوقعات العملاء لضمان النجاح من اليوم الأول. نبدأ من الفكرة الخام وننتهي بعلامة تجارية جاهزة للإطلاق.',
        color: '#00BFA5',
        bg: '#E0F7F4',
        points: [
            'دراسة السوق والمنافسين بعمق',
            'تصميم هوية العلامة التجارية الكاملة',
            'بناء نموذج العمل التجاري (Business Model)',
            'تحديد الجمهور المستهدف وشخصياته',
            'وضع استراتيجية التسعير والتموضع',
            'تصميم تجربة العميل من البداية للنهاية',
        ],
        process: ['البحث والتحليل', 'الابتكار والتصميم', 'الاختبار والتحقق', 'الإطلاق'],
    },
    {
        icon: <Cpu size={28} />,
        title: 'الأتمتة الشاملة',
        subtitle: 'Intelligent Process Automation',
        desc: 'نحول كل عملية تشغيلية إلى منظومة رقمية ذكية تعمل بكفاءة قصوى. نربط الأنظمة والفرق والبيانات في منظومة متكاملة تقلل التدخل البشري في المهام المتكررة وتزيد الدقة.',
        color: '#7C3AED',
        bg: '#F5F3FF',
        points: [
            'تحليل وتصميم سير العمل (Workflow Design)',
            'تطبيق منصات إدارة المهام والأتمتة',
            'ربط الأنظمة الحالية (ERP, CRM, POS)',
            'بناء لوحات تحكم تحليلية مخصصة',
            'أتمتة التقارير والإشعارات',
            'مراقبة الأداء وتحسينه المستمر',
        ],
        process: ['التشخيص', 'التصميم', 'التطبيق', 'التحسين'],
    },
    {
        icon: <Settings size={28} />,
        title: 'التشغيل الاحترافي',
        subtitle: 'Professional Operations Management',
        desc: 'نتولى الإدارة التشغيلية الكاملة لعلاماتنا التجارية بمعايير عالمية. من سلسلة التوريد حتى تجربة العميل النهائية، نضمن الاتساق والجودة في كل نقطة تماس.',
        color: '#E8621A',
        bg: '#FFF3EC',
        points: [
            'إدارة سلسلة التوريد والمشتريات',
            'ضبط معايير الجودة والاتساق',
            'تدريب وتطوير الفرق التشغيلية',
            'إدارة المخزون والتكاليف',
            'مراقبة الأداء التشغيلي اليومي',
            'تطوير إجراءات التشغيل القياسية (SOPs)',
        ],
        process: ['التخطيط', 'التجهيز', 'التشغيل', 'المراقبة'],
    },
    {
        icon: <BarChart3 size={28} />,
        title: 'الحلول الرقمية الذكية',
        subtitle: 'Smart Digital Solutions',
        desc: 'نطور حلولاً رقمية مخصصة تدعم نمو العلامات التجارية وتمكّن اتخاذ قرارات مبنية على بيانات دقيقة. من تطبيقات الجوال إلى منصات الويب والأنظمة المتكاملة.',
        color: '#0EA5E9',
        bg: '#F0F9FF',
        points: [
            'تطوير تطبيقات الجوال (iOS & Android)',
            'بناء منصات الويب والتجارة الإلكترونية',
            'تكامل الأنظمة والـ APIs',
            'تحليل البيانات والذكاء الاصطناعي',
            'حلول الدفع الرقمي',
            'برامج الولاء والتسويق الرقمي',
        ],
        process: ['التحليل', 'التصميم', 'التطوير', 'الإطلاق'],
    },
    {
        icon: <Rocket size={28} />,
        title: 'النمو والتوسع',
        subtitle: 'Growth & Expansion Strategy',
        desc: 'نضع استراتيجيات توسع مدروسة تضمن نمواً مستداماً وانتشاراً جغرافياً محكوماً بالبيانات والكفاءة. من الفرع الأول إلى الشبكة الإقليمية.',
        color: '#10B981',
        bg: '#ECFDF5',
        points: [
            'دراسة الجدوى للتوسع الجغرافي',
            'تطوير نماذج الامتياز التجاري (Franchise)',
            'إدارة المحفظة الاستثمارية للعلامات',
            'استراتيجية دخول أسواق جديدة',
            'بناء شبكة الموردين والشركاء',
            'قياس وتحسين مؤشرات الأداء (KPIs)',
        ],
        process: ['التقييم', 'التخطيط', 'التنفيذ', 'القياس'],
    },
    {
        icon: <Handshake size={28} />,
        title: 'الشراكات الاستراتيجية',
        subtitle: 'Strategic Partnerships',
        desc: 'نبني شراكات استراتيجية مع الموردين والمستثمرين والشركاء التشغيليين لتعزيز قدراتنا وتسريع النمو. نؤمن بأن الشراكة الصحيحة تضاعف النتائج.',
        color: '#F59E0B',
        bg: '#FFFBEB',
        points: [
            'تحديد وتقييم الشركاء المحتملين',
            'هيكلة اتفاقيات الشراكة',
            'إدارة علاقات الموردين الاستراتيجيين',
            'جذب الاستثمارات وإدارة المستثمرين',
            'بناء التحالفات الإقليمية والدولية',
            'تطوير برامج الامتياز التجاري',
        ],
        process: ['التحديد', 'التقييم', 'التفاوض', 'الإدارة'],
    },
];

export default function ServicesPage() {
    const [expanded, setExpanded] = useState(null);

    return (
        <div className="pt-20">
            <Helmet>
                <title>خدماتنا | RBC Solutions</title>
                <meta name="description" content="منظومة شاملة من الخدمات: ابتكار المفاهيم التجارية، الأتمتة الشاملة، التشغيل الاحترافي، الحلول الرقمية، النمو والتوسع." />
            </Helmet>
            {/* ── Hero ── */}
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#F0FDFB] to-white overflow-hidden">
                <div className="hero-blob w-[400px] h-[400px] bg-[#00BFA5] top-[-100px] right-[-100px]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mx-auto mb-5 reveal">ما نقدمه</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 reveal">
                        خدماتنا <span className="text-gradient-teal">المتكاملة</span>
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed reveal">
                        منظومة شاملة من الخدمات تغطي كل مراحل بناء العلامة التجارية وتشغيلها ونموها — من الفكرة الأولى حتى التوسع الإقليمي.
                    </p>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className="card p-7 cursor-pointer reveal"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                                onClick={() => setExpanded(expanded === i ? null : i)}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300"
                                    style={{ background: s.bg, color: s.color, transform: expanded === i ? 'scale(1.1)' : 'scale(1)' }}
                                >
                                    {s.icon}
                                </div>

                                <div className="text-xs font-semibold mb-1" style={{ color: s.color }}>{s.subtitle}</div>
                                <h3 className="text-xl font-black text-[#1A2332] mb-3">{s.title}</h3>
                                <p className="text-[#718096] text-sm leading-relaxed mb-4">{s.desc}</p>

                                {/* Process steps */}
                                <div className="flex gap-1 mb-4">
                                    {s.process.map((step, j) => (
                                        <div key={j} className="flex items-center gap-1">
                                            <span
                                                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                                                style={{ background: s.bg, color: s.color }}
                                            >
                                                {step}
                                            </span>
                                            {j < s.process.length - 1 && (
                                                <span className="text-[#CBD5E0] text-xs">←</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Expandable points */}
                                <div className={`overflow-hidden transition-all duration-400 ${expanded === i ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                                        {s.points.map((p, j) => (
                                            <div key={j} className="flex items-start gap-2 text-sm text-[#4A5568]">
                                                <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: s.color }} />
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className="mt-4 text-sm font-semibold flex items-center gap-1 transition-colors"
                                    style={{ color: s.color }}
                                >
                                    {expanded === i ? 'إخفاء التفاصيل ↑' : 'عرض التفاصيل ↓'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How we work ── */}
            <section className="py-20 bg-[#F7F9FC]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mx-auto mb-4 reveal">منهجيتنا</div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332] reveal">
                            كيف <span className="text-gradient-teal">نعمل معك</span>
                        </h2>
                        <div className="teal-divider reveal" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { num: '01', title: 'الاستماع والفهم', desc: 'نبدأ بفهم عميق لاحتياجاتك وأهدافك وتحديات عملك الحالية.', icon: <MessageSquare size={24} /> },
                            { num: '02', title: 'التشخيص والتحليل', desc: 'نحلل وضعك الحالي ونحدد الفرص والتحديات بدقة متناهية.', icon: <Search size={24} /> },
                            { num: '03', title: 'التصميم والتخطيط', desc: 'نصمم حلاً مخصصاً لك مع خارطة طريق واضحة وقابلة للتنفيذ.', icon: <PenLine size={24} /> },
                            { num: '04', title: 'التنفيذ والمتابعة', desc: 'ننفذ الحل ونتابع النتائج ونحسّن باستمرار لضمان النجاح.', icon: <Rocket size={24} /> },
                        ].map((step, i) => (
                            <div key={i} className="card p-6 text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="w-12 h-12 rounded-xl bg-[#E0F7F4] flex items-center justify-center text-[#00BFA5] mx-auto mb-3">{step.icon}</div>
                                <div className="text-3xl font-black text-[#00BFA5]/30 mb-2">{step.num}</div>
                                <h4 className="font-black text-[#1A2332] mb-2">{step.title}</h4>
                                <p className="text-[#718096] text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4 reveal">
                        أي خدمة تحتاجها؟
                    </h2>
                    <p className="text-[#718096] mb-8 reveal">تحدث معنا وسنساعدك في تحديد الحل الأمثل لاحتياجاتك.</p>
                    <Link to="/contact" className="btn-teal inline-flex items-center gap-2 reveal">
                        احصل على استشارة مجانية
                        <ArrowLeft size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
