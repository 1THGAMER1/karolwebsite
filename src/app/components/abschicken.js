"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuyButton() {
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const handleClick = async () => {
        setClicked(true);  // Deaktiviert den Button visuell, sobald er geklickt wurde
        setLoading(false);  // Setzt den Lade-Status (optional, je nach Bedarf)

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
            });

            if (response.ok) {
                router.push("/shop/cart/complete");  // Weiterleitung nach erfolgreichem Checkout
            } else {
                alert("Fehler beim Abschicken der Bestellung");  // Fehlerbehandlung
            }
        } catch (error) {
            console.log("Checkout Fehler", error);
            alert("Fehler beim Abschicken der Bestellung");  // Fehlerbehandlung
        } finally {
            setLoading(true);  // Stellt den Lade-Status wieder her, unabhängig vom Ergebnis
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={clicked || !loading}  // Button wird nur aktiviert, wenn er nicht geklickt wurde und noch lädt
            className={`
                rounded-lg py-2 mt-4 w-full
                transition-colors duration-200
                ${clicked
                ? "bg-green-500 text-white cursor-default"  // Zustand nach Klick
                : "bg-green-600 text-emerald-950 hover:bg-green-400"  // Standardzustand
            }
            `}
        >
            {loading ? (clicked ? "Abschicken..." : "Sofort kaufen") : "Lädt..."}  {/* Button-Text je nach Lade-Status */}
        </button>
    );
}
