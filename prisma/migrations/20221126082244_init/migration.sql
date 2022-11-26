-- CreateTable
CREATE TABLE "Website" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "selector" TEXT NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Website_name_key" ON "Website"("name");
