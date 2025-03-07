import { NextResponse } from "next/server";
import CleaningForm from "@/models/CleaningFormSchema";
import connectToDB from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDB();
    const bookings = await CleaningForm.find();
    return NextResponse.json({ data: bookings }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching the cleaning booking." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();
    const data = await request.json();
    const newBookings = CleaningForm.create(data);
    return NextResponse.json(
      {
        message: "New cleaning booking data created successfully.",
        data: newBookings,
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
