"use client"

import '../../globals.css'
import Shopnavbar from "@/app/components/shopnavbar";
import CompleteButton from "@/app/components/abschicken";

export default function BuyPage(){

    return(
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen flex flex-col">
            <section className="flex-grow container mx-auto py-16">
            <Shopnavbar />
                <header className="text-white items-center flex justify-center font-semibold mb-auto min-h-[80px]">
            <h1> Bestellung überprüfen </h1>
                    </header>
                <div className="flex-grow p-4">
                    < CompleteButton />
                </div>
                </section>
        </div>
    );
}
// TODO Hinzufügen des Seitendesigns