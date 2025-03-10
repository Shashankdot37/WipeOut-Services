"use client";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState,useEffect } from "react";
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/assets/images/hero1.jpg", alt: "Cleaning picture" },
    {
      src: "/assets/images/hero2.jpg",
      alt: "Room full with cardbox boxes packed, seems like ready to move out",
    },
    { src: "/assets/images/hero3.jpg", alt: "Cleaning picture with various tools" },
    {
      src: "/assets/images/hero4.jpg",
      alt: "Moving Truck in white color and white background",
    },
    {
      src: "/assets/images/hero5.jpg",
      alt: "Sydney Opera House across the brige and water body",
    },
  ];
  useEffect(()=>{
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
},[]);
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover brightness-50"
          />
        </div>
      ))}
      {/* <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full">
                <Image src={image.src} alt={image.alt} width={1600} height={600} className="w-full brightness-50 h-[600px] object-cover"/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext/>
        <CarouselPrevious/>
      </Carousel> */}
      <div className="inset-0 absolute flex justify-center items-center flex-col text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Sydney Move and Clean</h1>
          <p className="text-lg md:text-2xl mt-4 drop-shadow-md max-w-2xl">Professional Cleaning & Moving Services at <b className="text-gray-100">Sydney</b>.</p>
          <Link href="tel:+61403838360">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white md:text-2xl font-bold py-3 px-6 rounded-lg shadow-lg transition"> <div className="flex"><FaPhoneAlt className="mr-3"/>Call Us Now: +61 403 838 360</div></button>
          </Link>
          <Link href="/booking" target="_blank">
          <button className="rounded-lg shadow-md bg-blue-800 font-semibold text-white hover:bg-blue-900 cursor-pointer px-6 py-3 mt-3">
            Make a Booking
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Hero;
