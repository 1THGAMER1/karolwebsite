import { promises as fs} from "fs"
import path from "path"
import {error} from "next/dist/build/output/log";

const filePath = path.join(process.cwd(), "public", "shop", "cart", "cart.json");


export async function POST(request){
    const body = await request.json();
    try {
        const data = await fs.readFile(filePath, "utf8");
        const cartitems = JSON.parse(data);

        cartitems.push (body);
        console.log(filePath);

        await fs.writeFile(filePath, JSON.stringify(cartitems, null, 2));
        return Response.json({message : "Produkt hinzugefügt", item : body });
    } catch (error) {
        console.log("Fehler beim schreiben in die Database", error);
        return new Response("Fehler beim speichern", {status : 500})
    }
}

export async function GET() {
    try {
        const warenkorb = await fs.readFile(filePath, "utf8");
        const parsed = warenkorb ? JSON.parse(warenkorb) : [];

        console.log("Der derzeit benutzte Pfad lautet: ", filePath);

        return new Response(JSON.stringify(parsed), {
            status: 200,
            headers: {"content-type": "application/json"},
        })
    } catch(error) {
        console.log("Fehler beim lesen des JSONs", error)
        return new Response(JSON.stringify([]), {
            status: 500,
            headers: {"content-type": "application/json"},
        })
    }
}