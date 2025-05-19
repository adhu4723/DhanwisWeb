import React, { useContext } from 'react'
import InputField from '../../components/Admin/InputField'
import { usePortfolio } from '../../context/AminContext/PortfolioContext'
import { Link } from 'react-router-dom'
import { CareerContext } from '../../context/AminContext/CareerContext'

function Dashboard() {
  const {portfolios}=usePortfolio()
    const { careers } = useContext(CareerContext);
  
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <Link to={'/admin/viewportfolio'} className='border bg-gray-900 py-4 text-white flex flex-wrap justify-center items-center flex-col gap-2'>
              <h1 className='text-xl font-bold uppercase'>Projects</h1>
              <p className='text-2xl'>{portfolios?.length||'0'}</p>
        </Link>
        <Link to={'/admin/viewcareer'} className='border bg-gray-900 py-4 text-white flex justify-center items-center flex-col gap-2'>
              <h1 className='text-xl font-bold uppercase'>Careers</h1>
              <p className='text-2xl'>{careers?.length||'0'}</p>
        </Link>
        <div className='border bg-gray-900 py-4 text-white flex justify-center items-center flex-col gap-2'>
              <h1 className='text-xl font-bold uppercase'>Blog</h1>
              <p className='text-2xl'>1</p>
        </div>
        {/* <div className='border flex justify-center items-center flex-col gap-2'>
              <h1 className='text-xl font-bold uppercase'>user</h1>
              <p className='text-2xl'>1</p>
        </div> */}
      </div>
     
    </div>
  )
}

export default Dashboard
