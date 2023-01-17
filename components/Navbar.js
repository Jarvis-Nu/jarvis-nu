import Image from "next/image";
import Link from "next/link";
import { MenuAlt3Icon } from "@heroicons/react/solid"

export default function Navbar() {
    return(
        <div className="w-full relative">
            <div className="w-full bg-white px-4 lg:px-20 py-4 lg:py-8 sm:p-8 md:px-12 flex justify-between items-center">
                <div className="relative max-w-[160px] max-h-[80px] lg:max-w-[229px] lg:max-h-[44px]">
                    <Image src="/jarvis.png" width={229} height={44} />
                </div>
                <div className="max-w-md space-x-10 hidden lg:block">
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold text-pink">Home</Link>
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">About</Link>
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">Projects</Link>
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">Team</Link>
                </div>
                <button className="lg:hidden" onClick={() => document.querySelector(".sidebar").classList.toggle("-translate-x-full")}>
                    <MenuAlt3Icon className="text-black w-8 h-8" />
                </button>
            </div>
            <div className="transition duration-300 -translate-x-full w-64 inset-y-0 fixed bg-white z-20 p-8 lg:hidden sidebar">
                <div>
                    <div className="relative max-w-[160px] max-h-[80px]">
                        <Image src="/jarvis.png" width={160} height={80} />
                    </div>
                </div>
                <div className="flex flex-col space-y-5 py-5">
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold text-pink">Home</Link>
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">About</Link>
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">Projects</Link>
                    <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">Team</Link>
                </div>
            </div>
        </div>
    )
}