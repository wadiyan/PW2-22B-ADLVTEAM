/*
  Warnings:

  - Added the required column `category` to the `Catalog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Catalog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `catalog` ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
