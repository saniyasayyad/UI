import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--bg-dark)] pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Foodies</h3>
            <p className="text-[var(--text-muted)]">
              Delicious meals delivered fresh to your door. Taste the difference with every bite!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[var(--primary)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[var(--primary)] mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[var(--bg-card)] text-white px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-30 focus:outline-none"
                />
                <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-r-lg hover:bg-[var(--primary-hover)] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Foodies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;