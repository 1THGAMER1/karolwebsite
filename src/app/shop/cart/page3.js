"use client"

import '../../globals.css'
import Shopnavbar from "@/app/components/shopnavbar";
import Footer from "@/app/components/footer";
import FinalBuyButton from "@/app/components/finalbuybutton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

export default function CartPage(){
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const sessionId = await getSessionId(); // Deine Funktion, die die Session ID aus den Cookies holt
                if (!sessionId) {
                    console.error("Keine gültige Session ID.");
                    return;
                }

                const [cartResponse, productsResponse] = await Promise.all([
                    fetch(`/api/cart?session_id=${sessionId}`),  // Session ID mit in die Anfrage packen
                    fetch("/api/products"),
                ]);

                const cartData = await cartResponse.json();
                const productsData = await productsResponse.json();

                const enrichedCart = cartData.map((item) => {
                    const product = productsData.find(p => p.id === item.productId);
                    return {
                        ...item,
                        ...product
                    };
                });

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


    return(
        <div className="bg-gradient-to-b from-gray-900  to-gray-950 min-h-screen flex flex-col">
            <Shopnavbar />
            <section className="flex-grow container mx-auto py-16">
                        <header className="text-white items-center flex justify-center font-semibold mb-auto min-h-[80px]">
                            <h1> Dein Warenkorb </h1>
                        </header>
                    <div className="flex-grow p-4">
                        <AnimatePresence>
                    {
                        loading ? (
                            [1, 2, 3].map((skeleton) => (
                                <motion.div
                                    key={skeleton}
                                    className = "bg-white p-6 shadow-lg mb-4 animate-pulse"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}>
                                    <div className="h-4 bg-gray-200 mb-2"></div>
                                    <div className="h-4 bg-gray-200 mb-2"></div>
                                </motion.div>
                            ))
                        ) : Array.isArray(cart) && cart.length === 0 ? (
                            <p className="text-center text-gray-500">Dein Warenkorb ist leer.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.productId} className="bg-white p-6 flex items-center border-t border-gray-400">
                                    <div className="h-4 border-t"></div>
                                    <div className="flex-shrink-0">
                                        <img src={item.imgsrc}
                                             alt={item.title}
                                             className="w-24 h-24 object-cover rounded-lg mr-4 hover:scale-151" />
                                    </div>
                                    <div className="flex-1 px-4">
                                        <p className="text-xl font-semibold text-gray-500">Produkt: {item.name}</p>
                                        <p className="text-xl font-semibold text-gray-400">Preis: {item.price}</p>
                                        <p className="text-xl font-semibold text-gray-400">Menge: {item.quantity}</p>
                                    </div>
                                    <div className="flex-shrink-0 ml-4 text-xl font-bold text-gray-950">
                                        <p>{(item.quantity * parseFloat(item.price.replace("€", ""))).toFixed(2)} €</p>
                                    </div>
                                </div>
                            ))
                        )}
                        </AnimatePresence>
                </div>
                <FinalBuyButton />
            </section>

            <footer className="mt-auto p-4">
                <Footer />
            </footer>
        </div>
    );
}