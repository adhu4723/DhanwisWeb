import React from 'react'
import BreadcrumbHeader from '../components/BreadcrumbHeader'

function AboutUs() {
  return (
    <div>
      <BreadcrumbHeader/>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center lg:pl-10 mb-10 px-5 py-10'>
        <div className='space-y-4'>
        <h1 className='text-2xl lg:text-4xl font-bold text-yellow-600'>Why Choose Us?</h1>
        <p className='text-md lg:text-lg'>For over a decade, the world has dramatically changed its course using IT technologies.Dhanwis understand the necessity and have started giving our contribution in this new generation business era to offer our clients, solutions for their every Business and Social Network. Presently catering to clients from India, Canada and Middle Easte Dhanwis is synonymous with a heady mix of enthusiastic, young and experienced engineering professionals and systems development tech wizards, adept at brewing innovative and dynamic e-solutions. Our value-added business services and solutions add a spring to your portfolio of services to enhance user satisfaction. Individually we have experience in variegated fields like designing and developing apt apps (both web and mobile) for start-ups, CRM, Attendance and payroll management, apart from providing seamless e-service platforms suitable across different segments of business and government.</p>
      </div>
      <div>
        <img src="https://www.pngmart.com/files/About-Us-PNG-Photos.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default AboutUs
