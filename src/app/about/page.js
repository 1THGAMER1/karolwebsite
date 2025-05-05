import '../globals.css'
import Navbar from "@/app/components/navbar.js";
import { Analytics } from "@vercel/analytics/react"

export default function Page(){
    return(
        <div>
            <Navbar />
            <h1> Welcome to my About Page </h1>
            <p> This is my Webpage</p>
        </div>
    );
}