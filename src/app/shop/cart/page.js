"use client"

import '../../globals.css'
import Shopnavbar from "@/app/components/shopnavbar";
import { useState, useEffect } from "react";

export default function CartPage(){
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch("/api/cart");
                const data = await response.json();
                if (Array.isArray(data)) {
                    setCart(data);
                } else {
                    console.error("Erwartetes Array, aber bekommen: ", data)
                    setCart([])
                }
            } catch (error) {
                console.log("Fehler beim laden des Warenkorbs", error);
                setCart([])
            } finally {
                setLoading(false);
            }
        }
        fetchCart();
    }, [])

    return(
        <div>
            <Shopnavbar />
            <h1> Welcome to your Shoppingcart </h1>
            <section className="container mx-auto py-16">
                <div className="gap12">
                    {
                        loading ? (
                            [1, 2, 3, 4].map((skeleton) => (
                                <div key={skeleton} className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
                                    <div className="h-4 bg-gray-300 mb-2 rounded-md"></div>
                                    <div className="h-4 bg-gray-300 mb-2 rounded-md"></div>
                                    <div className="h-4 bg-gray-300 mb-2 rounded-md"></div>
                                </div>
                            ))
                        ) : Array.isArray(cart) && cart.length === 0 ? (
                            <p className="text-center text-gray-500">Dein Warenkorb ist leer.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.productId} className="bg-white p-6">
                                    <p className="text-xl font-semibold text-gray-500">ProduktId: {item.productId}</p>
                                    <p className="text-xl font-semibold text-gray-400">Menge: {item.quantity}</p>
                                </div>
                            ))
                        )
                    }
                    </div>

            </section>
        </div>
    );
}