import Image from "next/image"

export default function Portfolio() {
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10 h-full space-y-5">
            <div className="lg:w-[700px] xl:w-[500px] text-center space-y-2">
                <h6 className="font-semibold text-pink h6">| Lorem ipsum |</h6>
                <h1 className="font-bold text-ink h1">Our Projects</h1>
                <p className="p px-5">Lorem ipsum dolor sit amet consectetur. Dui dictumst turpis tellus integer vulputate.</p>
            </div>
            <div className="w-full flex justify-center items-center h-full relative space-x-2.5">
                <div className="min-w-[250px] min-h-[415px] bg-[url('/proj1.png')] bg-center rounded-xl bg-cover" />
                <div className="space-y-4 h-full">
                    <div className="flex space-x-4 max-h-[200px]">
                        <div className="min-w-[250px] min-h-[200px] bg-[url('/proj2.png')] bg-center rounded-xl bg-cover" />
                        <div className="min-w-[250px] min-h-[200px] bg-[url('/proj3.png')] bg-center rounded-xl bg-cover" />
                    </div>
                    <div>
                        <div className="min-w-[400px] min-h-[200px] bg-[url('/proj4.png')] bg-center rounded-xl bg-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}