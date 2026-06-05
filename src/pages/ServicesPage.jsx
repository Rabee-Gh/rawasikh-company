import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { SERVICES, HOW_WE_WORK, SERVICES_PAGE_META, SERVICES_CTA } from '../data/services.data';

export default function ServicesPage() {
    const [expanded, setExpanded] = useState(null);

    return (
        <div className="pt-20">
            <Helmet>
                <title>{SERVICES_PAGE_META.title}</title>
                <meta name="description" content={SERVICES_PAGE_META.description} />
                <link rel="canonical" href="https://rawasikhbusiness.com/services" />
                <meta property="og:url" content="https://rawasikhbusiness.com/services" />
                <meta property="og:title" content={SERVICES_PAGE_META.title} />
                <meta property="og:description" content={SERVICES_PAGE_META.description} />
                <meta property="og:image" content="https://rawasikhbusiness.com/logo.jpg" />
            </Helmet>

            {/* ── Hero ── */}
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#F0FDFB] to-white overflow-hidden">
                <div className="hero-blob w-[400px] h-[400px] bg-[#00BFA5] top-[-100px] right-[-100px]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mx-auto mb-5 reveal">{SERVICES_PAGE_META.heroLabel}</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 reveal">
                        خدماتنا <span className="text-gradient-teal">المتكاملة</span>
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed reveal">
                        {SERVICES_PAGE_META.heroDesc}
                    </p>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((s, i) => (
                            <div
                                key={i}
                                className="card p-7 cursor-pointer reveal"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                                onClick={() => setExpanded(expanded === i ? null : i)}
                            >
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
                                <div className="flex gap-1 mb-4 flex-wrap">
                                    {s.process.map((step, j) => (
                                        <div key={j} className="flex items-center gap-1">
                                            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: s.bg, color: s.color }}>
                                                {step}
                                            </span>
                                            {j < s.process.length - 1 && <span className="text-[#CBD5E0] text-xs">←</span>}
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

                                <button className="mt-4 text-sm font-semibold flex items-center gap-1" style={{ color: s.color }}>
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
                        {HOW_WE_WORK.map((step, i) => (
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
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4 reveal">{SERVICES_CTA.heading}</h2>
                    <p className="text-[#718096] mb-8 reveal">{SERVICES_CTA.desc}</p>
                    <Link to={SERVICES_CTA.btnPath} className="btn-teal inline-flex items-center gap-2 reveal">
                        {SERVICES_CTA.btnLabel}
                        <ArrowLeft size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
