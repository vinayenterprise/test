import heroBG from "../assets/hero.jpg";
import heroImage from "../assets/erasebg-transformed.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full pt-20">
        {/* Left Side: Text */}
         <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-red-600 leading-tight mb-4" 
                style={{ 
                  textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.3)'
                }}>
              Mohsin Ali
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-red-600 leading-tight" 
                style={{ 
                  textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.3)'
                }}>
              Khan
            </h1>
          </div>
        </div>
      </div>

        {/* Right Side: Fixed Full Height Image */}
        <div className="w-full md:w-1/2 h-full">
          <img
            src={heroImage}
            alt="Hero"
            className="h-full right-6 object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
