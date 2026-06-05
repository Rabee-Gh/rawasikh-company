import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { BRANDS, BRANDS_PAGE_META, BRANDS_CTA } from '../data/brands.data';

export default function BrandsPage() {
    const [active, setActive] = useState(null);

    return (
        <div className="pt-20">
            <Helmet>
                <title>{BRANDS_PAGE_META.title}</title>
                <meta name="description" content={BRANDS_PAGE_META.description} />
                <link rel="canonical" href="https://rawasikhbusiness.com/brands" />
                <meta property="og:url" content="https://rawasikhbusiness.com/brands" />
                <meta property="og:title" content={BRANDS_PAGE_META.title} />
                <meta property="og:description" content={BRANDS_PAGE_META.description} />
                <meta property="og:image" content="https://rawasikhbusiness.com/logo.jpg" />
            </Helmet>
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#FFF8F5] via-white to-[#F0FDFB] overflow-hidden">
                <div className="hero-blob w-[350px] h-[350px] bg-[#E8621A] top-[-80px] right-[-80px]" />
                <div className="hero-blob w-[300px] h-[300px] bg-[#00BFA5] bottom-[-60px] left-[-60px]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mx-auto mb-5 reveal">{BRANDS_PAGE_META.heroLabel}</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 reveal">
                        {BRANDS_PAGE_META.heroHeading.split(' ')[0]}{' '}
                        <span className="text-gradient-teal">{BRANDS_PAGE_META.heroHeading.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed reveal">
                        {BRANDS_PAGE_META.heroDesc}
                    </p>
                </div>
            </section>

            {/* ── Brands ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {BRANDS.map((brand, i) => (
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
                                    className="rounded-3xl border flex items-center justify-center overflow-hidden"
                                    style={{ background: brand.bg, borderColor: brand.border, minHeight: '360px' }}
                                >
                                    {brand.logo && (
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="w-full h-full object-contain p-8 drop-shadow-md"
                                            style={{ maxHeight: '360px' }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 bg-[#F7F9FC]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="section-label mx-auto mb-4 reveal">{BRANDS_CTA.label}</div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4 reveal">
                        {BRANDS_CTA.heading}
                    </h2>
                    <p className="text-[#718096] mb-8 reveal">{BRANDS_CTA.desc}</p>
                    <Link to={BRANDS_CTA.btnPath} className="btn-teal inline-flex items-center gap-2 reveal">
                        {BRANDS_CTA.btnLabel}
                        <ArrowLeft size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
