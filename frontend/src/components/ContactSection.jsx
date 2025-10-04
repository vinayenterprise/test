import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Top Contact Form Section */}
      <div className="max-w-6xl mx-auto">
        <div className="relative border-2 border-gray-300 rounded-3xl p-12 mb-8 overflow-hidden">
          {/* Background Pattern Icons */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {['🏠', '🏢', '🏘️'][Math.floor(Math.random() * 3)]}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We're here to answer your questions and help you find your next property.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex justify-center">
              <div className="flex items-center border-4 border-orange-400 rounded-full overflow-hidden max-w-2xl w-full">
                <input
                  type="email"
                  placeholder="Your email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 outline-none text-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-10 py-4 font-semibold text-lg hover:bg-gray-800 transition-colors"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
