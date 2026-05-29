import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search } from 'lucide-react';

const links = [
    { label: 'الرئيسية', path: '/', icon: <Home size={16} /> },
    { label: 'من نحن', path: '/about', icon: <Search size={16} /> },
    { label: 'علاماتنا التجارية', path: '/brands', icon: <Search size={16} /> },
    { label: 'تواصل معنا', path: '/contact', icon: <Search size={16} /> },
];

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0FDFB] via-white to-[#F7F9FC] flex items-center justify-center px-4 pt-20">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#00BFA5]/6 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full bg-[#00BFA5]/4 blur-[60px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl w-full text-center">
                {/* 404 Number */}
                <div className="relative mb-6 select-none">
                    <div
                        className="text-[140px] sm:text-[180px] lg:text-[220px] font-black leading-none"
                        style={{
                            background: 'linear-gradient(135deg, #E0F7F4 0%, #00BFA5 50%, #00897B 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        404
                    </div>
                    {/* Floating badge over the number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-2xl shadow-card border border-[#E2E8F0] px-5 py-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#E0F7F4] flex items-center justify-center">
                                <Search size={16} className="text-[#00BFA5]" />
                            </div>
                            <span className="font-bold text-[#1A2332] text-sm">الصفحة غير موجودة</span>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-2xl sm:text-3xl font-black text-[#1A2332] mb-4">
                    عذراً، هذه الصفحة غير متاحة
                </h1>
                <p className="text-[#718096] text-base leading-relaxed mb-10 max-w-md mx-auto">
                    يبدو أن الصفحة التي تبحث عنها لم تعد موجودة أو تم نقلها. يمكنك العودة للرئيسية أو تصفح أقسام الموقع.
                </p>

                {/* Quick links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-lg mx-auto">
                    {links.map((l, i) => (
                        <Link
                            key={i}
                            to={l.path}
                            className="card p-3 text-center text-sm font-semibold text-[#4A5568] hover:text-[#00BFA5] transition-colors duration-200"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Main CTA */}
                <Link
                    to="/"
                    className="btn-teal inline-flex items-center gap-2 text-sm"
                >
                    <Home size={16} />
                    العودة للرئيسية
                </Link>

                {/* Divider */}
                <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
                    <p className="text-[#A0AEC0] text-xs">
                        إذا كنت تعتقد أن هذا خطأ،{' '}
                        <Link to="/contact" className="text-[#00BFA5] hover:underline font-medium">
                            تواصل معنا
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
