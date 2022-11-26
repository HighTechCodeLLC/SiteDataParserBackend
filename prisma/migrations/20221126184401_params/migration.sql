/*
  Warnings:

  - You are about to drop the column `magnetUrlSelector` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `selector` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "magnetUrlSelector",
DROP COLUMN "selector",
ADD COLUMN     "DateColumn" INTEGER,
ADD COLUMN     "LeechesColumn" INTEGER,
ADD COLUMN     "MagnetColumn" INTEGER,
ADD COLUMN     "NameColumn" INTEGER,
ADD COLUMN     "SeedsColumn" INTEGER,
ADD COLUMN     "SizeColumn" INTEGER,
ADD COLUMN     "SkipRows" INTEGER,
ADD COLUMN     "UrlBeginWith" TEXT,
ADD COLUMN     "isBaseUrlNeeded" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "tableSelector" TEXT,
ALTER COLUMN "baseUrl" DROP NOT NULL;
