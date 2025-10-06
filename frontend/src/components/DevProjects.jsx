import { ArrowRight } from 'lucide-react';
import img1 from '../assets/Rectangle 17.png';
import img2 from '../assets/Rectangle 18.png';
import img3 from '../assets/Rectangle 19.png';
import img4 from '../assets/Rectangle 20.png';
import img5 from '../assets/Rectangle 21.png';

const GovtProjects = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Shared wrapper for heading and cards */}
        <div className="max-w-[1316px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white font-poppins text-left">
            Current Development Projects
          </h2>

          <div className="flex flex-wrap justify-start gap-6">
            {/* Image Cards */}
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full max-w-[638px] aspect-[638/384] rounded-3xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* View More Card */}
            <div className="w-full max-w-[638px] aspect-[638/384] rounded-3xl overflow-hidden border-4 bg-orange-500 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex items-center justify-center hover:bg-orange-600">
              <div className="text-center">
                <p className="text-white text-3xl font-bold mb-4">View More</p>
                <ArrowRight className="w-12 h-12 text-white mx-auto group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovtProjects;
