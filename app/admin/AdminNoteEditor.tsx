"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const AdminNoteEditor = ({bookingId,initialNote,type,onUpdateNote}:{bookingId:string;initialNote?:string;type:string;onUpdateNote:(id:string,note:string)=>void;}) => {
    const [note,setNote] = useState(initialNote || "");
    const [isUpdating,setIsUpdating] = useState(false);

    const handleUpdateNotes = async ()=>{
        if(!note.trim()) return;

        try {
            setIsUpdating(true);
            const res = await fetch(`/api/${type}/${bookingId}`,{
                method:'PUT',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({adminNote:note})
            });
            const data = await res.json();
            if(!res.ok) throw new Error(data.error);
            console.log("Note updated successfully", data);
            onUpdateNote(bookingId,note);
        } catch (error) {
            console.error("Error updating note:", error);
        } finally {
            setIsUpdating(false)
        }
    }
  return (
    <div className="flex flex-col">
      <textarea placeholder="Add a note..." rows={2} onChange={(e)=>{setNote(e.target.value)}} className="border rounded w-full p-2" value={note}/>
        <Button  className="mt-2 bg-blue-500 text-white py-1 px-3 rounded disabled:opacity-50" disabled={isUpdating} onClick={handleUpdateNotes}>{isUpdating? "Saving":"Save Note"}</Button>
    </div>
  )
}

export default AdminNoteEditor
