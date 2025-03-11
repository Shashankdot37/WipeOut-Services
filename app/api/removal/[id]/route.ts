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

export async function PUT(request:NextRequest, {params}:{params:{id:string}})
{
    try {
        await connectToDB();
        const {id} = params;
        const {adminNote} = await request.json();
        const updatedBooking = await RemovalForm.findByIdAndUpdate(
        id,
        {adminNote},
        {new:true}
        )

        if(!adminNote)
        {
            return NextResponse.json({error:"Admin Note is required."},{status:400})
        }

        if(!updatedBooking)
        {
            return NextResponse.json({error:"Error updating the booking"},{status:404})
        }

        return NextResponse.json({message:"Admin Note updated", data:updatedBooking})
    } catch (error) {
        return NextResponse.json({ error: "Error updating admin note"}, { status: 500 });
    }
}