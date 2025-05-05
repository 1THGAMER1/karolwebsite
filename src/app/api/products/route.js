import prisma from '@/lib/prisma'

export async function GET() {
    try {
        // WICHTIG: Nutzen Sie die Kleinbuchstaben-Version
        const existingproducts = await prisma.produkte.findMany()

        return new Response(JSON.stringify(existingproducts), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        })
    } catch(error) {
        console.error("Detaillierter Fehler:", {
            message: error.message,
            stack: error.stack,
            prismaError: error.clientVersion
        })

        return new Response(JSON.stringify({
            error: "Datenbankoperation fehlgeschlagen",
            details: error.message
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
    }
}