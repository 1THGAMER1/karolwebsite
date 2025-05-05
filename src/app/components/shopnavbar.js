import Link from "next/link";

export default function Shopnavbar() {

    return(
        <header className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center text-center">
                <Link href="/shop">
                    <h1 className="text-2xl font-bold text-blue-400">Karol&#39;s Shop</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about" className="items-center">About Me</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li className="ml-4">
                            <Link href="/shop/cart" className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}