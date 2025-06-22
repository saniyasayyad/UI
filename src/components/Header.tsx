import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  user: any;
  onLogin: () => void;
  onSignUp: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogin, onSignUp, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-card)] shadow-md' : 'bg-[var(--bg-card)] bg-opacity-90'}`}>
      <div className="container flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-[var(--primary)]">🍔 Foodies</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white font-medium hover:text-[var(--primary)] transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-white font-medium hover:text-[var(--primary)] transition-colors"
              >
                Menu
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white font-medium hover:text-[var(--primary)] transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white font-medium hover:text-[var(--primary)] transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Auth buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={20} className="text-[var(--primary)]" />
                <span className="text-sm">{user.email}</span>
              </div>
              <button 
                className="bg-transparent border border-[var(--primary)] text-white py-2 px-5 rounded-full transition-all hover:bg-[var(--primary)] hover:text-white"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button 
                className="bg-transparent border border-[var(--primary)] text-white py-2 px-5 rounded-full transition-all hover:bg-[var(--primary)] hover:text-white"
                onClick={onSignUp}
              >
                Sign Up
              </button>
              <button 
                className="btn-primary"
                onClick={onLogin}
              >
                Login
              </button>
            </>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden">
            <div className="flex flex-col items-center justify-center h-full">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
              <ul className="flex flex-col gap-6 text-center">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-white text-xl font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('menu')}
                    className="text-white text-xl font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-white text-xl font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-white text-xl font-medium hover:text-[var(--primary)] transition-colors"
                  >
                    Contact
                  </button>
                </li>
                {user ? (
                  <>
                    <li className="mt-6">
                      <div className="flex items-center justify-center gap-2">
                        <User size={20} className="text-[var(--primary)]" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                    </li>
                    <li className="mt-4">
                      <button 
                        className="btn-primary"
                        onClick={onLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="mt-6">
                      <button 
                        className="bg-transparent border border-[var(--primary)] text-white py-2 px-5 rounded-full transition-all hover:bg-[var(--primary)] hover:text-white"
                        onClick={onSignUp}
                      >
                        Sign Up
                      </button>
                    </li>
                    <li className="mt-4">
                      <button 
                        className="btn-primary"
                        onClick={onLogin}
                      >
                        Login
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;