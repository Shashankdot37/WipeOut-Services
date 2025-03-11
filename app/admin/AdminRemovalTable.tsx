"use client";
import { useEffect, useState } from "react";
import AdminButtonStatus from "./AdminButtonStatus";
import { RemovalForm } from "@/types";
import AdminNoteEditor from "./AdminNoteEditor";

const AdminRemovalTable = () => {
  const [removalData, setRemovalData] = useState<RemovalForm[]>([]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch("/api/removal", { method: "GET" });
        const data = await res.json();
        console.log("Fetched removal bookings:", data);
        setRemovalData(Array.isArray(data.data) ? data.data : []);
        console.log("State removal data: ", removalData)
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setRemovalData([]);
      }
    };
    setIsClient(true);
    fetchBooking();
  }, []);

  useEffect(()=>{
    console.log("Updated removal data: ", removalData)
  },[removalData]);

  const updateNoteInState=(bookingId:string,newNote:string)=>{
    setRemovalData((prevData)=>
      prevData.map((booking)=>
        booking._id === bookingId?{...booking,adminNote:newNote}:booking
      )
    )
  }
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">From</th>
          <th className="border p-2">To</th>
          <th className="border p-2">Service Type</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
          <th className="border p-2">Admin Note</th>
        </tr>
      </thead>
      <tbody>
        {removalData.length === 0? (<tr>
          <td colSpan={5} className="text-center border p-2">No bookings available</td>
        </tr>):(
        removalData.map((booking) => (
          <tr key={booking._id}>
            <td className="border p-2">{booking.from}</td>
            <td className="border p-2">{booking.to}</td>
            <td className="border p-2">{booking.serviceType}</td>
            <td className="border p-2">{booking.phone}</td>
            <td className="border p-2">{booking.email ?? "N/A"}</td>
            <td className="border p-2">
            {isClient ? new Date(booking.date).toISOString().split("T")[0] : "Loading..."}
            </td>
            <td className="border p-2">{booking.status}</td>
            <td className="border p-2">
              <AdminButtonStatus
                type="removal"
                bookingId={booking._id}
                status={booking.status}
              />
            </td>
            <td className="border p-2">
              <AdminNoteEditor
              onUpdateNote={updateNoteInState}
              type="removal"
              bookingId={booking._id}
              initialNote={booking.adminNote}
              />
            </td>
          </tr>
        )))}
      </tbody>
    </table>
  );
};

export default AdminRemovalTable;
