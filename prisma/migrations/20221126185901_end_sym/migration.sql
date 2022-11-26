/*
  Warnings:

  - You are about to drop the column `IsAddPageInTheEnd` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `PageInTheEnd` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "IsAddPageInTheEnd",
DROP COLUMN "PageInTheEnd",
ADD COLUMN     "EndSymbols" TEXT;
