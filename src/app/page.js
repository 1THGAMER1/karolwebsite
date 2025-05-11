import './globals.css'
import { Suspense } from 'react'
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
import TextRotation from "@/app/components/textrotation.js";
import Navbar from "@/app/components/navbar.js";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
                <p> Das is Karol&#39;s Website.</p>
                <Link href="/about" className="underline">Zu meiner About Me Seite</Link>
                <Link href="/shop" className="underline">Zu meinem Beispielshop</Link>
                <Link href="/portfolio" className="underline">Zu meinem Portfolio</Link>

                <Analytics/>
                <SpeedInsights/>
            </div>
        </div>
    )
}