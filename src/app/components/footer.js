import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Karol&#39;s Shop. Alle Rechte vorbehalten.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <Link href="#">Facebook</Link>
                    <Link href="https://x.com/_THGAMER">Twitter</Link>
                    <Link href="#">Instagram</Link>
                </div>
            </div>
        </footer>
    )
}