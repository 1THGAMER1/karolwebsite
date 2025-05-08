"use client"

import { useState } from "react";
import Image from "next/image";

function ProductBigPicture({ product }) {
    const [isBigPicture, setBigPicture] = useState(false);

    const openBigPicture = () => setBigPicture(true);
    const closeBigPicture = () => setBigPicture(false);

    return (
        <div>
            {/* Thumbnail Image */}
            <Image
                src={product.imgsrc}
                alt={product.name}
                width={250}
                height={250}
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={openBigPicture}
            />

            {/* BigPicture */}
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
                            className="absolute top-2 right-2 p-2 rounded-full hover:text-red-500 text-black text-xl transition-all duration-200 shadow-md"
                            onClick={closeBigPicture}
                        >

                            {/* Close button */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Image
                            src={product.imgsrc}
                            alt={product.name}
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductBigPicture;
