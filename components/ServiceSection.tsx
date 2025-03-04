"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const services = [
  {
    id: 1,
    title: "Residential Cleaning",
    description: "Professional home cleaning services tailored to your needs.",
    //   image: "/assets/icons/cleaning.png",
  },
  {
    id: 2,
    title: "Commercial Cleaning",
    description: "Keep your office or business space spotless and hygienic.",
    //   image: "/assets/icons/commercial.png",
  },
  {
    id: 3,
    title: "Packing & Moving",
    description: "Hassle-free moving services for homes and offices.",
    //   image: "/assets/icons/moving.png",
  },
  {
    id: 4,
    title: "End of Leash Cleaning",
    description: "Cleaning for the End of Leash. Saves you time and energy.",
    //   image: "/assets/icons/deep-cleaning.png",
  },
];
const glassmorphism = "p-6 backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-lg hover:bg-white/30 transition";
const ServiceSection = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-2 lg:grid-cols-4 gap-6 px-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`${glassmorphism} flex flex-col bg-white h-full`}
            >
              <CardHeader className="">
                <CardTitle className="text-xl font-bold mt-4 text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="flex-grow mb-2">
                    {service.description}
                </p>
                <Button variant="outline" className="mt-auto w-full bg-gray-800 text-white shadow-sm cursor-pointer hover:border-gray-800"> Learn More </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
