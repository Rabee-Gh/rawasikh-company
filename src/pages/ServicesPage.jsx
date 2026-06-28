import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { SERVICES, HOW_WE_WORK, SERVICES_PAGE_META, SERVICES_CTA } from '../data/services.data';

export default function ServicesPage() {
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
                                className="card p-7 flex flex-col reveal"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                                    style={{ background: s.bg, color: s.color }}
                                >
                                    {s.icon}
                                </div>

                                <div className="text-xs font-semibold mb-1 uppercase tracking-widest" style={{ color: s.color }}>
                                    {s.subtitle}
                                </div>
                                <h3 className="text-xl font-black text-[#1A2332] mb-3">{s.title}</h3>
                                <p className="text-[#718096] text-sm sm:text-base leading-relaxed mb-5 flex-1">{s.desc}</p>

                                {/* Process steps */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {s.process.map((step, j) => (
                                        <span
                                            key={j}
                                            className="text-xs px-2.5 py-1 rounded-full font-semibold"
                                            style={{ background: s.bg, color: s.color }}
                                        >
                                            {step}
                                        </span>
                                    ))}
                                </div>

                                {/* Link to detail page */}
                                <Link
                                    to={`/services/${s.slug}`}
                                    className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5"
                                    style={{
                                        background: `linear-gradient(135deg, ${s.color}, ${s.color}CC)`,
                                        color: '#fff',
                                        boxShadow: `0 4px 16px ${s.color}33`,
                                    }}
                                >
                                    عرض التفاصيل
                                    <ArrowLeft size={15} />
                                </Link>
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
                                <div className="w-12 h-12 rounded-xl bg-[#E0F7F4] flex items-center justify-center text-[#00BFA5] mx-auto mb-3">
                                    {step.icon}
                                </div>
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
