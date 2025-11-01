import { NextResponse } from "next/server";

// In production, connect to database (Prisma, MongoDB, etc.)
export async function GET() {
  try {
    // Fetch strategies from database
    const strategies: any[] = [];
    return NextResponse.json(strategies);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch strategies" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Save strategy to database
    // const strategy = await prisma.strategy.create({ data: body });
    return NextResponse.json({ success: true, strategy: body });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create strategy" },
      { status: 500 }
    );
  }
}
