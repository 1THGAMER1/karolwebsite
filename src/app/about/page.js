import '../globals.css'
import Navbar from "@/app/components/navbar.js";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Page(){
    return(
        <div>
            <Navbar />
            <h1> Welcome in meiner About Seite </h1>
            <Analytics/>
            <SpeedInsights/>
        </div>
    );
}