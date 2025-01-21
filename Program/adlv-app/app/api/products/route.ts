import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all catalogs or category
export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");

  try {
    let catalogs;
    if (category) {
      // Filter catalogs by category if the category is provided
      catalogs = await prisma.catalog.findMany({
        where: { category },
      });
    } else {
      // Fetch all catalogs if no category is specified
      catalogs = await prisma.catalog.findMany();
    }

    return new Response(JSON.stringify(catalogs), { status: 200 });
  } catch (error) {
    console.error("Error fetching catalogs:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch catalogs" }),
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const { title, description, price, image, category } = await req.json();

    const catalog = await prisma.catalog.create({
      data: { title, description, price, image, category },
    });

    return new Response(
      JSON.stringify({ message: "Catalog created successfully", catalog }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating catalog:", error);
    return new Response(JSON.stringify({ error: "Failed to create catalog" }), {
      status: 500,
    });
  }
}

export async function UPDATE(req: Request) {
  try {
    const { id, title, description, price } = await req.json();

    const catalog = await prisma.catalog.update({
      where: { id },
      data: { title, description, price },
    });

    return new Response(
      JSON.stringify({ message: "Catalog updated successfully", catalog }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating catalog:", error);
    return new Response(JSON.stringify({ error: "Failed to update catalog" }), {
      status: 500,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.catalog.delete({ where: { id } });
    return new Response(
      JSON.stringify({ message: "Catalog deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting catalog:", error);
    return new Response(JSON.stringify({ error: "Failed to delete catalog" }), {
      status: 500,
    });
  }
}
