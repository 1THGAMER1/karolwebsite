import '../globals.css'
import Navbar from "@/app/components/navbar.js";
import Counter from "@/app/components/counter.js";

export default function Page(){
    return(
        <div>
            <Navbar />
            <div className="h-[150vh] p-8"></div>
            <h1 className="text-5xl font-bold text-center mt-20">
                Scroll to count!
            </h1>
            <Counter targetNumber={500}/>
            <h1 className="text-5xl font-bold text-center mt-20">
                Scroll to count!
            </h1>
            <Counter targetNumber={1000}/>
            <h1 className="text-5xl font-bold text-center mt-20">
                Scroll to count!
            </h1>
            <Counter targetNumber={300}/>
            <h1> Welcome to my About Page </h1>
            <p> This is my Webpage</p>
        </div>
    );
}