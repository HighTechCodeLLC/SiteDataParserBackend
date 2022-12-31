/*
  Warnings:

  - You are about to drop the column `skipRows` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "skipRows",
ADD COLUMN     "skipEndRows" INTEGER,
ADD COLUMN     "skipStartRows" INTEGER;
