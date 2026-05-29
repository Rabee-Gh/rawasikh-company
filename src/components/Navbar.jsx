import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { RBC_LOGO } from '../assets/images';

const links = [
    { label: 'الرئيسية', path: '/' },
    { label: 'من نحن', path: '/about' },
    { label: 'علاماتنا', path: '/brands' },
    { label: 'خدماتنا', path: '/services' },
    { label: 'تواصل معنا', path: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    useEffect(() => setOpen(false), [location]);

    const isActive = (path) =>
        path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled py-3' : 'bg-transparent pt-[0.6rem]'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-[#00BFA5]/20 bg-white shadow-teal-sm group-hover:shadow-teal-md transition-all duration-300 flex-shrink-0">
                            <img src={RBC_LOGO} alt="RBC Solutions" className="w-full h-full object-contain scale-125" />
                        </div>
                        <div className="leading-tight">
                            <div className="font-black text-base sm:text-lg text-[#1A2332]">RBC Solutions</div>
                            <div className="text-[10px] sm:text-[11px] text-[#00BFA5] font-semibold tracking-wide">حلول الأعمال المتكاملة</div>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${isActive(link.path)
                                    ? 'text-[#00BFA5] bg-[#E0F7F4]'
                                    : 'text-[#4A5568] hover:text-[#00BFA5] hover:bg-[#F0FDFB]'
                                    }`}
                            >
                                {link.label}
                                {isActive(link.path) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00BFA5]" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/contact" className="btn-teal text-sm py-2.5 px-6">
                            ابدأ معنا
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] text-[#2D3748]"
                        aria-label="القائمة"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 mt-3' : 'max-h-0'}`}>
                    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-card p-3 flex flex-col gap-1">
                        {links.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive(link.path)
                                    ? 'bg-[#E0F7F4] text-[#00897B]'
                                    : 'text-[#4A5568] hover:bg-[#F7F9FC]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-teal text-sm text-center mt-1 py-3">
                            ابدأ معنا
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
