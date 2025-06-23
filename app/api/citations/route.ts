import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const citation = formData.get("citation");
    const author = formData.get("author");

    if (!citation || !author) {
      return NextResponse.json(
        { error: "Citation and author are required" },
        { status: 400 }
      );
    }

    // Add database persistence here once Prisma model is defined
    // const newCitation = await prisma.citation.create({
    //   data: { citation: citation.toString(), author: author.toString() }
    // });

    return NextResponse.json({
      citation: citation.toString(),
      author: author.toString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create citation", defaultError: error },
      { status: 500 }
    );
  }
}
