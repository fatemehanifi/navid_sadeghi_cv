import Link from "next/link"

export default function NavbarItem({ title, target }) {
    return (
        <li>
            <Link 
                href={target}
                className="hover:bg-blue-200 hover:text-black p-2 rounded-lg transition-all ease-in-out duration-300"
            >
                {title}
            </Link>
        </li>
    )
}