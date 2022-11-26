/*
  Warnings:

  - Added the required column `url` to the `Website` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Website" ADD COLUMN     "url" TEXT NOT NULL;
