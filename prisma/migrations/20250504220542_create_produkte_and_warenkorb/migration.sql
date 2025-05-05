-- CreateTable
CREATE TABLE "Warenkorb" (
    "id" SERIAL NOT NULL,
    "sessionid" TEXT NOT NULL,
    "productid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Warenkorb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produkte" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "imgsrc" TEXT NOT NULL,

    CONSTRAINT "Produkte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Warenkorb_sessionid_productid_key" ON "Warenkorb"("sessionid", "productid");
