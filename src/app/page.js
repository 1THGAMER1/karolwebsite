import './globals.css'
import { Suspense } from 'react'
import Link from 'next/link';
import TextRotation from "@/app/components/textrotation.js";
import Navbar from "@/app/components/navbar.js";

export default function Home(){
    return(
        <div>
            <Navbar />
            <div className="welcome-container min-h-screen flex flex-col items-center justify-center">
                <h1 className="big-welcomer flex justify-center">
                    <TextRotation/>
                </h1>
            </div>
            <div className="welcome-text text-center flex flex-col items-center justify-center text-white">
                <p> This is Karols Website.</p>
                <Link href="/about">Go to my About Me page</Link>
            </div>
        </div>
    )
}