// Diese API-Route liefert Produkte zurück
export async function GET() {
    // Beispieldaten, du kannst hier eine Datenbank oder externe API verwenden
    const products = [
        { id: 1, name: "Produkt 1", price: "25.00€", imgSrc: "/product1.jpg" },
        { id: 2, name: "Produkt 2", price: "40.00€", imgSrc: "/product2.jpg" },
        { id: 3, name: "Produkt 3", price: "30.00€", imgSrc: "/product3.jpg" },
        { id: 4, name: "Produkt 4", price: "50.00€", imgSrc: "/product4.jpg" },
        { id : 5, name: "Produkt 5", price: "50.00€", imgSrc: "/product5.jpg" },
    ];

    // Antwort zurückgeben
    return new Response(JSON.stringify(products), {
        headers: { "Content-Type": "application/json" },
    });
}
