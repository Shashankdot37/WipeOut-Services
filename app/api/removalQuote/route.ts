import { NextResponse } from "next/server";
import RemovalQuote from "@/models/RemovalQuoteSchema";
import connectToDB from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDB();
    const quotes = await RemovalQuote.find();
    return NextResponse.json({ data: quotes }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching the removal quote data." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();
    const data = await request.json();
    const newquote = RemovalQuote.create(data);
    return NextResponse.json(
      {
        message: "New removal quote data created successfully.",
        data: newquote,
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
