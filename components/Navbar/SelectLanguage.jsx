"use client"
import { useEffect, useRef, useState } from "react"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";

export default function SelectLanguage() {
    const locale = useLocale()
    const t = useTranslations("navbar")
    const wrapperRef = useRef(null)
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        let handler = (event) => {
            if (showOptions && !wrapperRef.current?.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div className="relative" ref={wrapperRef}>
            <div 
                className="flex justify-center items-center gap-1 cursor-pointer" 
                onClick={() => setShowOptions(!showOptions)}
            >
                <Image
                    src="/icons/language.svg"
                    alt="language"
                    width={24}
                    height={24}
                />
                <Image
                    src="/icons/chevron.svg"
                    alt="chevron"
                    width={24}
                    height={24}
                    className="rotate-180"
                />
            </div>
            {showOptions && 
                <div className={`min-w-[100px] absolute top-8 ${locale === "fa" ? "left-0" : "right-0"} bg-white text-black z-10 border border-black rounded-lg`}>
                    <div className="flex flex-col">
                        <Link href="/fa" className="hover:bg-blue-200 p-4 rounded-lg">
                            {t("persian_language")}
                        </Link>
                        <Link href="/en" className="hover:bg-blue-200 p-4 rounded-lg">
                            {t("english_language")}
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}