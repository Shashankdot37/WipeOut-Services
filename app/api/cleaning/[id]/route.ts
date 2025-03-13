import connectToDB from "@/lib/mongoose";
import CleaningForm from "@/models/CleaningFormSchema";
import { error } from "console";
import { NextResponse,NextRequest } from "next/server";

export async function PATCH(request:NextRequest,{params}:{params:{id:string}})
{
try {
    await connectToDB();
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

export async function PUT(request:NextRequest)
{
    try {
        await connectToDB();
        const url = new URL(request.nextUrl)
        const id = url.pathname.split('/').pop()
        if(!id)
        {
            return NextResponse.json({error:"Booking Id is required"},{status:400})
        }
        const body = await request.json();

        const updatedBooking = await CleaningForm.findByIdAndUpdate(
        id,
        {adminNote:body.adminNote},
        {new:true}
        )

        if(!body.adminNote)
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