"use client"

import { useState } from "react";
import Image from "next/image";

function ProductBigPicture({ product, width, height }) {
    const [isBigPicture, setBigPicture] = useState(false);

    const openBigPicture = () => setBigPicture(true);
    const closeBigPicture = () => setBigPicture(false);

    return (
        <div>
            <Image
                src={product.imgsrc}
                alt={product.name}
                width={width}
                height={height}
                className="cursor-pointer object-contain rounded-lg sm:w-auto sm:h-auto tranistion-transform duration-300 hover:scale-105"
                onClick={openBigPicture}
            />
            {isBigPicture && (
                <div
                    className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50"
                    onClick={closeBigPicture}
                >
                    <div
                        className="bg-white p-4 rounded-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 p-2 rounded-full hover:text-red-500 text-black text-xl transition-all duration-100 shadow-md"
                            onClick={closeBigPicture}
                        >

                            {/* Close button */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                            </svg>
                        </button>
                        <Image
                            src={product.imgsrc}
                            alt={product.name}
                            width={width * 3.2}
                            height={height * 3.2}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductBigPicture;
