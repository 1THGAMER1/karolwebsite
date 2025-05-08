"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";
import Image from "next/image";
import BuyButton from "@/app/components/buybutton.js";
import Cartbutton from "@/app/components/cartbutton.js";
import Shopnavbar from "@/app/components/shopnavbar";
import Footer from "@/app/components/footer";

export default function HomePage() {
    const [loading, setLoading] = useState(true);  // Zustand für das Laden
    const [products, setProducts] = useState([]);  // Zustand für die Produkte

    // Hole die Daten von der eigenen API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");  // Deine API-Endpunkt-URL
                const data = await response.json();
                setProducts(data);  // Produkte aus der API
            } catch (error) {
                console.error("Fehler beim Laden der Produkte:", error);
            } finally {
                setLoading(false);  // Ladezustand auf false setzen, wenn die Daten geladen sind
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="bg-gray-100">
           <Shopnavbar />

            {/* Hero Section */}
            <section className="bg-cover bg-center h-[500px] pt-16" style={{/* backgroundImage: 'url("/hero-image.jpg")' */}}>
                <div className="h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl text-white font-semibold text-center p-4">Willkommen bei Karol&#39;s Shop!</h1>
                </div>
            </section>
            {/* Featured Products */}
            <section className="container mx-auto py-16">
                <h2 className="text-3xl text-center font-bold mb-12 text-gray-700">Vorgestellte Produkte</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {/* Wenn Daten noch geladen werden, zeige das Skeleton */}
                    {loading
                        ? [1, 2, 3, 4].map((skeleton) => (
                            <div key={skeleton} className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
                                <div className="h-64 bg-gray-300 mb-4 rounded-lg"></div>
                                <div className="h-4 bg-gray-300 mb-2 rounded-md"></div>
                                <div className="h-4 bg-gray-300 mb-2 rounded-md"></div>
                            </div>
                        ))
                        : // Wenn Daten geladen sind, zeige die echten Produkte
                        products.map((product) => (
                            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                                <Link href={`/shop/products/${product.id}`}>
                                    <Image
                                        src={product.imgsrc}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-64 object-contain mb-4 rounded-lg" />
                                </Link>
                                <div className="flex items-center justify-between">
                                    <Link href={`/shop/products/${product.id}`}>
                                        <h3 className="text-2xl font-semibold text-gray-400">{product.name}</h3>
                                    </Link>
                                    <p className="text-xl text-gray-600 font-semibold">{product.price}€</p>
                                </div>
                                <Cartbutton productId = {product.id} />
                                <BuyButton productId = {product.id} />
                            </div>
                        ))}
                </div>
            </section>
            <Footer />
            <Analytics/>
            <SpeedInsights/>
        </div>
    );
}
