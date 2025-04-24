import './globals.css'
import { Suspense } from 'react'
import Link from 'next/link';
import TextRotation from "@/app/components/textrotation.js";
import Navbar from "@/app/components/navbar.js";

export default function Home(){
    return(
        <div>
            <Navbar />
            <div className="welcome-container">
                <h1 className="big-welcomer">
                    <section>
                        <Suspense fallback={<div>Loading Textrotation...</div>}>
                            <TextRotation/>
                        </Suspense>
                    </section>
                </h1>
            <div className="welcome-text ">
                <p> This is my Webpage.</p>
                <Link href="/about">Go to my About Me page</Link>
            </div>
            </div>
        </div>)
}