import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const BookingCTA = () => {
  return (
    <section className="bg-gray-200 py-16 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:text-2xl">Need a Reliable Cleaning or Removal Service?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link href="/booking" target="_blank">
                <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold px-6 py-3 rounded-lg text-lg shadow-lg cursor-pointer transition">
                    Book an Appointment
                </button>
                </Link>
                
                <a href="tel:+61403838360" className="text-lg font-bold text-gray-700 hover:text-orange-600 transition cursor-pointer">
                    <div className="border-2 rounded-lg border-gray-500 px-4 py-2 flex flex-row justify-center items-center"><FaPhoneAlt size={20} className="text-orange-600 mr-2.5"/>+61 403 838 360</div>
                
                </a>
            </div>
        </div>
    </section>
  )
}

export default BookingCTA
