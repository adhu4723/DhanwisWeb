import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'

import Whyus from '../components/Whyus'
import Testimonials from '../components/Testimonials'
import BreadcrumbHeader from '../components/BreadcrumbHeader'
import Carousel from '../components/Carousel'
import OurWorks from '../components/OurWorks'
import BlogSec from '../components/BlogSec'


function HomePage() {
  return (
    <div className='space-y-32'>
    <HeroSection />
   <Services/>
   <Whyus/>  
   <OurWorks/>
   <Testimonials/>
   <BlogSec/>
    </div>
  )
}

export default HomePage
