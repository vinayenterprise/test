import React from 'react'
import awards from '../assets/awrads-Photoroom 1.png' 
import img11 from '../assets/image 11.png'

const AchievementsSection = () => (
  <section className="w-full bg-white py-20">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-14">
        Our Achievements
      </h1>
      <div className="flex justify-center items-center">
        <img
          src={awards}
          alt="awards"
          className="max-w-full h-auto"
          style={{ maxWidth: 900 }} // Optional: cap width for very large screens
        />
      </div>
    </div>
  </section>
)

export default AchievementsSection
