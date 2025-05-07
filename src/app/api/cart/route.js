import prisma from '@/lib/prisma';
import { getSessionId } from '@/lib/session';
import { NextResponse} from "next/server";

export async function DELETE(request) {
    try {
        const sessionId = await getSessionId(request); // Session-ID aus Cookies holen
        if (!sessionId) {
            return NextResponse.json({ error: "Keine gültige Session ID" }, { status: 400 });
        }

        const body = await request.json();
        const { productid } = body;

        if (!productid) {
            return NextResponse.json({ error: "Fehlende Produkt ID" }, { status: 400 });
        }

        // Lösche das Produkt aus dem Warenkorb
        await prisma.warenkorb.deleteMany({
            where: {
                sessionid: sessionId,
                productid: productid,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Fehler im DELETE-Handler:", error);
        return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const sessionId = await getSessionId(); // Hole die Session ID aus den Cookies
        if (!sessionId) {
            return new Response(JSON.stringify({ error: 'Keine gültige Session ID' }), { status: 400 });
        }

        const productId = parseInt(body.productId);
        if (isNaN(productId)) {
            return new Response(JSON.stringify({ error: 'Ungültige Produkt ID' }), { status: 400 });
        }

        // Überprüfe, ob der Artikel bereits im Warenkorb ist
        const existingCartItem = await prisma.warenkorb.findUnique({
            where: {
                sessionid_productid: {
                    sessionid: sessionId,
                    productid: productId,
                },
            },
        });

        if (existingCartItem) {
            // Artikel existiert bereits, aktualisiere die Menge
            const updatedItem = await prisma.warenkorb.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + body.quantity },
            });
            return new Response(JSON.stringify(updatedItem));
        } else {
            // Artikel existiert noch nicht, erstelle neuen Warenkorb-Eintrag
            const newItem = await prisma.warenkorb.create({
                data: {
                    sessionid: sessionId, // Verwende die korrekte session_id
                    productid: productId,
                    quantity: body.quantity,
                },
            });
            return new Response(JSON.stringify(newItem));
        }
    } catch (error) {
        console.error('Fehler beim Hinzufügen zum Warenkorb:', error);
        return new Response(JSON.stringify({ error: 'Fehler beim Hinzufügen' }), { status: 500 });
    }
}

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const sessionId = url.searchParams.get('session_id') || await getSessionId(); // Hole die session_id aus der URL oder den Cookies

        if (!sessionId) {
            return new Response(JSON.stringify({ error: 'Keine gültige Session ID' }), { status: 400 });
        }

        // Hole alle Warenkorb-Artikel für die gegebene Session ID
        const cartItems = await prisma.warenkorb.findMany({
            where: {
                sessionid: sessionId,
            },
        });

        return new Response(JSON.stringify(cartItems));
    } catch (error) {
        console.error("Fehler beim Abrufen des Warenkorbs:", error);
        return new Response(JSON.stringify({ error: 'Fehler beim Abrufen' }), { status: 500 });
    }
}
