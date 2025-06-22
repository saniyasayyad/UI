import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[var(--bg-card)]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)]">About Us</h2>
            <p className="text-[var(--text-muted)] mb-8">
              At <span className="text-[var(--primary)] font-semibold">Foodies</span>, we believe good food brings people together. We deliver your favorite dishes, made fresh by top local chefs, right to your doorstep. Our mission is simple: quality, speed, and satisfaction.
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <div className="flex items-center gap-3">
                <div className="text-[var(--primary)]">
                  <i className="fas fa-bolt" style={{ fontSize: '18px' }}></i>
                </div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[var(--primary)]">
                  <i className="fas fa-leaf" style={{ fontSize: '18px' }}></i>
                </div>
                <span>Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[var(--primary)]">
                  <i className="fas fa-dollar-sign" style={{ fontSize: '18px' }}></i>
                </div>
                <span>Affordable Prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[var(--primary)]">
                  <i className="fas fa-smile" style={{ fontSize: '18px' }}></i>
                </div>
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="About Foodies" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;