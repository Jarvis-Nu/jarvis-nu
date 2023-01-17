import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="w-full bg-white px-10 py-8 flex justify-between">
            <div className="relative max-w-[229px] max-h-[44px]">
                <Image src="/jarvis.png" width={229} height={44} />
            </div>
            <div className="max-w-md space-x-5">
                <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold text-pink">Home</Link>
                <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">About</Link>
                <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">Projects</Link>
                <Link href="/" className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-pink p font-semibold hover:text-pink">Team</Link>
            </div>
        </div>
    )
}