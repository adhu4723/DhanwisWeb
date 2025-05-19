import React from 'react'
import BreadcrumbHeader from '../components/BreadcrumbHeader'
import PortfolioCard from '../components/PortfolioCard'
import { UnderlineTabs } from '../components/UnderlineTabs'

function OurWork() {


  return (
    <div>
      <BreadcrumbHeader />
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center lg:pl-10 mb-10 '>
        <div className='space-y-4 p-5'>
          <h1 className='text-2xl lg:text-4xl font-bold text-yellow-600'>Portfolio</h1>
          <p className='text-md lg:text-xl'>We are proud to showcase our portfolio of successful projects. Our team of experienced developers has worked on a wide range of projects, from small business apps to large enterprise solutions. We have the expertise and experience to create custom apps that meet your specific needs.</p>
          {/* <button className='bg-yellow-600 text-white px-4 py-3 rounded-lg'>EXPLORE PORTFOLIO</button> */}
        </div>
        <div>
          <img className='h-150 w-full hidden lg:block' src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        
      </div>
      <UnderlineTabs />

    </div>
  )
}

export default OurWork
