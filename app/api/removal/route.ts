import { NextResponse } from "next/server";
import RemovalForm from "@/models/RemovalFormSchema";
import connectToDB from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDB();
    const bookings = await RemovalForm.find();
    return NextResponse.json({ data: bookings }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching the removal booking data." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();
    const data = await request.json();
    const newBooking = RemovalForm.create(data);
    return NextResponse.json(
      {
        message: "New removal booking data created successfully.",
        data: newBooking,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending the data to database" },
      { status: 500 }
    );
  }
}
