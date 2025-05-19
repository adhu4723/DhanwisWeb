import React, { useEffect } from 'react';
import AshrayaMedicals from '../assets/clients/AshrayaMedicals.png';
import auricle from '../assets/clients/auricle.png';
import leal from '../assets/clients/leal.png';
import falconcruise from '../assets/clients/falconcruise.png';
import easygo from '../assets/clients/easygo.png';
import savoy from '../assets/clients/savoy.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const stats = [
  { icon: 'bi-emoji-smile', value: 232, label: 'Happy Clients' },
  { icon: 'bi-journal-richtext', value: 521, label: 'Projects' },
  { icon: 'bi-headset', value: 24, label: 'Hours Of Support' },
  { icon: 'bi-people', value: 15, label: 'Hard Workers' },
];

const logos = [
  AshrayaMedicals,
  easygo,
  auricle,
  leal,
  falconcruise,

  'https://kannurmirror.com/wp-content/uploads/2022/08/Kannur-Mirrir-HQ-Logo.png',
];

const Testimonials = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-black px-4 py-10 bg-gray-100 space-y-4">
      <div className="text-center ">
        <p className="uppercase text-sm tracking-widest text-gray-900">Testimonials</p>
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
          Our <span className="text-orange-600 ">Happy Clients</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 px-4  justify-center gap-2 lg:gap-6 lg:py-10 ">
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`bg-white w-full  p-6 rounded-lg shadow-md text-center flex flex-col items-center transform transition-all duration-700 ease-in-out
             `}
          >
            <i className={`bi ${stat.icon} text-orange-500 text-4xl mb-4`}></i>
            <h2 className="text-3xl font-bold text-gray-800">
              <CountUp end={stat.value} duration={2} />
            </h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            width={200}
            alt="logo"
            className=" transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
