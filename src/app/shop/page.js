"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/Image";
import BuyButton from "@/app/components/buybutton.js";
import Cartbutton from "@/app/Components/cartbutton.js";
import Shopnavbar from "@/app/Components/shopnavbar";

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
            <section className="bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url("/hero-image.jpg")' }}>
                <div className="h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl text-white font-semibold text-center">Willkommen im Beispielshop!</h1>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto py-16">
                <h2 className="text-3xl text-center font-bold mb-12 text-gray-600">Vorgestellte Produkte</h2>
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
                                <img src={product.imgSrc} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
                                <h3 className="text-xl font-semibold text-gray-400">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                                <Cartbutton />
                                <BuyButton />
                            </div>
                        ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Beispiel Shop. Alle Rechte vorbehalten.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <Link href="#">Facebook</Link>
                        <Link href="#">Twitter</Link>
                        <Link href="#">Instagram</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
