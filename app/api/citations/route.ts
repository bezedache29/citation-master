import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Add database query here once Prisma model is defined
    const citations = []; // await prisma.citation.findMany()
    return NextResponse.json({ citations });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch citations", defaultError: error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const citation = formData.get("citation");
  const author = formData.get("author");

  if (null === citation || null === author) {
    return NextResponse.json(
      {
        error: "Citation and author are required",
      },
      { status: 400 }
    );
  }

  const newCitation = await prisma.citation.create({
    data: { citation: citation.toString(), author: author.toString() },
  });

  return NextResponse.json({
    citation: newCitation,
  });
}
