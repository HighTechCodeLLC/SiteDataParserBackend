/*
  Warnings:

  - You are about to drop the column `magnetUrl` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "magnetUrl",
ADD COLUMN     "magnetUrlSelector" TEXT;
