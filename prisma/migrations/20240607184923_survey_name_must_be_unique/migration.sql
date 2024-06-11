/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `survey` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "survey_title_key" ON "survey"("title");
