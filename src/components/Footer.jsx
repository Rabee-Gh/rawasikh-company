import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { RBC_LOGO, RBC_LOGO_WIDE } from '../assets/images';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#1A2332] text-white">
            {/* CTA Band */}
            <div className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] py-14 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
                        هل أنت مستعد للانطلاق معنا؟
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                        سواء كنت مستثمراً أو شريكاً أو تبحث عن فرصة — فريقنا جاهز للاستماع.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#00897B] font-black px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        تواصل معنا الآن
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
                                <div className="font-black text-lg">RBC Solutions</div>
                                <div className="text-[#00BFA5] text-xs font-semibold">حلول الأعمال المتكاملة</div>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
                            شركة تشغيلية متكاملة تمتلك وتدير محفظة من العلامات التجارية الرائدة في قطاع الأغذية والمشروبات والحلول الرقمية الذكية.
                        </p>
                        {/* <div className="flex gap-3">
                            {['in', 'X', '📸'].map((s, i) => (
                                <button key={i} className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#00BFA5] flex items-center justify-center text-xs font-bold transition-all duration-200">
                                    {s}
                                </button>
                            ))}
                        </div> */}
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-sm mb-5 text-white/90">روابط سريعة</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'الرئيسية', path: '/' },
                                { label: 'من نحن', path: '/about' },
                                { label: 'علاماتنا التجارية', path: '/brands' },
                                { label: 'خدماتنا', path: '/services' },
                                { label: 'تواصل معنا', path: '/contact' },
                            ].map(l => (
                                <li key={l.path}>
                                    <Link to={l.path} className="text-white/50 hover:text-[#00BFA5] text-sm transition-colors duration-200">
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
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <Mail size={15} className="text-[#00BFA5] flex-shrink-0 mt-0.5" />
                                {import.meta.env.VITE_EMAIL}
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <Phone size={15} className="text-[#00BFA5] flex-shrink-0 mt-0.5" />
                                {import.meta.env.VITE_PHONE}
                            </li>
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <MapPin size={15} className="text-[#00BFA5] flex-shrink-0 mt-0.5" />
                                {import.meta.env.VITE_ADDRESS}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 flex flex-center sm:flex-row items-center justify-center gap-3">
                    <p className="text-white/30 text-xs">© {year}  شركة رواسخ الأعمال. جميع الحقوق محفوظة.</p>
                    {/* <p className="text-white/30 text-xs flex items-center gap-1">
                        صُنع بـ <span className="text-[#00BFA5]">♥</span> في المملكة العربية السعودية
                    </p> */}
                </div>
            </div>
        </footer>
    );
}
