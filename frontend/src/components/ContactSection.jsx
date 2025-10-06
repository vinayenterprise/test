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
        {/* House Icon 1 */}
        <svg className="absolute top-10 left-10 w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>

        {/* Building Icon 1 */}
        <svg className="absolute top-20 right-20 w-14 h-14 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>

        {/* Office Building Icon */}
        <svg className="absolute bottom-20 left-20 w-14 h-14 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3v18h18V3H3zm8 16H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V9h6v2zm0-4H5V5h6v2zm8 12h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V9h6v2zm0-4h-6V5h6v2z"/>
        </svg>

        {/* House Icon 2 */}
        <svg className="absolute bottom-10 right-10 w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>

        {/* Apartment Icon */}
        <svg className="absolute top-1/2 left-1/4 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
        </svg>

        {/* Real Estate Icon */}
        <svg className="absolute top-1/3 right-1/3 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
        </svg>

        {/* Building Icon 2 */}
        <svg className="absolute bottom-1/3 right-1/4 w-14 h-14 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>

        {/* Additional scattered icons */}
        <svg className="absolute top-1/4 left-1/2 w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>

        <svg className="absolute bottom-1/4 left-1/3 w-11 h-11 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
        </svg>
      </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
              Let's Get In Touch 
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We're here to answer your questions and help you find your next property.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto rounded-full p-2" style={{ backgroundColor: '#D8A451' }}>
              <input 
  type="email" 
  placeholder="Your email id"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="flex-1 h-14 rounded-full border-2 border-black bg-white px-6 text-lg focus:outline-none focus:ring-1 focus:ring-black"
/>

              <button 
                type="submit"
                className="h-14 px-8 rounded-full bg-black hover:bg-black/90 text-white font-semibold text-lg"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
