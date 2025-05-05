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
import { getSessionIdFromCookies } from "@/lib/session-client"; // sicherstellen, dass es korrekt importiert ist

export default function CartPage() {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                // Holt die session_id direkt aus den Cookies
                const sessionId = getSessionIdFromCookies();
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

    // Hilfsfunktion zur Preisformatierung
    const formatPrice = (decimal) => {
        return parseFloat(decimal).toFixed(2);
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen flex flex-col">
            <Shopnavbar />
            <section className="flex-grow container mx-auto py-16">
                <header className="text-white items-center flex justify-center font-semibold mb-auto min-h-[80px]">
                    <h1>Dein Warenkorb</h1>
                </header>
                <div className="flex-grow p-4">
                    <AnimatePresence>
                        {loading ? (
                            [1, 2, 3].map((skeleton) => (
                                <motion.div
                                    key={skeleton}
                                    className="bg-white p-6 shadow-lg mb-4 animate-pulse"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="h-4 bg-gray-200 mb-2"></div>
                                    <div className="h-4 bg-gray-200 mb-2"></div>
                                </motion.div>
                            ))
                        ) : Array.isArray(cart) && cart.length === 0 ? (
                            <p className="text-center text-gray-500">Dein Warenkorb ist leer.</p>
                        ) : (
                            cart.map((item) => (
                                <motion.div
                                    key={item.productid}
                                    className="bg-white p-6 flex items-center border-t border-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="flex-shrink-0">
                                        {item.product && item.product.imgsrc ? (
                                            // TODO Benutzung von next/Image
                                            <img
                                                src={item.product.imgsrc}
                                                alt={item.product.name}
                                                className="w-24 h-24 object-cover rounded-lg mr-4 hover:scale-140"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4"></div> // Platzhalterbild
                                        )}
                                    </div>
                                    <div className="flex-1 px-4">
                                        <p className="text-xl font-semibold text-gray-500">
                                            Produkt: {item.product?.name || "Unbekannt"}
                                        </p>
                                        <p className="text-xl font-semibold text-gray-400">
                                            Preis: {formatPrice(item.product?.price)} €
                                        </p>
                                        <p className="text-xl font-semibold text-gray-400">
                                            Menge: {item.quantity}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 ml-4 text-xl font-bold text-gray-950">
                                        <p>
                                            {(
                                                item.quantity *
                                                parseFloat(item.product?.price.toString())
                                            ).toFixed(2)}{" "}
                                            €
                                        </p>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
                <FinalBuyButton />
            </section>
            <footer className="mt-auto p-4">
                <Footer />
            </footer>
            <Analytics/>
            <SpeedInsights/>
        </div>
    );
}
