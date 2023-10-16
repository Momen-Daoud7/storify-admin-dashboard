import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;

    // Check if the user exists
    if (!userId) {
      return new NextResponse("Unauthoraized", { status: 401 });
    }

    // Check if the name is entered
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prismadb.store.create({ data: { name, userId } });

    return NextResponse.json(store);
  } catch (error) {
    console.log(`[STORE_POST] ${error}`);
    return new NextResponse("Internal error", { status: 500 });
  }
}
