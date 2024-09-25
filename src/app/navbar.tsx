"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const Router = useRouter();
    
    return (
        <nav className="flex justify-between px-5 py-2 bg-gray-600">
            <div className="flex">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-8">
                <Link href="/">
                    <li className={`mr-3 ${
                        pathname === "/" ? "text-blue-300" : "text-white"}
                        cursor-pointer`}>Home</li>
                </Link>
                <Link href="/about">
                <li className={`mr-3 ${
                        pathname === "/about" ? "text-blue-300" : "text-white"}
                        cursor-pointer`}>About</li>
                </Link>
                <Link href="/about/profile">
                <li className={`mr-3 ${
                        pathname === "/about/profile" ? "text-blue-300" : "text-white"}
                        cursor-pointer`}>Profile</li>
                </Link>
            </ul>
            </div>
            <div>
                <button className="px-3 text-sm bg-white rounded-md cursor-pointer"
                onClick={()=> Router.push("/login")}>login</button>
            </div>
        </nav>
        
    )
}