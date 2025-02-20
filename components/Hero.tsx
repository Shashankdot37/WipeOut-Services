"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Removal & Transport Solutions for Sydney Businesses
        </h1>

        <p className="hero__subtitle">
          Reliable, fast, and hassle-free clearing, relocation, and disposal
          services tailored to your needs. Let us handle the heavy lifting while
          you focus on what matters.
        </p>
        <CustomButton
          title="Learn More"
          containerStyles="text-white rounded-full bg-green-500 mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" className="object-contain" fill />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
