import React, { useState, useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CareerContext } from '../context/AminContext/CareerContext';

function CareerAccordion() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [openIndex, setOpenIndex] = useState(0);
    const { careers, fetchCareers, deleteCareer } = useContext(CareerContext);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='w-full mx-auto my-10 px-4'>
            {careers.map((item, index) => {
                // Split the description by double dots and trim each part
                const descriptionParts = item.discription
                    ? item.discription.split(".").map(str => str.trim()).filter(Boolean)
                    : [];
                    console.log('item.description',item);
                    

                return (
                    <div
                        key={index}
                        className='border-b border-gray-300'
                    
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className='w-full text-left flex justify-between items-center py-4 text-xl lg:text-3xl font-semibold text-yellow-600 focus:outline-none'
                        >
                            {item.job}
                            <span>{openIndex === index ? '−' : '+'}</span>
                        </button>

                        {openIndex === index && (
                            <div className='pb-4 pl-4 text-gray-500'>
                                <ul className='list-disc pl-5 mb-4'>
                                    {descriptionParts.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <button className='bg-yellow-600 px-4 py-2 text-white font-semibold rounded hover:bg-yellow-500 transition duration-300'>
                                    APPLY NOW
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default CareerAccordion;
