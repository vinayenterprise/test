import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import PropertiesSection from '../components/PropertiesSection'
import AchievementsSection from '../components/AchievementsSection'
import GovtProjects from '../components/DevProjects'
import ContactSection from '../components/ContactSection'
import Footer from '../components/common/Footer'

const HomePage = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <About/>
       <PropertiesSection/>
       <AchievementsSection/>
       <GovtProjects/>
       <ContactSection/>
       <Footer/>
    </div>
  )
}

export default HomePage