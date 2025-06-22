import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-[var(--bg-dark)]">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`card p-6 md:p-8 transition-all duration-500 ${
                index === activeIndex ? 'scale-105 border border-[var(--primary)]' : ''
              }`}
            >
              <div className="mb-4 text-[var(--primary)]">
                <i className="fas fa-quote-left" style={{ fontSize: '24px' }}></i>
              </div>
              <p className="text-[var(--text-muted)] mb-6">{testimonial.text}</p>
              <h3 className="text-lg font-medium text-[var(--primary)]">— {testimonial.author}</h3>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === activeIndex ? 'bg-[var(--primary)]' : 'bg-gray-500'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;