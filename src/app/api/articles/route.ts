import { NextResponse } from "next/server";

const BACKENDLESS_REST_API = "https://humblelevel-us.backendless.app/api/data/Articles";

export async function GET() {
  try {
    const response = await fetch(`${BACKENDLESS_REST_API}?sortBy=created%20DESC`);

    if (!response.ok) {
      throw new Error(`Failed to fetch from Backendless: ${response.status}`);
    }

    const articles = await response.json();

    return NextResponse.json(articles);
  } catch (error) {
    console.error("🔥 Error fetch latest posts:", error);
    return NextResponse.json({ error: "Server error", message: String(error) }, { status: 500 });
  }
}
