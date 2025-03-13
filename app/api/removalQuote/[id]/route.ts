import connectToDB from "@/lib/mongoose";
import RemovalQuote from "@/models/RemovalQuoteSchema";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    await connectToDB();
    const url = new URL(request.nextUrl);
    const id = url.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { error: "Booking Id is required" },
        { status: 400 }
      );
    }
    const updatedquote = await RemovalQuote.findByIdAndUpdate(
      id,
      { status: "done" },
      { new: true }
    );
    if (!updatedquote) {
      return NextResponse.json({ error: "quote not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Status updated", data: updatedquote },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating status" },
      { status: 500 }
    );
  }
}
