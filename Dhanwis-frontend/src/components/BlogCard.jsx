import React, { useEffect } from 'react'
import { User,Calendar  } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function BlogCard({data,index}) {

    useEffect(() => {
                  AOS.init({ duration: 1000 });
              }, []);


  return (
    <div  data-aos="fade-up" key={index}
    data-aos-delay={index * 100} className='shadow-lg rounded-2xl p-4 space-y-2'>
      <img src={data.image?data.image:"https://images.unsplash.com/photo-1570799650082-f3eb7207f588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNwaXJpdHVhbCUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHwy"} alt="" />
      <h1 className='line-clamp-2 text-lg font-bold hover:underline cursor-pointer'>{data.title}</h1>
      <p className='line-clamp-3'>{data.discription}</p>
      <div className='flex gap-2 flex-wrap justify-between'>
       <div className='flex gap-1 items-center '>
       <User color='gray' />
       <p className='text-gray-600'>user</p>
       </div>
       <div className='flex gap-1'>
       <Calendar color='gray' />
       <p className='text-gray-600'>{data.dat}</p>
       </div>
      </div>
    </div>
  )
}

export default BlogCard
