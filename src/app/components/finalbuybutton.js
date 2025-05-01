"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"

export default function FinalBuyButton() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            router.push("/shop/buy");
        }, 350);
    }
    return (
        <button
            onClick={handleClick}
            disabled={clicked}
            className={`rounded-lg py-2 mt-4 w-full
        ${clicked
                ? "bg-blue-500 hover:bg-blue-700 text-white" //Zustand nach dem Klick
                : "bg-amber-300 text-black hover:bg-amber-500"  // Normalzustand
            }
         `}
        >
            {clicked ? "Weiter zu den Zahlungsinformationen..." : "Weiter"}
        </button>
    )
}