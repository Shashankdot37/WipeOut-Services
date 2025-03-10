import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaPhoneAlt, FaArrowLeft } from "react-icons/fa";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./ui/table";
import { Card,CardHeader,CardContent,CardTitle } from "./ui/card";

const ServicePage = () => {
  return (
    <div className="max-w-6xl px-4 py-12 mx-auto">
      <div className="mb-6">
        <Link href="/">
        <Button variant="outline" className="flex items-center gap-2">
          <FaArrowLeft className="size-5"/>
          Back to Home
        </Button>
        </Link>
      </div>
      <section id="end-of-lease" className="mb-12">
        <h2 className="text-3xl mb-4 font-bold">End of Lease Cleaning</h2>
        <p className="text-gray-600">Complete cleaning for rental properties before moving out.</p>
        <Table className=" mt-6">
          <TableHeader>
            <TableRow className="bg-gray-300">
              <TableHead className="border p-2 text-black font-bold">Services</TableHead>
              <TableHead className="border p-2 text-black font-bold">Prices</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {[
              ["Wall wash", "$25 per wall"],
              ["Sliding glass windows", "$45 per window"],
              ["Carpet cleaning", "$80 per room"],
              ["Balcony", "$50 - $100"],
              ["Garage", "$50 - $100"],
              ["1 Bedroom + 1 Bathroom", "$230"],
              ["2 Bedroom + 1 Bathroom", "$310"],
              ["3 Bedroom + 2 Bathroom", "$470"],
              ["4 Bedroom + 2 Bathroom", "$590"],
              ["5 Bedroom + 2 Bathroom", "$650"],
            ].map(([service, price], index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <TableCell>{service}</TableCell>
                <TableCell>{price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section id="other-cleaning-services" className="mb-12 px-6 py-3 bg-gray-100 border-2 border-gray-500 rounded-4xl">
        <h2 className="text-3xl font-bold mb-4">Other Cleaning Services</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
        {[
            "General Cleaning",
            "Deep Cleaning",
            "Regular Cleaning",
            "Restaurant Cleaning",
            "Construction Cleaning",
            "Commercial Cleaning",
            "Carpet Cleaning",
            "Apartment Cleaning",
            "Office Cleaning",
          ].map((service, index) => (
            <li key={index}>{service}</li>
          ))}
          <p className="mt-4 flex items-center gap-3">
            For prices, call us at   <Link href="tel:+61403838360"> <Button> <FaPhoneAlt className="text-white size-6"/>  <strong>+61 403 838 360</strong> </Button> </Link> 
          </p>
        </ul>
      </section>


      <section id="moving-services" className="mb-12 ">
        <h2 className="text-3xl font-bold mb-4">Moving Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
            { title: "Moving Interstate", description: "Safe and affordable moving across Australia." },
            { title: "Moving within Sydney", description: "Fast and reliable moving within Sydney." },
          ].map(({ title, description }, index) => (
            <Card key={index} className="border shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="moving-prices">
        <h2 className="font-bold text-3xl mb-4">Removal Service Prices</h2>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-200">
              <TableHead className="text-black font-bold">Services</TableHead>
              <TableHead className="text-black font-bold">Prices</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["An helper", "$40 per hr per man - minimum 2hr"],
              ["1 Van + 1 Helper", "$60 per hr - minimum 2hr"],
              ["1 Van + 2 men", "$95 per hr - minimum 2hr"],
              ["4.5 ton Truck + 1 man", "$85 per hr - minimum 2hr"],
              ["4.5 ton Truck + 2 men", "$110 per hr - minimum 2hr"],
              ["4.5 Truck + 3 men", "$145 per hr - minimum 2hr"],
            ].map(([service, price], index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <TableCell>{service}</TableCell>
                <TableCell>{price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default ServicePage;
