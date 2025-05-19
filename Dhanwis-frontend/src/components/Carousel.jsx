import React, { useState, useEffect } from 'react';
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";

function Carousel() {
    const slides = [
        {
            src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            text: "Beautiful Landscape 1"
        },
        {
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            text: "Beautiful Landscape 2"
        },
        {
            src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            text: "Beautiful Landscape 3"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto play after 5 seconds
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto play after 5 seconds
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto play after 5 seconds
    };

    useEffect(() => {
        let intervalId;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                goToNext();
            }, 3000); // Change slide every 3 seconds
        }
        return () => clearInterval(intervalId);
    }, [currentIndex, isAutoPlaying]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto overflow-hidden group">
            {/* Slides */}
            <div 
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className="w-full h-full flex-shrink-0 relative"
                    >
                        <img 
                            src={slide.src} 
                            alt={slide.text} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                            <p className="text-xl md:text-2xl lg:text-3xl">{slide.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={goToPrevious}
                className="hidden group-hover:block absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
            >
                <BsFillArrowLeftCircleFill />
            </button>
            <button 
                onClick={goToNext}
                className="hidden group-hover:block absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
            >
                <BsFillArrowRightCircleFill />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;