import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { RBC_LOGO } from '../assets/images';
import { FOOTER_LINKS, FOOTER_BRAND, FOOTER_CTA } from '../data/footer.data';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#1A2332] text-white">
            {/* CTA Band */}
            <div className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] py-14 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
                        {FOOTER_CTA.headline}
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                        {FOOTER_CTA.sub}
                    </p>
                    <Link
                        to={FOOTER_CTA.btnPath}
                        className="inline-flex items-center gap-2 bg-white text-[#00897B] font-black px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        {FOOTER_CTA.btnLabel}
                        <ArrowLeft size={18} />
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-white/20 flex-shrink-0">
                                <img src={RBC_LOGO} alt="RBC Solutions" className="w-full h-full object-contain scale-125" />
                            </div>
                            <div>
                                <div className="font-black text-lg">{FOOTER_BRAND.name}</div>
                                <div className="text-[#00BFA5] text-sm font-semibold">{FOOTER_BRAND.tagline}</div>
                            </div>
                        </div>
                        <p className="text-white/60 text-base leading-relaxed max-w-xs mb-6">
                            {FOOTER_BRAND.desc}
                        </p>

                        {/* QR — السجل التجاري */}
                        <div className="bg-white rounded-2xl p-2 w-44 h-44 sm:w-48 sm:h-48">
                            <img
                                src="/cr-qr.jpg"
                                alt="باركود السجل التجاري — شركة رواسخ الأعمال"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-sm mb-5 text-white/90">روابط سريعة</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} className="text-white/50 hover:text-[#00BFA5] text-base transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm mb-5 text-white/90">تواصل معنا</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-base">
                                <Mail size={16} className="text-[#00BFA5] flex-shrink-0 mt-0.5" />
                                {import.meta.env.VITE_EMAIL}
                            </li>
                            <li className="flex items-start gap-3 text-white/60 text-base">
                                <Phone size={16} className="text-[#00BFA5] flex-shrink-0 mt-0.5" />
                                {import.meta.env.VITE_PHONE}
                            </li>
                            <li className="flex items-start gap-3 text-white/60 text-base">
                                <MapPin size={16} className="text-[#00BFA5] flex-shrink-0 mt-0.5" />
                                {import.meta.env.VITE_ADDRESS}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col items-center gap-3 text-center">
                    <p className="text-white/40 text-sm">© {year} {FOOTER_BRAND.rights}</p>
                    <div className="flex items-center gap-5">
                        <Link to="/privacy" className="text-white/50 hover:text-[#00BFA5] text-sm transition-colors duration-200 underline underline-offset-2">
                            سياسة الخصوصية
                        </Link>
                        <span className="text-white/30 text-sm">|</span>
                        <Link to="/terms" className="text-white/50 hover:text-[#00BFA5] text-sm transition-colors duration-200 underline underline-offset-2">
                            الشروط والأحكام
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
