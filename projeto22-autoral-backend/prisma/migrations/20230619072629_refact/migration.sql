/*
  Warnings:

  - You are about to drop the `credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `networks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_userId_fkey";

-- DropForeignKey
ALTER TABLE "networks" DROP CONSTRAINT "networks_userId_fkey";

-- DropTable
DROP TABLE "credentials";

-- DropTable
DROP TABLE "networks";
