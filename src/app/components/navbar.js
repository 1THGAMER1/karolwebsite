"use client"

import { useState } from "react";
import Link from "next/link"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prevState => !prevState);

    return(
        <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-md fixed w-full z-10 border-b border-b-white/40">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400/80 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-400"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen ? "true" : "false"}
                            >
                            <span className="sr-only"> Öffne das Main Menu </span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap = "round"
                                    strokeLinejoin= "round"
                                    strokeWidth= "2"
                                    d= "M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href="/" passHref>
                                <h1 className="text-2xl font-bold text-blue-400">Karol</h1>
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> Home </Link>
                                <Link href="/about" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> About </Link>
                                <Link href="/shop" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> Shop </Link>
                                <Link href="/portfolio" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> Portfolio </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Mobile Menu */}
            <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> Home </Link>
                    <Link href="/about" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> About </Link>
                    <Link href="/shop" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> Shop </Link>
                    <Link href="/portfolio" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded:md text-sm font-medium"> Portfolio </Link>
                </div>
            </div>
        </nav>
    )
}