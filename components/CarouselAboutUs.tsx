"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const images = [
  "assets/images/Works/removal1.jpg",
  "assets/images/Works/removal2.jpg",
  "assets/images/Works/removal3.jpg",
  "assets/images/Works/cleaning1.jpg",
  "assets/images/Works/cleaning2.jpg",
  "assets/images/Works/cleaning4.jpg",
  "assets/images/Works/cleaning5.jpg",
];
const CarouselAboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {

    setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length-1:prevIndex-1
    );
  };
  const nextSlide = () => {

    setCurrentIndex((prevIndex) => 
        prevIndex === images.length-1 ? 0 :prevIndex+1
    );
  };
  return(
  <div className="relative flex w-[70vw] h-[60vh] overflow-hidden rounded-lg shadow-lg mx-auto">
    <div className="transition-transform ease-in-out duration-500 flex"
    style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {images.map((src,index)=>(
            <div key={index} className="min-w-full flex justify-center">
            <img src={src} alt={`Slide ${index}`} className="w-full object-cover" />
          </div>
        ))}
    </div>
    <Button onClick={prevSlide} className="absolute hover:cursor-pointer left-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 rounded-full p-2"><FiChevronLeft className="text-white"/></Button>
    <Button onClick={nextSlide} className="absolute hover:cursor-pointer right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 rounded-full p-2"><FiChevronRight className="text-white"/></Button>
  </div>
  );
};

export default CarouselAboutUs;
