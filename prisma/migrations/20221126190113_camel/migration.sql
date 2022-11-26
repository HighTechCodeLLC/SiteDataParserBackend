/*
  Warnings:

  - You are about to drop the column `DateColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `EndSymbols` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `LeechesColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `MagnetColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `NameColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `SeedsColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `SizeColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `SkipRows` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `UrlBeginWith` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "DateColumn",
DROP COLUMN "EndSymbols",
DROP COLUMN "LeechesColumn",
DROP COLUMN "MagnetColumn",
DROP COLUMN "NameColumn",
DROP COLUMN "SeedsColumn",
DROP COLUMN "SizeColumn",
DROP COLUMN "SkipRows",
DROP COLUMN "UrlBeginWith",
ADD COLUMN     "dateColumn" INTEGER,
ADD COLUMN     "endSymbols" TEXT,
ADD COLUMN     "leechesColumn" INTEGER,
ADD COLUMN     "magnetColumn" INTEGER,
ADD COLUMN     "nameColumn" INTEGER,
ADD COLUMN     "seedsColumn" INTEGER,
ADD COLUMN     "sizeColumn" INTEGER,
ADD COLUMN     "skipRows" INTEGER,
ADD COLUMN     "urlBeginWith" TEXT;
