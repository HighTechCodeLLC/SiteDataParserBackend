/*
  Warnings:

  - You are about to drop the column `urlBeginWith` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "urlBeginWith",
ADD COLUMN     "dateFormat" TEXT;
