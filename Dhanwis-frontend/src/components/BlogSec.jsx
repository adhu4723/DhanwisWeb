import React, { useEffect } from 'react'
import BlogCard from './BlogCard'
import { Blogdata } from '../assets/data/BlogData'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function BlogSec() {
       useEffect(() => {
              AOS.init({ duration: 1000 });
          }, []);
    return (
        <div className='px-5 space-y-10'>
            <div className='text-center  '>
                <p className='uppercase text-sm tracking-widest text-gray-900 mb-2'>Our Blogs</p>
                <h1 className='text-2xl lg:text-4xl font-bold  '><span className='text-yellow-600 uppercase '>Blog</span> </h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    {Blogdata.slice(0,4).map((items,index)=>(
                        <BlogCard data={items} index={index} />
                    ))}
                    
                </div>
                <div className='text-center'>
                <Link className='bg-yellow-600 text-white px-4 py-2 rounded-lg' to={'/blog'}>SEE ALL</Link>
            </div>
            
        </div>
    )
}

export default BlogSec
