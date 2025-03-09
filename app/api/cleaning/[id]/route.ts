import connectToDB from "@/lib/mongoose";
import CleaningForm from "@/models/CleaningFormSchema";
import { NextResponse,NextRequest } from "next/server";

export async function PATCH(request:NextRequest,{params}:{params:{id:string}})
{
try {
    await connectToDB;
    const {id} = params;
    const updatedBooking = await CleaningForm.findByIdAndUpdate(
        id,
        {status:"done"},
        {new:true}
    );
    if(!updatedBooking)
    {
        return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Status updated", data: updatedBooking }, { status: 200 });
} catch (error) {
    return NextResponse.json({ error: "Error updating status" }, { status: 500 });
}
}