import { Hero,BookingAppointment } from "@/components";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="border mt-4 mb-4 mr-2 ml-2 border-gray-300">
     <BookingAppointment/>
     </div>
    </main>
  );
}
