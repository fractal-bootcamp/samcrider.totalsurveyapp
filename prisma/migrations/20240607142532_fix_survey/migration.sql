/*
  Warnings:

  - You are about to drop the `Survey` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Survey";

-- CreateTable
CREATE TABLE "survey" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "survey_pkey" PRIMARY KEY ("id")
);
