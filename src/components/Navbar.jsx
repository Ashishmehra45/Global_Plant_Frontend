import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Quality', path: '/quality' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Global Presence', path: '/global-presence' },
  ];

  const isSolid = !isHome || isScrolled;
  const navBg = isSolid ? 'bg-white shadow-lg' : 'bg-transparent';
  const textColor = isSolid ? 'text-black' : 'text-white';
  const leafColor = isSolid ? 'text-green-700' : 'text-green-400';

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <Leaf className={`h-8 w-8 ${leafColor}`} />
            <span className={`text-2xl font-black tracking-tight ${textColor}`}>
              globalPlanet
            </span>
          </Link>

          {/* Desktop Menu - FORCE SHOW ON PC (!hidden lg:!flex) */}
          <div className="!hidden lg:!flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-bold text-sm uppercase tracking-wide hover:text-green-500 transition-colors ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-green-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-800 transition-all shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Hamburger - FORCE HIDE ON PC (!flex lg:!hidden) */}
          <div className="!flex lg:!hidden items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isMobileMenuOpen ? 'text-black' : textColor}`}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black font-black text-3xl hover:text-green-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-green-700 text-white px-10 py-4 rounded-full font-bold text-xl mt-4 shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;