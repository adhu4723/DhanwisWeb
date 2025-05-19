import React from 'react'
import BreadcrumbHeader from '../components/BreadcrumbHeader'
import CareerCard from '../components/CareerCard'

function Careers() {
  return (
    <div>
      <BreadcrumbHeader/>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center lg:pl-10 mb-10'>
        <div className='space-y-4 p-5'>
          <h1 className='text-2xl lg:text-4xl font-bold text-yellow-600'>Come Join Our Crew</h1>
          <p className='text-md lg:text-xl'>The work we do calls for constant innovation and requires continuous self-learning on your part. As such, what we are looking for in a candidate is the drive and motivation to succeed and the capacity to work well individually and with a group.</p>
          {/* <button className='bg-yellow-600 text-white px-4 py-3 rounded-lg'>EXPLORE PORTFOLIO</button> */}
        </div>
        <div>
          <img className='h-150 w-full hidden lg:block' src="https://images.unsplash.com/photo-1534196511436-921a4e99f297?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        
      </div>
      <CareerCard/>
    </div>
  )
}

export default Careers
