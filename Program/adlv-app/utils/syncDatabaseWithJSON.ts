import fs from "fs";
import { PrismaClient } from "@prisma/client";
import path from "path";

const prisma = new PrismaClient();

async function syncDatabaseWithJSON() {
  try {
    // 1. Baca File JSON
    const filePath = path.join(__dirname, "products.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const jsonItems = JSON.parse(fileData);

    // 2. Ambil Data dari Database
    const dbItems = await prisma.catalog.findMany();

    // 3. Bandingkan Data
    const jsonTitles = jsonItems.map((item: { title: string }) => item.title);
    const dbTitles = dbItems.map((item) => item.title);

    // a. Hapus Item yang Tidak Ada di JSON
    const itemsToDelete = dbItems.filter((item) => !jsonTitles.includes(item.title));
    for (const item of itemsToDelete) {
      await prisma.catalog.delete({ where: { id: item.id } });
      console.log(`Deleted: ${item.title}`);
    }

    // b. Tambahkan Item Baru dari JSON
    const itemsToAdd = jsonItems.filter((item: { title: string }) => !dbTitles.includes(item.title));
    for (const item of itemsToAdd) {
      await prisma.catalog.create({ data: item });
      console.log(`Added: ${item.title}`);
    }

    // c. Perbarui Item yang Sudah Ada
    const itemsToUpdate = dbItems.filter((dbItem) =>
      jsonItems.some(
        (jsonItem: { title: string; price: number }) =>
          jsonItem.title === dbItem.title && jsonItem.price !== dbItem.price
      )
    );
    for (const item of itemsToUpdate) {
      const updatedItem = jsonItems.find((jsonItem: { title: string }) => jsonItem.title === item.title);
      if (updatedItem) {
        await prisma.catalog.update({
          where: { id: item.id },
          data: updatedItem,
        });
        console.log(`Updated: ${item.title}`);
      }
    }

    console.log("Database sync complete.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

syncDatabaseWithJSON();
