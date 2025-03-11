"use client";
import { useState } from "react"

const QuoteButtonStatus = ({quoteId, type, status}:{quoteId:string, type:string, status:string}) => {
    const[loading,setLoading]= useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);
    const handleStatusUpdate = async () =>
    {
        setLoading(true);
        const res = await fetch(`/api/${type}/${quoteId}`,{
            method:"PATCH",
        });

        if(res.ok){
            setCurrentStatus("done");
        }
        else
        {
            alert("Error updating status.")
        }

        setLoading(false);
    }
  return (
    <button onClick={handleStatusUpdate} disabled={currentStatus==="done"||loading}
    className={`px-4 py-2 rounded ${currentStatus==="done"? "bg-gray-400 cursor-not-allowed" : "text-white bg-blue-600 hover:bg-blue-800"}`}>
        {loading?"Updating...":currentStatus==="done"?"Completed":"Mark as Done"}
    </button>
  )
}

export default QuoteButtonStatus
