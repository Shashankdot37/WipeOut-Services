"use client";
import Searchbar from "./Searchbar";
import MapComponent from "./MapComponent";
import { useState } from "react";

const BookingAppointment = () => {
    const [selectedLocation, setSelectedLocation] = useState<{lat:number, lng:number}>({lat: -33.8688,
        lng: 151.2093})
    const[serviceType, setServiceType]=useState("")
    const[appointmentDate, setAppointmentDate]=useState("")
    const[contactInfo, setContactInfo]=useState("")

    const handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();

      const bookingData = {
        serviceType:serviceType,
        location: selectedLocation,
        appointmentDate:appointmentDate,
        contactInfo:contactInfo
      }

      console.log(`Booking Submitted: ${bookingData}`)

      //TODO: Send this data to backend (API Call)
    }

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-semibold underline underline-offset-1">Book the appointment</h1>
        <p>Explore our services</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div>
      <label className="block text-2xl font-semibold mb-2">Select Service Type</label>
        <Searchbar service={serviceType} setService={setServiceType}/>
      </div>
      <div className="mt-6">
        <div className="text-2xl font-semibold mb-2">Select your Location</div>
        <MapComponent onLocationSelect={(lat,lng)=>{setSelectedLocation({lat,lng})}}/>
        <p className="mt-2 text-sm text-gray-700">Selected Location: {selectedLocation.lat}, {selectedLocation.lng}</p>
      </div>

      <div>
        <label className="text-2xl font-semibold block mb-2">Select Date and Time</label>
          <input type="datetime-local"
          value={appointmentDate}
          className="border rounded-full p-2 w-[60vw]"
          onChange={(e)=>{setAppointmentDate(e.target.value)}}
          required
          />
      </div>

      <div>
      <label className="text-2xl font-semibold block mb-2">Enter your Contact Info</label>
      <input type="text"
      required
      placeholder="Enter your phone number or email address"
      value={contactInfo}
      onChange={(e)=>{setContactInfo(e.target.value)}}
      className="border rounded-full p-4 w-[60vw]"
       />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-900">
          Book Appointment
      </button>
      </form>
    </div>
  );
};

export default BookingAppointment;
