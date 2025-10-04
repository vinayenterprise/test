import { ArrowRight } from "lucide-react";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';

const PropertiesSection = () => {
  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="inline-flex items-center p-2  text-orange-300 hover:text-gray-600 border rounded-full font-medium transition-colors text-lg group">
            View more
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
