"use client";
import AdminButtonStatus from "./AdminButtonStatus";
import { useEffect, useState } from "react";
import { CleaningForm } from "@/types";

const AdminCleaningTable = () => {
  const [cleaningBookings, setCleaningBookings] = useState<CleaningForm[]>([]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/cleaning", { method: "GET" });
        const data = await res.json();
        setCleaningBookings(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setCleaningBookings([]);
      }
    };
    setIsClient(true);
    fetchBookings();
  }, []);
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Service Type</th>
          <th className="border p-2">Location</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Bedrooms</th>
          <th className="border p-2">Bathrooms</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Time</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cleaningBookings.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center border p-2">
              No bookings available
            </td>
          </tr>
        ) : (
          cleaningBookings.map((booking) => (
            <tr key={booking._id}>
              <td className="border p-2">{booking.serviceType}</td>
              <td className="border p-2">{booking.location}</td>
              <td className="border p-2">{booking.phone}</td>
              <td className="border p-2">{booking.email ?? "N/A"}</td>
              <td className="border p-2">{booking.bedrooms ?? "N/A"}</td>
              <td className="border p-2">{booking.bathrooms ?? "N/A"}</td>
              <td className="border p-2">
                {isClient
                  ? new Date(booking.date).toLocaleDateString()
                  : "Loading..."}
              </td>
              <td className="border p-2">{booking.time ?? "Not specified"}</td>
              <td className="border p-2">{booking.status}</td>
              <td className="border p-2">
                <AdminButtonStatus
                  bookingId={booking._id}
                  type="cleaning"
                  status={booking.status}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AdminCleaningTable;
