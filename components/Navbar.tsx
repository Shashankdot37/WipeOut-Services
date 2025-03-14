"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-gray-200 shadow-md">
      <div className="container flex mx-auto items-center justify-between md:px-8">
        <div className="flex items-center">
          <h1 className="md:text-2xl text-xl font-bold">
            Sydney Move and Clean
          </h1>
          <Image
            src="/logo.png"
            alt="Logo with truck written SMC on it."
            width={60}
            height={60}
          />
        </div>
        {/*HamBurger Menu (For small screens)*/}
        <button
          className="md:hidden text-gray-900 text-2xl my-3"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* For desktop navigation */}
        <NavigationMenu className="hidden md:flex flex-grow justify-center">
          <NavigationMenuList className="flex gap-6">
            <Link
              href="/services"
              className="transition text-white font-semibold"
            >
              <NavigationMenuItem className="border border-gray-700 hover:bg-gray-900 px-4 py-2 rounded-lg cursor-pointer bg-gray-400">
                Prices
              </NavigationMenuItem>
            </Link>
            <NavigationMenuItem>
              <Link
                href="/"
                className="hover:text-blue-900 transition text-gray-800"
              >
                Home
              </Link>
            </NavigationMenuItem>

            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-blue-600 transition cursor-pointer">
                <div className="flex flex-row">
                  {" "}
                  Services{" "}
                  <FaChevronDown
                    className="text-gray-800 mt-1.5 ml-0.5"
                    size={10}
                  />{" "}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/services#moving-services">House Moving</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/services#end-of-lease">
                    End of the Lease Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/services#moving-services">Office Moving</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/services#other-cleaning-services">
                    Office/Commerical Cleaning
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavigationMenuItem>
              <Link href="/about" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </NavigationMenuItem>
            <Button
              asChild
              className="ml-auto bg-orange-600 hover:bg-orange-800"
            >
              <Link href="tel:+61403838360">Contact Us</Link>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* For navigation on mobile phone */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-300 w-full flex flex-col items-center space-y-4 py-4">
          <Link
            href="/"
            className="text-lg text-gray-900"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-lg text-gray-900"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            Prices
          </Link>
          <Link
            href="/about"
            className="text-lg text-gray-900"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-900 text-lg">
              <div className="flex items-center">
                Services
                <FaChevronDown className="text-gray-900 mt-1 ml-1" size={10} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-100 p-2 rounded-md shadow-md">
              <DropdownMenuItem>
                <Link href="/services#moving-services">House Moving</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#end-of-lease">End of Lease Cleaning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#moving-services">Office Moving</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#other-cleaning-services">
                  Office/Commercial Cleaning
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="bg-orange-600 hover:bg-orange-800">
            <Link href="tel:+61403838360">Contact Us</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
