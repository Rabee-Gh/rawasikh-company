import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, ArrowLeft, CheckCircle } from 'lucide-react';
import { RBC_LOGO } from '../assets/images';
import { VALUES, TEAM, MILESTONES, MISSION, VISION, ABOUT_PAGE_META, ABOUT_CTA } from '../data/about.data';

export default function AboutPage() {
    return (
        <div className="pt-20">
            <Helmet>
                <title>{ABOUT_PAGE_META.title}</title>
                <meta name="description" content={ABOUT_PAGE_META.description} />
                <link rel="canonical" href="https://rawasikhbusiness.com/about" />
                <meta property="og:url" content="https://rawasikhbusiness.com/about" />
                <meta property="og:title" content={ABOUT_PAGE_META.title} />
                <meta property="og:description" content={ABOUT_PAGE_META.description} />
                <meta property="og:image" content="https://rawasikhbusiness.com/logo.jpg" />
            </Helmet>
            {/* ── Page Hero ── */}
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#F0FDFB] to-white overflow-hidden">
                <div className="hero-blob w-[400px] h-[400px] bg-[#00BFA5] top-[-100px] left-[-100px]" />
                <div className="absolute top-1/3 right-[10%] w-20 h-20 rounded-3xl bg-[#00BFA5]/10 border border-[#00BFA5]/20 animate-float rotate-12" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* RBC Logo wide */}
                    <div className="flex justify-center mb-8 reveal">
                        <img
                            src={RBC_LOGO}
                            alt="RBC Solutions"
                            className="max-h-20 max-w-[320px] w-auto object-contain scale-150 rounded-full"
                        />
                    </div>
                    <div className="section-label mx-auto mb-5 reveal">من نحن</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 reveal">
                        المظلة <span className="text-gradient-teal">الاستراتيجية</span>
                        <br />لنمو وتكامل الأعمال
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed reveal">
                        {ABOUT_PAGE_META.heroIntro}
                    </p>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        <div className="card p-8 reveal-left">
                            <div className="w-14 h-14 bg-[#E0F7F4] rounded-2xl flex items-center justify-center mb-5">
                                <Target size={26} className="text-[#00BFA5]" />
                            </div>
                            <h3 className="text-2xl font-black text-[#1A2332] mb-4">{MISSION.title}</h3>
                            <p className="text-[#718096] leading-relaxed mb-5">{MISSION.text}</p>
                            <div className="space-y-2">
                                {MISSION.bullets.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-[#4A5568]">
                                        <CheckCircle size={16} className="text-[#00BFA5] flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card p-8 reveal-right">
                            <div className="w-14 h-14 bg-[#FFF3EC] rounded-2xl flex items-center justify-center mb-5">
                                <Eye size={26} className="text-[#E8621A]" />
                            </div>
                            <h3 className="text-2xl font-black text-[#1A2332] mb-4">{VISION.title}</h3>
                            <p className="text-[#718096] leading-relaxed mb-5">{VISION.text}</p>
                            <div className="space-y-2">
                                {VISION.bullets.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-[#4A5568]">
                                        <CheckCircle size={16} className="text-[#E8621A] flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="py-20 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mx-auto mb-4 reveal">قيمنا</div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332] reveal">
                            ما يحرّكنا كل يوم
                        </h2>
                        <div className="teal-divider reveal" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {VALUES.map((v, i) => (
                            <div key={i} className="card p-6 text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: v.bg, color: v.color }}>
                                    {v.icon}
                                </div>
                                <h4 className="font-black text-[#1A2332] mb-3">{v.title}</h4>
                                <p className="text-[#718096] text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mx-auto mb-4 reveal">مسيرتنا</div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332] reveal">
                            رحلة <span className="text-gradient-teal">النمو والتطور</span>
                        </h2>
                        <div className="teal-divider reveal" />
                    </div>

                    {/* Mobile: single column */}
                    <div className="flex flex-col gap-6 sm:hidden">
                        {MILESTONES.map((m, i) => (
                            <div key={i} className="flex gap-4 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-[#E0F7F4] border-2 border-[#00BFA5] flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#00BFA5]" />
                                    </div>
                                    {i < MILESTONES.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-gradient-to-b from-[#00BFA5]/50 to-[#00BFA5]/10 mt-1" />
                                    )}
                                </div>
                                <div className="pb-6 flex-1 min-w-0">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#E0F7F4] text-[#00897B] text-xs font-bold mb-2">{m.year}</span>
                                    <div className="card p-4">
                                        <h4 className="font-black text-[#1A2332] mb-1 text-sm">{m.title}</h4>
                                        <p className="text-[#718096] text-xs leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: alternating left/right */}
                    <div className="hidden sm:flex flex-col gap-8 relative">
                        {/* Center line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#00BFA5] via-[#00BFA5]/40 to-transparent pointer-events-none" />

                        {MILESTONES.map((m, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <div key={i} className="grid grid-cols-[1fr_40px_1fr] items-center gap-0 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                    {/* Left cell */}
                                    <div className="pr-8">
                                        {isLeft ? (
                                            <div className="card p-5">
                                                <span className="inline-block px-3 py-1 rounded-full bg-[#E0F7F4] text-[#00897B] text-xs font-bold mb-2">{m.year}</span>
                                                <h4 className="font-black text-[#1A2332] mb-2">{m.title}</h4>
                                                <p className="text-[#718096] text-sm leading-relaxed">{m.desc}</p>
                                            </div>
                                        ) : (
                                            <p className="text-left text-2xl font-black text-[#00BFA5]/25 ">{m.year}</p>
                                        )}
                                    </div>

                                    {/* Center dot */}
                                    <div className="flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-[#00BFA5] flex-shrink-0" style={{ boxShadow: '0 0 0 4px rgba(0,191,165,0.2)' }} />
                                    </div>

                                    {/* Right cell */}
                                    <div className="pl-8">
                                        {!isLeft ? (
                                            <div className="card p-5">
                                                <span className="inline-block px-3 py-1 rounded-full bg-[#E0F7F4] text-[#00897B] text-xs font-bold mb-2">{m.year}</span>
                                                <h4 className="font-black text-[#1A2332] mb-2">{m.title}</h4>
                                                <p className="text-[#718096] text-sm leading-relaxed">{m.desc}</p>
                                            </div>
                                        ) : (
                                            <p className="text-2xl font-black text-[#00BFA5]/25">{m.year}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Team ── */}
            <section className="py-20 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="section-label mx-auto mb-4 reveal">فريق القيادة</div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1A2332] reveal">
                            العقول التي تقود <span className="text-gradient-teal">النجاح</span>
                        </h2>
                        <div className="teal-divider reveal" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {TEAM.map((member, i) => (
                            <div key={i} className="card p-6 text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00BFA5] to-[#00897B] flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
                                    {member.initial}
                                </div>
                                <h4 className="font-black text-[#1A2332] mb-1">{member.name}</h4>
                                <div className="text-[#00BFA5] text-sm font-semibold mb-2">{member.role}</div>
                                <div className="text-xs text-[#718096] mb-3">{member.spec}</div>
                                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E0F7F4] text-[#00897B] text-xs font-semibold">
                                    {member.exp}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4 reveal">
                        {ABOUT_CTA.heading}
                    </h2>
                    <p className="text-[#718096] mb-8 reveal">{ABOUT_CTA.desc}</p>
                    <Link to={ABOUT_CTA.btnPath} className="btn-teal inline-flex items-center gap-2 reveal">
                        {ABOUT_CTA.btnLabel}
                        <ArrowLeft size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
