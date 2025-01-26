/*
  Warnings:

  - Made the column `UserId` on table `Catalog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Catalog" ALTER COLUMN "UserId" SET NOT NULL,
ALTER COLUMN "UserId" SET DEFAULT '';
