// Diese API-Route liefert Produkte zurück
export async function GET() {
    // Beispieldaten, eine Datenbank oder externe API kann hier auch verwendet werden. Dies würde
    // bei komplexerem Code und einer richtigen Website selbstverständlich mehr Sinn machen.
    const products = [
        { id: 1, name: "Produkt 1", price: "25.00€", imgSrc: "/shop/product1.png" },
        { id: 2, name: "Produkt 2", price: "40.00€", imgSrc: "/shop/product2.png" },
        { id: 3, name: "Produkt 3", price: "30.00€", imgSrc: "/shop/product3.png" },
        { id: 4, name: "Produkt 4", price: "50.00€", imgSrc: "/shop/product4.png" },
        { id : 5, name: "Produkt 5", price: "50.00€", imgSrc: "/shop/product5.png" },
    ];

    // Antwort zurückgeben
    return new Response(JSON.stringify(products), {status: 200,
        headers: { "Content-Type": "application/json" },
    })
}
