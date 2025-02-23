"use client"
import { useState } from "react"
import Image from "next/image"

export default function SelectLanguage() {
    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className="relative">
            <div 
                className="flex justify-center items-center gap-1 cursor-pointer" 
                onClick={() => setShowOptions(true)}
            >
                <Image
                    src="/icons/language.svg"
                    alt="language"
                    width={16}
                    height={16}
                />
                <Image
                    src="/icons/chevron.svg"
                    alt="chevron"
                    width={16}
                    height={16}
                    className="rotate-180"
                />
            </div>
            {showOptions && 
                <div className="min-w-20 absolute top-6 left-0 bg-white text-black z-10 border border-black rounded-lg p-4">
                    <ul>
                        <li>فارسی</li>
                        <li>انگلیسی</li>
                    </ul>
                </div>
            }
        </div>
    )
}