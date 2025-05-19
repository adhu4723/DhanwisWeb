import React from 'react'
import whyus2 from '../assets/images/whyus2.png';
import { Link } from 'react-router-dom';


function Whyus() {
  return (
    <div className='bg-gray-100 space-y-10 relative  px-4 py-20'>
      <div className='text-center  '>
        <p className='uppercase text-sm tracking-widest text-gray-900'>Why Us?</p>
        <h1 className='text-2xl lg:text-4xl font-bold  '>Why <span className='text-yellow-600 uppercase  '>Dhanwis</span> </h1>
      </div>
      <div className='text-center'>
        {/* <img width={500} src={whyus2} alt="" /> */}

        <p>We are here precision engineered for excellence in quality. Our work is to design and develop the best <br className='hidden lg:block' /> websites in the market with a time and quality guarantee. Your journey with us here <br className='hidden lg:block' />  provides us to capture it with a user-friendly experience and utmost trust.</p>
      </div>
      <div className='text-center'>
        <Link to={'/aboutus'} className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500">
          See More
        </Link>
      </div>
      <div className='absolute -bottom-22 -right-12 hidden lg:block'>
        <img src="https://png.pngtree.com/png-vector/20231123/ourmid/pngtree-3d-white-man-with-question-mark-why-png-image_10684743.png" alt="" />
      </div>

    </div>
  )
}

export default Whyus
