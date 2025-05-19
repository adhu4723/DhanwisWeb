import React from 'react'
import PortfolioCard from './PortfolioCard'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../context/AminContext/PortfolioContext'

function OurWorks() {
   const {portfolios}=usePortfolio()
 const portfolioData=portfolios.filter(items=>items.work=='website')
  return (
    <div className='space-y-10 px-6'>
       <div className='text-center  '>
                    <p className='uppercase text-sm tracking-widest text-gray-900 mb-2'>Our Works</p>
                    <h1 className='text-2xl lg:text-4xl font-bold  '>Our Past  <span className='text-yellow-600 uppercase '>Web Design</span> </h1>
                </div>
                <div>
                    <PortfolioCard portfolioData={portfolioData} />
                </div>
                <div className='text-center'>
                <Link className='bg-yellow-600 text-white px-4 py-2 rounded-lg' to={'/ourworks'}>SEE ALL</Link>
            </div>
    </div>
  )
}

export default OurWorks
