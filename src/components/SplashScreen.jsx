import { useEffect, useState } from 'react';
import { rbcLogo2 } from '../assets/images';

export default function SplashScreen({ onDone }) {
    // phase: 'enter' → 'hold' → 'exit' → 'done'
    const [phase, setPhase] = useState('enter');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('hold'), 800);   // logo fully visible
        const t2 = setTimeout(() => setPhase('exit'), 2200);  // start exit
        const t3 = setTimeout(() => { setPhase('done'); onDone(); }, 3000); // unmount
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onDone]);

    if (phase === 'done') return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f0fdfb 0%, #ffffff 50%, #e0f7f4 100%)',
                transition: phase === 'exit' ? 'opacity 0.7s ease, transform 0.7s ease' : 'none',
                opacity: phase === 'exit' ? 0 : 1,
                transform: phase === 'exit' ? 'scale(1.04)' : 'scale(1)',
            }}
        >
            {/* Animated background rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2, 3].map(i => (
                    <div
                        key={i}
                        className="absolute rounded-full border border-[#00BFA5]"
                        style={{
                            width: `${i * 180}px`,
                            height: `${i * 180}px`,
                            opacity: phase === 'enter' ? 0 : 0.08 + i * 0.04,
                            transform: phase === 'enter' ? 'scale(0.6)' : 'scale(1)',
                            transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
                        }}
                    />
                ))}
            </div>

            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'radial-gradient(#00BFA5 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Corner accents */}
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#00BFA5]/30 rounded-tr-xl" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#00BFA5]/30 rounded-bl-xl" />

            {/* Main content */}
            <div className="relative flex flex-col items-center gap-8 px-6">

                {/* Logo container */}
                <div
                    style={{
                        opacity: phase === 'enter' ? 0 : 1,
                        transform: phase === 'enter' ? 'translateY(24px) scale(0.92)' : 'translateY(0) scale(1)',
                        transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
                    }}
                >
                    {/* Glow behind logo */}
                    <div
                        className="absolute inset-0 rounded-3xl blur-2xl"
                        style={{
                            background: 'radial-gradient(ellipse, rgba(0,191,165,0.18) 0%, transparent 70%)',
                            transform: 'scale(1.6)',
                        }}
                    />
                    <div className="relative bg-white rounded-3xl p-5 sm:p-7"
                        style={{ boxShadow: '0 8px 48px rgba(0,191,165,0.18), 0 2px 12px rgba(0,0,0,0.06)' }}
                    >
                        <img
                            src={rbcLogo2}
                            alt="RBC Solutions"
                            className="w-52 sm:w-72 md:w-80 h-auto object-contain"
                            style={{ maxHeight: '120px' }}
                        />
                    </div>
                </div>

                {/* Tagline */}
                <div
                    style={{
                        opacity: phase === 'enter' ? 0 : 1,
                        transform: phase === 'enter' ? 'translateY(16px)' : 'translateY(0)',
                        transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
                    }}
                >
                    <p className="text-[#00897B] text-sm sm:text-base font-semibold tracking-widest text-center uppercase">
                        حلول الأعمال المتكاملة
                    </p>
                </div>

                {/* Loading bar */}
                <div
                    className="w-32 sm:w-48 h-0.5 bg-[#E0F7F4] rounded-full overflow-hidden"
                    style={{
                        opacity: phase === 'enter' ? 0 : 1,
                        transition: 'opacity 0.4s ease 0.5s',
                    }}
                >
                    <div
                        className="h-full bg-gradient-to-r from-[#00BFA5] to-[#00897B] rounded-full"
                        style={{
                            width: phase === 'hold' || phase === 'exit' ? '100%' : '0%',
                            transition: 'width 1.2s cubic-bezier(.4,0,.2,1) 0.6s',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
