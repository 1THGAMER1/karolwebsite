import prisma from "@/lib/prisma";
import ProductBigPicture from "./ProductBigPicture"; // Import the client component
import Shopnavbar from "@/app/components/shopnavbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BuyButton from "@/app/components/buybutton";
import Cartbutton from "@/app/components/cartbutton";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }) {
    const { id } = await params;
    const productId = parseInt(id);
    if (isNaN(id) || !productId) {
        return (
            <div> Fehler. Diese Seite existiert nicht. <Link href="/shop" className="cursor-pointer underline"> Hier geht&#39;s zurück zur Hauptseite!</Link></div>
        )
    }
    const product = await prisma.produkte.findUnique({
        where: { id: productId },
    });

    if (!product) {
        return (
            <div className="flex-grow container mx-auto py-16">Dieses Produkt gibt es wahrscheinlich (noch) nicht!
                <Link href="/shop" className="cursor-pointer underline"> Hier geht&#39;s zurück zur Hauptseite!</Link>
            </div>
        )
    }

    return <ProductClient product={{ ...product, price: product.price.toNumber() }} />;
}

function ProductClient({ product }) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Shopnavbar />
            <section className="flex-grow container mx-auto py-16 text-black mt-6">
                <header className="relative text-black flex justify-center items-center font-bold min-h-[80px] px-4">
                    <Link
                        href="/shop"
                        className="absolute left-4 top-1/2 -translate-y-1/2 block md:left-6"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            fill="none"
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                        </svg>
                    </Link>
                    <h1 className="text-xl sm:text-lg md:text-3xl">{product.name}</h1>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                    <div className="flex justify-center">
                        <ProductBigPicture product={product} />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <p className="text-sm sm:text-base md:text-lg mb-4">{product.description}</p>
                        <p className="text-xl font-semibold">{product.price} €</p>
                    </div>
                    <Cartbutton productId={product.id} />
                    <BuyButton productId={product.id} />
                </div>
            </section>
            <Footer />
            <Analytics />
            <SpeedInsights />
        </div>
    );
}
