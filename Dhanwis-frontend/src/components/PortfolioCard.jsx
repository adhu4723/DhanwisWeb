import React, { useEffect } from 'react';
import cinemaagency from '../assets/images/portfolio/cinemaagency.png';
import ExoraConventions from '../assets/images/portfolio/ExoraConventions.png';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Subcomponent inside the same file
function PortfolioItem({ item, index }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`w-full transition-all duration-500 shadow-lg`}
    >
      <img src={item.image} alt={item.project_name} />
      <div className='flex lg:flex-nowrap flex-wrap justify-between items-end gap-5 p-4'>
        <div>
          <h1 className='text-lg font-bold'>{item.project_name}</h1>
          <p className='line-clamp-4 text-sm'>{item.project_discription}</p>
        </div>
        <a target="_blank"
          rel="noopener noreferrer"
          href={item.link} className='bg-yellow-600 hover:bg-white hover:border hover:border-yellow-600 hover:text-yellow-600 text-white rounded-full px-2 py-1 w-fit text-2xl'>
          <i className="bi bi-arrow-up-right"></i>
        </a>
      </div>
    </div>
  );
}

function PortfolioCard({ portfolioData }) {
  console.log(portfolioData);

  // const portfolioData = [
  //   {
  //     title: 'Cinema News Agency',
  //     img: cinemaagency,
  //     dis: 'Cinema News Agency is an online platform dedicated to providing news, updates, and information related to the film and entertainment industry.',
  //   },
  //   {
  //     title: 'Exora Conventions',
  //     img: ExoraConventions,
  //     dis: "Exora Conventions—an extraordinary convention centre in Kannur—is a new entrant in Kannur's social arena.",
  //   },



  // ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
      {portfolioData.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </div>
  );
}

export default PortfolioCard;
