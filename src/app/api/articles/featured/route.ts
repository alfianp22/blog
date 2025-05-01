import { NextResponse } from "next/server";

const BACKENDLESS_REST_API = "https://humblelevel-us.backendless.app/api/data/Articles";

export async function GET() {
  try {
    const response = await fetch(`${BACKENDLESS_REST_API}?sortBy=created%20DESC&pageSize=1`);

    if (!response.ok) {
      throw new Error(`Failed to fetch from Backendless: ${response.status}`);
    }

    const articles = await response.json();

    if (!articles.length) {
      return NextResponse.json({ error: "No featured article" }, { status: 404 });
    }

    return NextResponse.json(articles[0]);
  } catch (error) {
    console.error("🔥 Error fetch featured article:", error);
    return NextResponse.json({ error: "Server error", message: String(error) }, { status: 500 });
  }
}
