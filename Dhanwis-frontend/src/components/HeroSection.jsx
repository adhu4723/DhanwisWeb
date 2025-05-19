import React, { useEffect, useState } from 'react';

import heroImg from '../assets/images/hero-sec.png';
import activityIcon from '../assets/icons/Activity.png';
import vectorIcon from '../assets/icons/Vector.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
    const fullText = "Wee boost growth for your startup business";  // (you had "Wee", fixed)
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                setShowCursor(false); // Hide cursor after typing completes
            }
        }, 70);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
            AOS.init({ duration: 1000, once: false }); // Initialize AOS with some custom settings
        }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5 lg:px-10 mt-10 '>
            {/* Left Section */}
            <div>
                <h1 className='text-3xl lg:text-6xl font-extrabold text-[#0B1B35] lg:leading-16'>
                    {text}
                   
                </h1>
                <p className='mt-4 text-gray-600 text-lg'>
                    Our goal is to be at the heart of the creative services industry as a leading digital creator.
                </p>
                <button className='mt-6 bg-yellow-500 px-6 py-3 text-black font-semibold rounded-lg hover:bg-yellow-600 transition'>
                    Get Started
                </button>
            </div>

            {/* Right Section */}
            <div className='relative'>
                <img src={heroImg} alt="Hero Section" className='w-full h-auto' />

                {/* Business Growth Card */}
                <div data-aos="fade-down"  className='flex absolute -top-8 lg:top-10 -right-5 lg:left-10 items-center gap-4 bg-white px-4 py-4 shadow-lg rounded-lg w-fit'>
                    <img src={activityIcon} alt="Activity Icon" className='w-8 h-8' />
                    <div>
                        <p className='font-bold'>100% Business Growth</p> 
                        <span className='flex items-center gap-2 text-sm text-gray-500'>
                            <img src={vectorIcon} alt="Star Rating" className='w-4 h-4' />
                            4.9 (1520 Reviews)
                        </span>
                    </div>
                </div>

                <div className='absolute top-40 hidden lg:block'>
                    <img src="src/assets/images/Group.png" alt="" />
                </div>

                <div className='absolute right-0 top-0 hidden lg:block'>
                    <img src="src/assets/images/Frame.png" alt="" />
                </div>

                {/* Happy Clients Card */}
                <div  data-aos="fade-up" className='flex absolute bottom-0 right-5 items-center gap-4 bg-white px-6 py-4 shadow-2xl rounded-lg w-fit'>
                    <div>
                        <p className='font-bold'>1,000,000 Happy Clients</p> 
                        <span className='flex items-center gap-2 text-sm text-gray-500'>
                            <img src={vectorIcon} alt="Star Rating" className='w-4 h-4' />
                            4.9 (1520 Reviews)
                        </span>
                    </div>
                </div>

                <div  data-aos="fade-up" className='flex absolute bottom-30 left-0 items-center gap-4 bg-white px-6 py-4 shadow-2xl rounded-lg w-fit'>
                    <div>
                        <p className='font-bold'>100+ Projects</p> 
                        <span className='flex items-center gap-2 text-sm text-gray-500'>
                            <img src={vectorIcon} alt="Star Rating" className='w-4 h-4' />
                            4.9 (1520 Reviews)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
