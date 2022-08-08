/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `departamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `funcao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `prioridade_reuniao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `reuniao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `sala` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_sala` to the `reuniao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reuniao" ADD COLUMN     "fk_sala" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "departamento_nome_key" ON "departamento"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "funcao_nome_key" ON "funcao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "prioridade_reuniao_descricao_key" ON "prioridade_reuniao"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "reuniao_title_key" ON "reuniao"("title");

-- CreateIndex
CREATE UNIQUE INDEX "sala_nome_key" ON "sala"("nome");

-- AddForeignKey
ALTER TABLE "reuniao" ADD CONSTRAINT "reuniao_sala" FOREIGN KEY ("fk_sala") REFERENCES "sala"("pk_sala") ON DELETE RESTRICT ON UPDATE CASCADE;
