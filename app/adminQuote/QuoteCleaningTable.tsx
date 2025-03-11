"use client";
import QuoteButtonStatus from "./QuoteButtonStatus";
import { useEffect, useState } from "react";
import { CleaningQuoteAdmin } from "@/types";

const AdminCleaningTable = () => {
  const [cleaningQuotes, setCleaningQuotes] = useState<CleaningQuoteAdmin[]>(
    []
  );
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch("/api/cleaningQuote", { method: "GET" });
        const data = await res.json();
        setCleaningQuotes(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setCleaningQuotes([]);
      }
    };
    setIsClient(true);
    fetchQuotes();
  }, []);
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
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
        {cleaningQuotes.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center border p-2">
              No quotes available
            </td>
          </tr>
        ) : (
          cleaningQuotes.map((quote) => (
            <tr key={quote._id}>
              <td className="border p-2">{quote.name}</td>
              <td className="border p-2">{quote.serviceType}</td>
              <td className="border p-2">{quote.location}</td>
              <td className="border p-2">{quote.phone}</td>
              <td className="border p-2">{quote.email ?? "N/A"}</td>
              <td className="border p-2">{quote.bedrooms ?? "N/A"}</td>
              <td className="border p-2">{quote.bathrooms ?? "N/A"}</td>
              <td className="border p-2">
                {isClient
                  ? new Date(quote.date).toLocaleDateString()
                  : "Loading..."}
              </td>
              <td className="border p-2">{quote.time ?? "Not specified"}</td>
              <td className="border p-2">{quote.status}</td>
              <td className="border p-2">
                <QuoteButtonStatus
                  quoteId={quote._id}
                  type="cleaningQuote"
                  status={quote.status}
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
