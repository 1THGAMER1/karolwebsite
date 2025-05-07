import prisma from '@/lib/prisma';
import { getSessionId } from '@/lib/session';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed. !SEITE UNTER BEARBEITUNG!' });
    }

    const sessionId = await getSessionId();

    if (!sessionId) {
        return res.status(400).json({ message: 'Session not found' });
    }

    try {
        // Beginnt die Transaktion
        const order = await prisma.$transaction(async (prisma) => {
            // Bestellkopf
            const newOrder = await prisma.bestellung.create({
                data: {
                    sessionid: sessionId,
                    gesamtpreis: 0, // Wird später berechnet
                },
            });

            //  Bestellposten (Produkte aus dem Warenkorb)
            const cartItems = await prisma.warenkorb.findMany({
                where: { sessionid: sessionId },
                include: {
                    product: true, // Hole Produktinformationen
                },
            });

            let totalPrice = 0;
            // Bestellposten erstellen
            const orderItems = await Promise.all(
                cartItems.map((item) => {
                    totalPrice += item.quantity * parseFloat(item.product.price);
                    return prisma.bestellposten.create({
                        data: {
                            bestellungId: newOrder.id,
                            productId: item.productid,
                            quantity: item.quantity,
                            einzelpreis: item.product.price, // Preis des Produkts zum Zeitpunkt der Bestellung
                        },
                    });
                })
            );

            // 3. Gesamtpreis der Bestellung aktualisieren
            await prisma.bestellung.update({
                where: { id: newOrder.id },
                data: {
                    gesamtpreis: totalPrice,
                },
            });

            // 4. Warenkorb leeren
            await prisma.warenkorb.deleteMany({
                where: { sessionid: sessionId },
            });

            return newOrder;
        });

        // Erfolgreiche Antwort zurückgeben
        return res.status(200).json({ message: 'Bestellung erfolgreich', orderId: order.id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Fehler beim Verarbeiten der Bestellung' });
    }
}
