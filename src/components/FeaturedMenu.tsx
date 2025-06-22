import React from 'react';
import { menuItems } from '../data/menuItems';

const FeaturedMenu: React.FC = () => {
  const scrollToFullMenu = () => {
    // In a real app, this would navigate to a full menu page
    alert('This would navigate to a full menu page');
  };

  return (
    <section id="menu" className="py-16 bg-[var(--bg-dark)]">
      <div className="container">
        <h2 className="section-title">Featured Menu</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map(item => (
            <div key={item.id} className="card overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-[var(--text-muted)] mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[var(--primary)]">${item.price.toFixed(2)}</span>
                  <button className="text-sm px-3 py-1 border border-[var(--primary)] rounded-full text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={scrollToFullMenu}
            className="btn-primary"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;