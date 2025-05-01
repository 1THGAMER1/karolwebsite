"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const woerter = ["Willkommen!", "Welcome!", "Benvenuto!", "¡Bienvenudo!", "いらっしゃいませ!", "欢迎!", "Welkom!", ]

export default function TextRotation() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % woerter.length);
        }, 3250)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.span
                    key={woerter[index]}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.75 }}
                    className= "absoulute"
                >
                    {woerter[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}