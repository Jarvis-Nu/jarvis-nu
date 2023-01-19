import Image from "next/image"

export default function Portfolio() {
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10 h-full space-y-5">
            <div className="lg:w-[700px] xl:w-[500px] text-center space-y-2">
                <h6 className="font-semibold text-pink h6">| Lorem ipsum |</h6>
                <h1 className="font-bold text-ink h1">Our Projects</h1>
                <p className="p px-2.5 sm:px-10 lg:px-5">Lorem ipsum dolor sit amet consectetur. Dui dictumst turpis tellus integer vulputate.</p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center h-full relative space-y-2.5 lg:space-y-0 lg:space-x-5">
                <div className="min-w-[300px] min-h-[150px] sm:min-w-[515px] sm:min-h-[200px] lg:min-w-[250px] 
                    lg:min-h-[415px] bg-[url('/proj1.png')] bg-center rounded-xl bg-cover" />
                    <div className="space-y-2.5 h-full">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:max-h-[200px] px-2 sm:px-0 space-y-2.5 sm:space-y-0">
                            <div className="min-w-[300px] min-h-[150px] sm:min-w-[250px] sm:min-h-[200px] bg-[url('/proj2.png')] bg-center rounded-xl bg-cover" />
                            <div className="min-w-[300px] min-h-[150px] sm:min-w-[250px] sm:min-h-[200px] bg-[url('/proj3.png')] bg-center rounded-xl bg-cover" />
                        </div>
                        <div className="px-2 sm:px-0">
                            <div className="min-w-[300px] min-h-[150px] sm:min-w-[400px] sm:min-h-[200px] bg-[url('/proj4.png')] bg-center rounded-xl bg-cover" />
                        </div>
                    </div>
            </div>
        </div>
    )
}