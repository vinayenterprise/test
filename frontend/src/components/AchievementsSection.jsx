import React from 'react';
import awards from '../assets/awrads-Photoroom 1.png';

const AchievementsSection = () => (
  <section className="w-full bg-white py-16 sm:py-20">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-10 sm:mb-14">
        Our Achievements
      </h1>
      <div className="flex justify-center items-center">
        <img
          src={awards}
          alt="awards"
          className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] h-auto"
        />
      </div>
    </div>
  </section>
);

export default AchievementsSection;
