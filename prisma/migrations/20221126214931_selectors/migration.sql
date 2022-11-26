/*
  Warnings:

  - You are about to drop the column `dateColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `leechesColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `magnetColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `nameColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `seedsColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `sizeColumn` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `tableSelector` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Website" DROP COLUMN "dateColumn",
DROP COLUMN "leechesColumn",
DROP COLUMN "magnetColumn",
DROP COLUMN "nameColumn",
DROP COLUMN "seedsColumn",
DROP COLUMN "sizeColumn",
DROP COLUMN "tableSelector",
ADD COLUMN     "dateSelector" TEXT,
ADD COLUMN     "leechesSelector" TEXT,
ADD COLUMN     "linkSelector" TEXT,
ADD COLUMN     "magnetSelector" TEXT,
ADD COLUMN     "nameSelector" TEXT,
ADD COLUMN     "rowSelector" TEXT,
ADD COLUMN     "seedsSelector" TEXT,
ADD COLUMN     "sizeSelector" TEXT;
