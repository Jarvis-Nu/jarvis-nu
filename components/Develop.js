export default function Develop() {
    return(
        <div className="w-full px-4 lg:px-20 py-4 lg:py-8 sm:p-8">
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:space-x-[50px] lg:space-x-[75px] xl:space-x-[150px] space-y-5 lg:space-y-0">
                <div className="w-full lg:w-[700px] xl:w-[500px]">
                    <h6 className="font-semibold text-pink h6">| Lorem ipsum |</h6>
                    <h1 className="font-bold text-ink h1">Developing With Enthusiam</h1>
                    <p className="p">
                        Lorem ipsum dolor sit amet consectetur. 
                        Sed nullam pellentesque quis ut dictumst tellus. 
                        Sit id fringilla elit elementum viverra nibh.
                    </p>
                </div>
                <div className="max-w-[273px] lg:w-[400px] xl:max-w-[450px] grid grid-cols-2 w-full gap-x-8 gap-y-4">
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[200px] rounded-lg"></div>
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[200px] rounded-lg"></div>
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[200px] rounded-lg"></div>
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[200px] rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}