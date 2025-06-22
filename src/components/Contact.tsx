import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the form submission here
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-[var(--bg-card)]">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-center text-[var(--text-muted)] mb-12">
          Have questions or need help with your order? Get in touch with us!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[var(--bg-dark)] text-white border border-gray-700 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-30 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[var(--bg-dark)] text-white border border-gray-700 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-30 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Type your message here..."
                className="w-full p-3 rounded-lg bg-[var(--bg-dark)] text-white border border-gray-700 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-30 transition-colors resize-none"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full py-3"
            >
              Send Message
            </button>
          </form>
          
          <div className="bg-[var(--bg-dark)] rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--primary)]">Our Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--primary)] bg-opacity-20 p-3 rounded-full">
                  <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)' }}></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Our Location</h4>
                  <p className="text-[var(--text-muted)]">123 Food Street, Flavor Town, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[var(--primary)] bg-opacity-20 p-3 rounded-full">
                  <i className="fas fa-phone" style={{ color: 'var(--primary)' }}></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-[var(--text-muted)]">+1 (234) 567-890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[var(--primary)] bg-opacity-20 p-3 rounded-full">
                  <i className="fas fa-envelope" style={{ color: 'var(--primary)' }}></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-[var(--text-muted)]">support@foodies.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                    <i className="fab fa-facebook-f" style={{ fontSize: '20px' }}></i>
                  </a>
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                    <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
                  </a>
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                    <i className="fab fa-twitter" style={{ fontSize: '20px' }}></i>
                  </a>
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                    <i className="fab fa-youtube" style={{ fontSize: '20px' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;