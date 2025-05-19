import React from 'react'
import BreadcrumbHeader from '../components/BreadcrumbHeader'
import { Blogdata } from '../assets/data/BlogData'
import BlogCard from '../components/BlogCard'

function Blogs() {
    return (
        <div>
            <BreadcrumbHeader />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 lg:px-10 py-5'>
                {Blogdata.map(items => (
                    <BlogCard data={items} />
                ))}

            </div>
        </div>
    )
}

export default Blogs
