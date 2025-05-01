import { NextRequest } from "next/server";

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID;
const REST_API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;

export async function GET(
  request: NextRequest,
  context: { params: { postId: string } }
) {
  try {
    const { postId } = await context.params;

    const url = `https://humblelevel-us.backendless.app/api/data/Articles/${postId}`;

    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'application-id': APP_ID!,
        'secret-key': REST_API_KEY!,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch article" }),
        { status: res.status }
      );
    }

    const article = await res.json();

    return new Response(JSON.stringify(article), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ error: "Server error", message: (error as Error).message }),
      { status: 500 }
    );
  }
}
