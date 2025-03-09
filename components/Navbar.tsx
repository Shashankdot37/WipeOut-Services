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
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-200 shadow-md">
      <div className="container flex mx-auto items-center justify-between p-4">
        <h1 className="text-2xl font-bold">WipeOut Services</h1>
        <NavigationMenu className="flex flex-grow justify-center">
          <NavigationMenuList className="flex gap-6">
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
                  Services <FaChevronDown
                    className="text-gray-800 mt-1.5 ml-0.5"
                    size={10}
                  />{" "}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/">House Moving</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/">End of the Lease Cleaning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/">Office Moving</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1.5">
                  <Link href="/">Office/Commerical Cleaning</Link>
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
    </div>
  );
};

export default Navbar;
