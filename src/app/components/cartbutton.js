"use client"

import { useState } from "react";

export default function Cartbutton({ productId }) {
    const [clicked, setClicked] = useState(false);  // Zustand für Klick
    const [quantity, setQuantity] = useState(1);    // Zustand für die Anzahl
    const [addedToCart, setAddedToCart] = useState(false);  // Warenkorb hinzugefügt

    // Funktion zum klicken und für Animation
    const handleFirstClick = () => {
        setClicked(true);  // Button wird kleiner
    };

    // Funktion für den finalen Klick, um zum Warenkorb hinzuzufügen
    const handleFinalClick = async () => {
        const response = await fetch("/api/cart/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({productId, quantity})
        })
        // setAddedToCart(true);  // Optional: Kann anzeigen, dass das Produkt zum Warenkorb hinzugefügt wurde
        if (response.ok) {
            setAddedToCart(true);
        } else {
            alert("Error creating cart");
        }
        setClicked(false);     // Button wieder in den Ausgangszustand versetze
    };

    return (
        <div className="relative">
            <button
                onClick={clicked ? handleFinalClick : handleFirstClick}
                className={`
          ${clicked ? "bg-green-500 hover:bg-green-600 text-white px-2 py-2 text-sm" : "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2"} 
          rounded-lg mt-4 w-full transition-all duration-300
          ${clicked ? "transform scale-90" : ""}
        `}
            >
                {/* TODO Umgehung der Warenkorb Kontrolle durch wiederholtes Anklicken || Zu fixen */}

                {addedToCart ? "Hinzugefügt ✓" : clicked ? "Bestätigen" : "Dem Warenkorb hinzufügen"}
            </button>

            {/* Anzahl Auswahl nur, wenn der Button kleiner gemacht wurde */}
            {clicked && !addedToCart && (
                <div className="mt-4 flex justify-center items-center space-x-4">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        max="10"
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-16 text-center border border-gray-300 rounded text-black"
                    />
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}
