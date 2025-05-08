"use client";

import '../../globals.css';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Shopnavbar from "@/app/components/shopnavbar";
import Footer from "@/app/components/footer";
import FinalBuyButton from "@/app/components/finalbuybutton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSessionIdFromCookies } from "@/lib/session-client";
import Link from "next/link";

export default function CartPage() {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const sessionId = getSessionIdFromCookies();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                // Holt die session_id direkt aus den Cookies
                if (!sessionId) {
                    console.error("Keine gültige Session ID.");
                    return;
                }

                // Verwende die session_id im fetch-Request, um den Warenkorb zu laden
                const response = await fetch(`/api/cart?session_id=${sessionId}`);
                const cartData = await response.json();

                // Hole Produktinformationen aus einer separaten API
                const productResponse = await fetch("/api/products"); // URL zu deiner Produkt-API
                const productData = await productResponse.json();

                // Verknüpfe jedes Cart-Item mit den Produktinformationen
                const enrichedCart = cartData.map((item) => {
                    const product = productData.find((p) => p.id === item.productid);
                    return {
                        ...item,
                        product: product || {}, // Falls das Produkt nicht gefunden wird, leer lassen
                    };
                });

                // Setze den Warenkorb mit den Produktinformationen
                setCart(enrichedCart);
            } catch (error) {
                console.log("Fehler beim Laden des Warenkorbs", error);
                setCart([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    const handleRemove = async (productid) => {
        try {
            const response = await fetch(`/api/cart?session_id=${sessionId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productid }),
            });

            if (!response.ok) {
                const result = await response.json();
                console.error("Fehler beim Entfernen:", result.error);
                return;
            }
            setCart((prevCart) => prevCart.filter(item => item.productid !== productid));
        } catch (error) {
            console.error("Fehler beim Entfernen des Artikels:", error);
        }
    };



    // Hilfsfunktion zur Preisformatierung
    const formatPrice = (decimal) => {
        return parseFloat(decimal).toFixed(2);
    };
    const totalPrice = cart.reduce((acc, item) => {
        const price = parseFloat(item.product?.price || 0);
        return acc + price * item.quantity;
    }, 0);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen flex flex-col">
            <Shopnavbar />
            <section className="flex-grow container mx-auto py-16">
                <header className="relative text-white flex justify-center items-center font-semibold min-h-[80px] px-4">
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
                    <h1 className="text-base sm:text-lg md:text-xl">Dein Warenkorb</h1>
                </header>
                <div className="flex-grow p-4">
                    <AnimatePresence>
                        {loading ? (
                            [1, 2, 3].map((skeleton) => (
                                <motion.div
                                    key={skeleton}
                                    className="bg-white p-4 sm:p-6 shadow-lg mb-4 animate-pulse rounded-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="h-4 bg-gray-200 mb-2 rounded"></div>
                                    <div className="h-4 bg-gray-200 mb-2 rounded"></div>
                                </motion.div>
                            ))
                        ) : Array.isArray(cart) && cart.length === 0 ? (
                            <p className="text-center text-gray-500">Dein Warenkorb ist leer.</p>
                        ) : (
                            cart.map((item) => (
                                <motion.div
                                    key={item.productid}
                                    className="bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center border-t border-gray-300 rounded-xl mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="w-full sm:w-auto flex justify-center sm:block">
                                        {item.product?.imgsrc ? (
                                            <Image
                                                src={item.product.imgsrc}
                                                alt={item.product.name}
                                                width={120}
                                                height={120}
                                                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-lg sm:text-xl font-semibold text-gray-700">
                                            {item.product?.name || "Unbekannt"}
                                        </p>
                                        <p className="text-base text-gray-500">
                                            {formatPrice(item.product?.price)} €
                                        </p>
                                        <p className="text-base text-gray-500">Menge: {item.quantity}</p>
                                    </div>
                                    <div className="flex flex-col items-end text-right sm:text-left">
                                        <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                            {(item.quantity * parseFloat(item.product?.price)).toFixed(2)} €
                                        </p>
                                        <div className="flex space-x-2 text-sm font-semibold">
                                            <p className="text-blue-500 cursor-not-allowed">bearbeiten</p>
                                            <p
                                                className="text-red-600 cursor-pointer"
                                                onClick={() => handleRemove(item.productid)}
                                            >
                                                entfernen
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>

                    {!loading && cart.length > 0 && (
                        <>
                            <div className="text-right text-white text-xl sm:text-2xl font-bold mt-8 px-4">
                                Gesamtpreis: {formatPrice(totalPrice)} €
                            </div>
                            <FinalBuyButton />
                        </>
                    )}
                </div>
            </section>
                <footer className="mt-auto p-4">
                <Footer />
            </footer>
            <Analytics/>
            <SpeedInsights/>
        </div>
    );
}