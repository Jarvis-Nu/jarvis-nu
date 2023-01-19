import Navbar from "./Navbar";
import Image from "next/image"

export default function Hero() {
    return (
        <div className="w-full min-h-screen bg-pink/10 bg-[url('/dots.png')] bg-no-repeat bg-left bg-origin-content">
            <Navbar />
            <div className="w-full min-w-screen h-full mt-20 px-4 lg:px-20 py-4 lg:py-8 sm:p-8">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:space-x-[50px] lg:space-x-[75px] xl:space-x-[150px] space-y-5 lg:space-y-0">
                    <div className="lg:w-[700px] xl:w-[500px] text-center md:text-left space-y-2">
                        <h6 className="font-semibold text-pink h6">| Lorem ipsum |</h6>
                        <h1 className="font-bold text-ink h1">Lorem ipsum dolor sit amet</h1>
                        <p className="p">
                            Lorem ipsum dolor sit amet consectetur. Est est dictumst at montes nullam.
                            Iaculis eu scelerisque amet sem massa risus urna volutpat.
                            Bibendum massa nulla nunc enim commodo.
                        </p>
                    </div>
                    <div className="relative max-w-[273px] lg:w-[400px] xl:max-w-[490px]">
                        <Image src={"/triangle.png"} alt="" width={490} height={480} />
                    </div>
                </div>
            </div>
        </div>
    )
}
