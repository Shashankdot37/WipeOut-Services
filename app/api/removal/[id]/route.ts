import connectToDB from "@/lib/mongoose";
import RemovalForm from "@/models/RemovalFormSchema";
import { NextRequest,NextResponse } from "next/server";

export async function PATCH(request:NextRequest, {params}:{params:{id:string}}){
try {
    await connectToDB();
    const {id} = params;
    const updatedBooking = await RemovalForm.findByIdAndUpdate(
        id,
        {status:"done"},
        {new:true}
    ) 
    if(!updatedBooking)
    {
        return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }
    return NextResponse.json({ message: "Status updated", data: updatedBooking }, { status: 200 });
} catch (error) {
    return NextResponse.json({ error: "Error updating status" }, { status: 500 });
}
}