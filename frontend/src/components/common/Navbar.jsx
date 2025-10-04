import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Logo transparent.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll logic (fixed for mobile)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar on mobile screens
      if (window.innerWidth < 768) {
        setShowNavbar(true);
        return;
      }

      if (isMenuOpen) {
        // Keep visible when mobile menu is open
        setShowNavbar(true);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavbar(false);
        } else if (currentScrollY < 10 || currentScrollY < lastScrollY) {
          setShowNavbar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const linkClass =
    'block w-full text-left text-lg font-medium px-4 py-3 rounded hover:bg-slate-700 transition-all duration-200 text-white';

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-slate-900 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-orange-400 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-orange-400 transition-all duration-300"
            >
              About Us
            </a>
            <a
              href="/testimonial"
              className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-orange-400 transition-all duration-300"
            >
              Testimonial
            </a>
            <a
              href="/contact"
              className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-orange-400 transition-all duration-300"
            >
              Contact Us
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 ...z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0 ...z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu list */}
      <div
        className={`md:hidden bg-slate-800 text-white px-4 py-6 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="/" className={linkClass} onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={linkClass} onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="/testimonial" className={linkClass} onClick={toggleMenu}>
              Testimonial
            </a>
          </li>
          <li>
            <a href="/contact" className={linkClass} onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 ...z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0 ...z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
