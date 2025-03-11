"use client";
import { useEffect, useState } from "react";
import QuoteButtonStatus from "./QuoteButtonStatus";
import { RemovalQuoteAdmin } from "@/types";

const QuoteRemovalTable = () => {
  const [removalQuote, setRemovalQuote] = useState<RemovalQuoteAdmin[]>([]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("/api/removalQuote", { method: "GET" });
        const data = await res.json();
        console.log("Fetched removal quotes:", data);
        setRemovalQuote(Array.isArray(data.data) ? data.data : []);
        console.log("State removal data: ", removalQuote)
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setRemovalQuote([]);
      }
    };
    setIsClient(true);
    fetchQuote();
  }, []);

  useEffect(()=>{
    console.log("Updated removal data: ", removalQuote)
  },[removalQuote])
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
        <th className="border p-2">Name</th>
          <th className="border p-2">From</th>
          <th className="border p-2">To</th>
          <th className="border p-2">Service Type</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {removalQuote.length === 0? (<tr>
          <td colSpan={5} className="text-center border p-2">No quotes available</td>
        </tr>):(
        removalQuote.map((quote) => (
          <tr key={quote._id}>
            <td className="border p-2">{quote.name}</td>
            <td className="border p-2">{quote.from}</td>
            <td className="border p-2">{quote.to}</td>
            <td className="border p-2">{quote.serviceType}</td>
            <td className="border p-2">{quote.phone}</td>
            <td className="border p-2">{quote.email ?? "N/A"}</td>
            <td className="border p-2">
            {isClient ? new Date(quote.date).toISOString().split("T")[0] : "Loading..."}
            </td>
            <td className="border p-2">{quote.status}</td>
            <td className="border p-2">
              <QuoteButtonStatus
                type="removalQuote"
                quoteId={quote._id}
                status={quote.status}
              />
            </td>
          </tr>
        )))}
      </tbody>
    </table>
  );
};

export default QuoteRemovalTable;
