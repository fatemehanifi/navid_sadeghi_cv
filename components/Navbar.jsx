import Link from "next/link"
import NavbarItem from "./NavbarItem"
import SelectLanguage from "./SelectLanguage"

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-neutral-800 p-4 h-20">
            <div className="w-full flex justify-between items-center text-white">
                <div>لوگو</div>
                <ul className="flex justify-center items-center gap-4">
                    <NavbarItem title="دستاوردها" target="#" />
                    <NavbarItem title="ارتباط با ما" target="#" />
                    <NavbarItem title="راه‌های ارتباطی" target="#" />
                </ul>
                <SelectLanguage />
            </div>
        </div>
    )
}