import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            onClick={scrollUp}
            aria-label="العودة للأعلى"
            className={`fixed bottom-6 right-4 sm:right-6 z-50 w-11 h-11 rounded-full bg-white border border-[#E2E8F0]
        flex items-center justify-center text-[#00BFA5] shadow-card
        hover:bg-[#00BFA5] hover:text-white hover:border-[#00BFA5] hover:scale-110
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
            <ChevronUp size={18} />
        </button>
    );
}
