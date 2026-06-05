import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrandsPage from './pages/BrandsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function RevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Wait for page transition to finish before observing
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      // Reset all elements first
      els.forEach(el => el.classList.remove('visible'));

      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, 400); // match transition duration
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <HelmetProvider>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <BrowserRouter>
        <ScrollToTop />
        <RevealObserver />
        <div
          className="min-h-screen bg-white font-arabic overflow-x-hidden w-full"
          style={{
            opacity: splashDone ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
