import React from 'react';
import { Phone, MapPin, Mail, Globe } from 'lucide-react';
import logo from '../../assets/Logo White.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-t-[80px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo and Tagline Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="IdealRealtyWA Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl md:text-2xl font-light text-gray-300">
              Together, We Can,
            </p>
          </div>

          {/* Quick View + Contact Us in a responsive flex */}
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row md:justify-end gap-y-10 md:gap-x-16">
              
              {/* Quick View */}
              <div className="min-w-[150px]">
                <h4 className="text-xl font-semibold mb-4 border-b-2 border-white inline-block pb-1">
                  Quick View
                </h4>
                <ul className="space-y-3 mt-6">
                  <li>
                    <a 
                      href="/" 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-lg"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/about" 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-lg"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/contact" 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-lg"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="text-xl font-semibold mb-4 border-b-2 border-white inline-block pb-1">
                  Contact Us
                </h4>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <a 
                      href="tel:0450613210" 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-lg"
                    >
                      0450613210
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Willetton</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <a 
                      href="mailto:ali@idealrealtywa.com.au" 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-lg break-all"
                    >
                      ali@idealrealtywa.com.au
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <a 
                      href="https://www.idealrealtywa.com.au" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-400 transition-colors text-lg break-all"
                    >
                      www.idealrealtywa.com.au
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
