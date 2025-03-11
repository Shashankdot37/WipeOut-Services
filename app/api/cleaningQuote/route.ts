import { NextResponse } from "next/server";
import CleaningQuote from "@/models/CleaningQuoteSchema";
import connectToDB from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDB();
    const quotes = await CleaningQuote.find();
    return NextResponse.json({ data: quotes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching the cleaning quote." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();
    const data = await request.json();
    const newquotes = CleaningQuote.create(data);
    return NextResponse.json(
      {
        message: "New cleaning quote data created successfully.",
        data: newquotes,
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
