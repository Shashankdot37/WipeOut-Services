import connectToDB from "@/lib/mongoose";
import CleaningQuote from "@/models/CleaningQuoteSchema";
import { NextResponse,NextRequest } from "next/server";

export async function PATCH(request:NextRequest,{params}:{params:{id:string}})
{
try {
    await connectToDB;
    const {id} = params;
    const updatedquote = await CleaningQuote.findByIdAndUpdate(
        id,
        {status:"done"},
        {new:true}
    );
    if(!updatedquote)
    {
        return NextResponse.json({ error: "quote not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Status updated", data: updatedquote }, { status: 200 });
} catch (error) {
    return NextResponse.json({ error: "Error updating status" }, { status: 500 });
}
}