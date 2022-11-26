/*
  Warnings:

  - You are about to drop the column `url` on the `Website` table. All the data in the column will be lost.
  - Added the required column `baseUrl` to the `Website` table without a default value. This is not possible if the table is not empty.
  - Added the required column `searchUrl` to the `Website` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "url",
ADD COLUMN     "baseUrl" TEXT NOT NULL,
ADD COLUMN     "searchUrl" TEXT NOT NULL;
