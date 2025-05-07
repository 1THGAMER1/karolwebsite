"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuyButton() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            router.push("/shop/cart");
        }, 250);
    };

    return (
        <button
            onClick={handleClick}
            disabled={clicked}
            className={`
        rounded-lg py-2 mt-4 w-full
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
// TODO : Warenkorb wird nicht aktualisiert.