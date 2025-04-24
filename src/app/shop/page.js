"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BuyButton from "@/app/components/buybutton.js";
import Cartbutton from "@/app/Components/cartbutton.js";

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
            {/* Header */}
            <header className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">Karol's Shop</div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Me</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li className="ml-4">
                                <Link href="/cart" className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

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
