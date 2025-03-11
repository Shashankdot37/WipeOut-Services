"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FloatingCall = () => {
  return (
    <div className={cn("fixed button-6 right-6 z-50 animate-bounce", "transition duration-300")}>
      <Link href="tel:+61403838360">
      <Button className="p-6 bg-green-600 hover:bg-green-700 shadow-lg rounded-full flex items-center gap-2  text-white text-lg">
        <FaPhoneAlt className="size-5 animate-pulse"/>
        Call Us
      </Button>
      </Link>
    </div>
  )
}

export default FloatingCall
