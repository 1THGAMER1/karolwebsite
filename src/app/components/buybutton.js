"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuyButton({ productId }) {
    const [clicked, setClicked] = useState(false);
    const quantity = 1;
    const router = useRouter();

    const handleClick = async () => {
        const response = await fetch("/api/cart/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({productId, quantity})
        })
        setClicked(true);
        if (response.ok) {
            console.log("Erfolg!");
        }else{
            alert("Fehler bei der Erstellung des Warenkorbs.");
            setClicked(false)
        }

        setTimeout(() => {
            router.push("/shop/cart");
        }, 350);
    };

    return (
        <button
            onClick={handleClick}
            disabled={clicked}
            className={`
        rounded-lg py-2 mt-4 w-full h-fit
        transition-colors duration-200
        ${clicked
                ? "bg-green-500 text-white cursor-default"    // Zustand nach Klick
                : "bg-amber-400 text-emerald-950 hover:bg-amber-500"  // Normalzustand
            }
      `}
        >
            {clicked ? "Hinzugefügt ✓" : "Sofort kaufen"}
        </button>
    );
}