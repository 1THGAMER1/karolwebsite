"use client"

import {useEffect} from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Counter({targetNumber = 1000, duration = 3}) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        const startAnimation = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                animate(count, targetNumber, {
                    duration : duration,
                    ease: "easeOut",
                })
                window.removeEventListener("scroll", startAnimation);
            }
        }

        window.addEventListener("scroll", startAnimation);
        return () => window.removeEventListener("scroll", startAnimation);
        }, [count, targetNumber, duration]);
    return (
        <div className="text-5xl font-bold text-center mt-20">
            <motion.span>
                {rounded}
            </motion.span>
        </div>
    );
}