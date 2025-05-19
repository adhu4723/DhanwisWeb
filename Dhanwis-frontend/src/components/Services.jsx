import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiActivity } from 'react-icons/fi'; // heartbeat-like icon
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import service1 from "../assets/images/services-1.jpg"
import service2 from "../assets/images/services-2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {

    useEffect(() => {
            AOS.init({ duration: 1000 });
        }, []);

  const data = [
    {
      title: 'Digital Marketing',
      image: 'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <MdOutlineAutoGraph size={34}  />,
    },
    {
      title: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1605067063351-f81bc6041251?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <IoIosColorPalette size={34}  />,
    },
    {
      title: 'Web Development',
      image: service2,
      icon: <BsBrowserChrome size={34}  />,
    },
    {
      title: 'ERP Development',
      image: service1,
      icon: <FiActivity size={34}  />,
    },
    {
      title: 'S E O',
      image: 'https://plus.unsplash.com/premium_photo-1661678060948-b8d1d293889a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <FaSearch size={34}  />,
    },
    {
      title: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <SiGoogleplay size={34}  />,
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <p className="uppercase text-sm tracking-widest text-gray-900">SERVICE</p>
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">
          Our Vision & <span className="text-yellow-600">Our Goal</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-20 ">
        {data.map((item, index) => {
         

          return (
            <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
              key={index}
              className={`group w-80 relative rounded-xl  shadow-lg transform transition-all duration-500 ease-in-out 
             `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full rounded-2xl object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              <div className="bg-gray-100 rounded-2xl shadow-2xl absolute left-5 right-5 -bottom-10 text-center py-6 px-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full text-gray-900  bg-yellow-400">
                    {item.icon}
                  </div>
                </div>
                <h2 className="text-lg font-bold uppercase text-gray-900">{item.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
