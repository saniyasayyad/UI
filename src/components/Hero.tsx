import React from 'react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[var(--text-light)]">
          Delicious Food Delivered To Your Door
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[var(--text-light)]">
          Craving something tasty? Browse our menu and enjoy fast delivery at your fingertips.
        </p>
        <button 
          onClick={scrollToMenu}
          className="btn-primary text-lg py-3 px-8"
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;