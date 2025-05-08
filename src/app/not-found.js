import './globals.css'
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex-grow container mx-auto py-16">
            <div className="text-4xl">
                Fehler 404
            </div>
            Diese Seite gibt es nicht.
            <Link href="/" className="cursor-pointer underline"> Hier geht&#39;s zurück zur Hauptseite!</Link>
        </div>
    )
}