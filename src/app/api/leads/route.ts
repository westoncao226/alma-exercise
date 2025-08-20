import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `https://api.mockaroo.com/api/${process.env.NEXT_PUBLIC_MOCKAROO_API_ID}?count=20&key=${process.env.NEXT_PUBLIC_MOCKAROO_API_KEY}`
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Mockaroo API error:", response.status, text);
      return NextResponse.json(
        { error: "Mockaroo API failed" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
