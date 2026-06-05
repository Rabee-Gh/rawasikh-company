import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_REASONS, FAQS, MAP_EMBED_URL, MAP_ADDRESS_DESC, CONTACT_PAGE_META, RESPONSE_TIME_NOTE } from '../data/contact.data';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', reason: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
    };

    return (
        <div className="pt-20">
            <Helmet>
                <title>{CONTACT_PAGE_META.title}</title>
                <meta name="description" content={CONTACT_PAGE_META.description} />
                <link rel="canonical" href="https://rawasikhbusiness.com/contact" />
                <meta property="og:url" content="https://rawasikhbusiness.com/contact" />
                <meta property="og:title" content={CONTACT_PAGE_META.title} />
                <meta property="og:description" content={CONTACT_PAGE_META.description} />
                <meta property="og:image" content="https://rawasikhbusiness.com/logo.jpg" />
            </Helmet>
            {/* ── Hero ── */}
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#F0FDFB] to-white overflow-hidden">
                <div className="hero-blob w-[350px] h-[350px] bg-[#00BFA5] top-[-80px] left-[-80px]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="section-label mx-auto mb-5 reveal">{CONTACT_PAGE_META.heroLabel}</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 reveal">
                        {CONTACT_PAGE_META.heroHeading.split(' ')[0]}{' '}
                        <span className="text-gradient-teal">{CONTACT_PAGE_META.heroHeading.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <div className="teal-divider reveal" />
                    <p className="text-[#718096] text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed reveal">
                        {CONTACT_PAGE_META.heroDesc}
                    </p>
                </div>
            </section>

            {/* ── Reasons ── */}
            <section className="py-12 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {CONTACT_REASONS.map((r, i) => (
                            <div
                                key={i}
                                className="card p-5 text-center cursor-pointer reveal"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                                onClick={() => setForm({ ...form, reason: r.title })}
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#E0F7F4] flex items-center justify-center text-[#00BFA5] mx-auto mb-3">{r.icon}</div>
                                <div className="font-bold text-sm text-[#1A2332] mb-1">{r.title}</div>
                                <div className="text-xs text-[#718096]">{r.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Main Contact ── */}
            <section className="py-16 sm:py-24 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                        {/* Info — 2 cols */}
                        <div className="lg:col-span-2 reveal-left">
                            <h2 className="text-2xl font-black text-[#1A2332] mb-6">معلومات التواصل</h2>

                            <div className="space-y-5 mb-8">
                                {[
                                    { icon: <Mail size={18} />, label: 'البريد الإلكتروني', val: import.meta.env.VITE_EMAIL, color: '#00BFA5' },
                                    { icon: <Phone size={18} />, label: 'الهاتف', val: import.meta.env.VITE_PHONE, color: '#00BFA5' },
                                    { icon: <MapPin size={18} />, label: 'العنوان', val: import.meta.env.VITE_ADDRESS + '، بالقرب من طريق الأمير محمد بن سلمان', color: '#00BFA5' },
                                    { icon: <Clock size={18} />, label: 'أوقات العمل', val: import.meta.env.VITE_WORK_HOURS + ' | الجمعة – السبت: مغلق', color: '#00BFA5' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-[#E0F7F4] flex items-center justify-center flex-shrink-0" style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#718096] mb-0.5">{item.label}</div>
                                            <div className="font-semibold text-base text-[#1A2332]">{item.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social */}
                            {/* <div className="mb-8">
                                <p className="text-xs text-[#718096] mb-3 font-semibold uppercase tracking-wider">تابعنا على</p>
                                <div className="flex gap-3">
                                    {[
                                        { label: 'LinkedIn', short: 'in', color: '#0A66C2' },
                                        { label: 'X (Twitter)', short: 'X', color: '#000' },
                                        { label: 'Instagram', short: '📸', color: '#E1306C' },
                                    ].map((s, i) => (
                                        <button
                                            key={i}
                                            className="w-10 h-10 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-center text-sm font-bold hover:border-[#00BFA5] hover:text-[#00BFA5] transition-all duration-200 text-[#4A5568]"
                                        >
                                            {s.short}
                                        </button>
                                    ))}
                                </div>
                            </div> */}

                            {/* Response time */}
                            <div className="bg-[#E0F7F4] rounded-2xl p-5 border border-[#00BFA5]/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
                                    <span className="text-sm font-bold text-[#00897B]">وقت الاستجابة</span>
                                </div>
                                <p className="text-sm text-[#4A5568]">نرد على جميع الاستفسارات خلال <strong>24 ساعة</strong> في أيام العمل.</p>
                            </div>
                        </div>

                        {/* Form — 3 cols */}
                        <div className="lg:col-span-3 reveal-right">
                            {submitted ? (
                                <div className="bg-white rounded-3xl shadow-card p-10 text-center border border-[#E2E8F0]">
                                    <div className="w-20 h-20 bg-[#E0F7F4] rounded-full flex items-center justify-center mx-auto mb-5">
                                        <CheckCircle size={36} className="text-[#00BFA5]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#1A2332] mb-3">تم الإرسال بنجاح!</h3>
                                    <p className="text-[#718096] mb-6">شكراً لتواصلك معنا. سيتواصل معك فريقنا خلال 24 ساعة.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-outline text-sm"
                                    >
                                        إرسال رسالة أخرى
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card p-7 sm:p-9 border border-[#E2E8F0]">
                                    <h3 className="text-xl font-black text-[#1A2332] mb-6">أرسل لنا رسالة</h3>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="text-sm font-semibold text-[#4A5568] mb-1.5 block">الاسم الكامل *</label>
                                            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="محمد أحمد" className="form-input" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold text-[#4A5568] mb-1.5 block">الشركة / المؤسسة</label>
                                            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="اسم الشركة" className="form-input" />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="text-sm font-semibold text-[#4A5568] mb-1.5 block">البريد الإلكتروني *</label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@example.com" className="form-input" dir="ltr" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold text-[#4A5568] mb-1.5 block">رقم الهاتف</label>
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+966 5X XXX XXXX" className="form-input" dir="ltr" />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-sm font-semibold text-[#4A5568] mb-1.5 block">سبب التواصل</label>
                                        <select name="reason" value={form.reason} onChange={handleChange} className="form-input">
                                            <option value="">اختر سبب التواصل</option>
                                            {CONTACT_REASONS.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                                            <option value="استفسار عام">استفسار عام</option>
                                        </select>
                                    </div>

                                    <div className="mb-6">
                                        <label className="text-sm font-semibold text-[#4A5568] mb-1.5 block">رسالتك *</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="أخبرنا عن استفسارك أو فرصة التعاون بالتفصيل..."
                                            className="form-input resize-none"
                                        />
                                    </div>

                                    <button type="submit" disabled={loading} className="btn-teal w-full flex items-center justify-center gap-2 disabled:opacity-70">
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                جاري الإرسال...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                إرسال الرسالة
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Map ── */}
            <section className="py-16 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="section-label mx-auto mb-4 reveal">موقعنا</div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] reveal">
                            زورنا في <span className="text-gradient-teal">مقرنا</span>
                        </h2>
                        <div className="teal-divider reveal" />
                        <p className="text-[#718096] text-sm mt-4 reveal">{MAP_ADDRESS_DESC}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg h-80 reveal border border-[#E2E8F0]">
                        <iframe
                            src={MAP_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="موقع شركة رواسخ الأعمال"
                        />
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="section-label mx-auto mb-4 reveal">الأسئلة الشائعة</div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2332] reveal">
                            أسئلة <span className="text-gradient-teal">متكررة</span>
                        </h2>
                        <div className="teal-divider reveal" />
                    </div>

                    <div className="space-y-3">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="card overflow-hidden reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                                <button
                                    className="w-full flex items-center justify-between p-5 text-right"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span className="font-bold text-[#1A2332] text-sm">{faq.q}</span>
                                    <span className={`text-[#00BFA5] font-bold text-lg transition-transform duration-300 flex-shrink-0 mr-3 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                                    <p className="px-5 pb-5 text-[#718096] text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
