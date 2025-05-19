import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GraphicCard({graphicDesigns}) {

  console.log('graphicdata',graphicDesigns);
  
  // const graphicDesigns = [
  //   { image: "https://i.koloapp.in/tr:n-hd/976a51bf-cda1-5bac-e480-bfac00e90f9f" },
  //   { image: "https://i.pinimg.com/736x/cd/e8/3a/cde83aecde4eaf758cacb34128902387.jpg" },
  //   { image: "https://www.shabsolutions.com/assets/public/assets/images/poster/60.jpg" },
  //   { image: "https://i.pinimg.com/736x/5f/40/ff/5f40ff90a696e12a0ebe13bf62a52dde.jpg" },
  //   { image: "https://www.shabsolutions.com/assets/public/assets/images/poster/60.jpg" }
  // ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);



  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? graphicDesigns.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === graphicDesigns.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-4  ">
      {/* Grid of images */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 ">
        {graphicDesigns.map((item, index) => (
          <div>
          <img
            key={index}
            src={item.image}
            alt={`Design ${index + 1}`}
            className="w-full h-auto object-cover shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
           
          />
           <p className='bg-yellow-400 text-black text-center uppercase'>{item.project_name}</p>
            </div>
        ))}
      </div>
     

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/90  flex items-center justify-center z-10 ">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeModal}>
            &times;
          </button>

          <button
            className="absolute  left-5 text-white text-4xl"
            onClick={prevImage}
          >
            &#8592;
          </button>

          <img
            src={graphicDesigns[currentIndex].image}
            alt={`Enlarged ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg "
          />
         

          <button
            className="absolute right-5 text-white text-4xl"
            onClick={nextImage}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

export default GraphicCard;
