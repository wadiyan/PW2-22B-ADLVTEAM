// "use server";

// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import { auth,currentUser } from "@clerk/nextjs/server";

// const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const user = await auth;

//   // Parsing request body
//   const body = await request.json().catch(() => null);
//   if (!auth.) {
//     console.error("Request body is null or invalid.");
//     return NextResponse.json(
//       { error: "Invalid JSON or empty body" },
//       { status: 400 }
//     );
//   }

//   const { titleProduct, descProduct, priceProduct, imageProduct, ctProduct } =
//     body;

//   // Validasi input
//   const missingFields = [];
//   if (!titleProduct) missingFields.push("titleProduct");
//   if (!descProduct) missingFields.push("descProduct");
//   if (!priceProduct) missingFields.push("priceProduct");
//   if (!imageProduct) missingFields.push("imageProduct");
//   if (!ctProduct) missingFields.push("ctProduct");

//   if (missingFields.length > 0) {
//     console.error("Missing fields:", missingFields);
//     return NextResponse.json(
//       { error: `Missing fields: ${missingFields.join(", ")}` },
//       { status: 400 }
//     );
//   }

//   try {
//     // Buat catalog baru
//     const newCatalog = await prisma.catalog.create({
//       data: {
//         titleProduct,
//         descProduct,
//         priceProduct,
//         imageProduct,
//         ctProduct,
//       },
//     });

//     if (!newCatalog) {
//       console.error("newCatalog is null.");
//       return NextResponse.json(
//         { error: "Failed to create catalog. newCatalog is null." },
//         { status: 500 }
//       );
//     }

//     console.log("Catalog created successfully:", newCatalog);
//     return NextResponse.json(newCatalog, { status: 201 });
//   } catch (error: any) {
//     console.error("Error creating catalog:", error);
//     return NextResponse.json(
//       {
//         error:
//           error.message || "Failed to create catalog. Please try again later.",
//       },
//       { status: 500 }
//     );
//   }
// }
