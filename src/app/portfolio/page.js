import '../globals.css'
import Navbar from "@/app/components/navbar.js";
import Counter from "@/app/components/counter.js";

export default function Page(){
    return(
        <div>
            <Navbar />
            <div className="h-[150vh] p-8"></div>
            <h1 className="text-5xl font-bold text-center mt-20">
                Scroll zum zählen!
            </h1>
            <Counter targetNumber={500}/>
            <Counter targetNumber={1000}/>
            <Counter targetNumber={300}/>
        </div>
    );
}