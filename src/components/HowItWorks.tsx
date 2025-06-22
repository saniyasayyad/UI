import React from 'react';
import { steps } from '../data/steps';

const HowItWorks: React.FC = () => {
  const getIconClass = (iconName: string) => {
    return `fas fa-${iconName}`;
  };

  return (
    <section id="how" className="py-16 bg-[var(--bg-card)]">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div 
              key={step.id} 
              className="card p-8 text-center hover:bg-[var(--bg-card-hover)]"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--primary)] bg-opacity-20 mx-auto flex items-center justify-center mb-6">
                <i className={getIconClass(step.icon)} style={{ color: 'var(--primary)', fontSize: '24px' }}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-[var(--text-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;