import { Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { SERVICES, SERVICES_CTA } from '../data/services.data';

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = SERVICES.find(s => s.slug === slug);

    // الخدمة التالية والسابقة للتنقل
    const idx = SERVICES.findIndex(s => s.slug === slug);
    const prev = idx > 0 ? SERVICES[idx - 1] : null;
    const next = idx < SERVICES.length - 1 ? SERVICES[idx + 1] : null;

    if (!service) {
        navigate('/services');
        return null;
    }

    return (
        <div className="pt-20">
            <Helmet>
                <title>{service.title} | RBC Solutions</title>
                <meta name="description" content={service.desc} />
                <link rel="canonical" href={`https://rawasikhbusiness.com/services/${service.slug}`} />
                <meta property="og:title" content={`${service.title} | RBC Solutions`} />
                <meta property="og:description" content={service.desc} />
            </Helmet>

            {/* ── Hero ── */}
            <section
                className="relative py-20 sm:py-28 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${service.bg} 0%, #ffffff 100%)` }}
            >
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(${service.color} 1px, transparent 1px), linear-gradient(90deg, ${service.color} 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-8 text-sm text-[#718096]">
                        <Link to="/" className="hover:text-[#00BFA5] transition-colors">الرئيسية</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-[#00BFA5] transition-colors">خدماتنا</Link>
                        <span>/</span>
                        <span style={{ color: service.color }}>{service.title}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                        <div
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                            style={{ background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`, color: service.color, border: `2px solid ${service.color}33` }}
                        >
                            <div className="scale-125">{service.icon}</div>
                        </div>
                        <div>
                            <div className="text-xs sm:text-sm font-bold mb-1 tracking-widest uppercase" style={{ color: service.color }}>
                                {service.subtitle}
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A2332]">
                                {service.title}
                            </h1>
                        </div>
                    </div>

                    <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                        {service.desc}
                    </p>

                    {/* Process steps */}
                    <div className="flex flex-wrap gap-2">
                        {service.process.map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span
                                    className="px-4 py-1.5 rounded-full text-sm font-bold"
                                    style={{ background: `${service.color}18`, color: service.color, border: `1px solid ${service.color}33` }}
                                >
                                    {step}
                                </span>
                                {i < service.process.length - 1 && (
                                    <ArrowLeft size={14} className="text-[#CBD5E0]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What we offer ── */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
                            style={{ background: `${service.color}15`, color: service.color }}
                        >
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: service.color }} />
                            ما نقدمه في هذه الخدمة
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A2332] mb-3">
                            تفاصيل <span style={{
                                background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>الخدمة</span>
                        </h2>
                        <div className="w-14 h-1 rounded-full" style={{ background: service.color }} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {service.points.map((point, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                style={{ borderColor: `${service.color}22`, background: `${service.color}06` }}
                            >
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: `${service.color}18`, color: service.color }}
                                >
                                    <CheckCircle size={16} />
                                </div>
                                <p className="text-[#2D3748] text-sm sm:text-base leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section
                className="py-16 sm:py-20"
                style={{ background: `linear-gradient(135deg, ${service.bg}, #f7f9fc)` }}
            >
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}AA)` }}
                    >
                        <Phone size={24} color="white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4">
                        هل تحتاج هذه الخدمة؟
                    </h2>
                    <p className="text-[#718096] text-base mb-8 leading-relaxed">
                        تواصل معنا اليوم ونساعدك في تحديد الحل الأمثل لنشاطك التجاري.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 py-3.5 text-base text-white transition-all duration-300 hover:-translate-y-1"
                            style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`, boxShadow: `0 4px 20px ${service.color}44` }}
                        >
                            تواصل معنا الآن
                            <ArrowLeft size={16} />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 py-3.5 text-base border-2 transition-all duration-300 hover:-translate-y-1"
                            style={{ borderColor: service.color, color: service.color }}
                        >
                            كل الخدمات
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Prev / Next navigation ── */}
            <section className="py-12 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {prev ? (
                            <Link
                                to={`/services/${prev.slug}`}
                                className="flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#00BFA5] hover:shadow-md transition-all duration-300 group"
                            >
                                <ArrowRight size={20} className="text-[#A0AEC0] group-hover:text-[#00BFA5] transition-colors flex-shrink-0" />
                                <div>
                                    <div className="text-xs text-[#A0AEC0] mb-1">الخدمة السابقة</div>
                                    <div className="font-bold text-[#1A2332] text-sm sm:text-base">{prev.title}</div>
                                </div>
                            </Link>
                        ) : <div />}

                        {next ? (
                            <Link
                                to={`/services/${next.slug}`}
                                className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#00BFA5] hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="text-right">
                                    <div className="text-xs text-[#A0AEC0] mb-1">الخدمة التالية</div>
                                    <div className="font-bold text-[#1A2332] text-sm sm:text-base">{next.title}</div>
                                </div>
                                <ArrowLeft size={20} className="text-[#A0AEC0] group-hover:text-[#00BFA5] transition-colors flex-shrink-0" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>
        </div>
    );
}
