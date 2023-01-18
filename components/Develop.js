import Image from "next/image"

export default function Develop() {
    return(
        <div className="w-full px-4 lg:px-20 py-4 lg:py-8 sm:p-8">
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:space-x-[40px] xl:space-x-[150px] space-y-5 lg:space-y-0">
                <div className="w-full lg:w-[700px] xl:w-[480px] text-center lg:text-start">
                    <h6 className="font-semibold text-pink h6">| Lorem ipsum |</h6>
                    <h1 className="font-bold text-ink h1">Developing With Enthusiam</h1>
                    <p className="p">
                        Lorem ipsum dolor sit amet consectetur. 
                        Sed nullam pellentesque quis ut dictumst tellus. 
                        Sit id fringilla elit elementum viverra nibh.
                    </p>
                </div>
                <div className="max-w-[273px] sm:max-w-[450px] flex flex-col items-center sm:grid sm:grid-cols-2 w-full gap-x-8 gap-y-4">
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[225px] rounded-lg p-2.5 space-y-1.5">
                        <div className="max-w-[40px] h-[40px]">
                            <Image src={"/aim.png"} width={40} height={40} alt="" />
                        </div>
                        <div>
                            <h4 className="h4 font-semibold text-ink">Aim</h4>
                        </div>
                        <div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur. 
                                Tempor sed massa turpis dui lacus ante. 
                                turpis dui lacus
                            </p>
                        </div>
                    </div>
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[225px] rounded-lg p-2.5 space-y-1.5">
                        <div className="max-w-[40px] h-[40px]">
                            <Image src={"/value.png"} width={40} height={40} alt="" />
                        </div>
                        <div>
                            <h4 className="h4 font-semibold text-ink">Value</h4>
                        </div>
                        <div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur. 
                                Tempor sed massa turpis dui lacus ante. 
                                turpis dui lacus
                            </p>
                        </div>
                    </div>
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[225px] rounded-lg p-2.5 space-y-1.5">
                        <div className="max-w-[40px] h-[40px]">
                            <Image src={"/vision.png"} width={40} height={40} alt="" />
                        </div>
                        <div>
                            <h4 className="h4 font-semibold text-ink">Vision</h4>
                        </div>
                        <div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur. 
                                Tempor sed massa turpis dui lacus ante. 
                                turpis dui lacus
                            </p>
                        </div>
                    </div>
                    <div className="border-2 border-[#EEEEEE] h-[200px] w-[225px] rounded-lg p-2.5 space-y-1.5">
                        <div className="max-w-[40px] h-[40px]">
                            <Image src={"/mission.png"} width={40} height={40} alt="" />
                        </div>
                        <div>
                            <h4 className="h4 font-semibold text-ink">Mission</h4>
                        </div>
                        <div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur. 
                                Tempor sed massa turpis dui lacus ante. 
                                turpis dui lacus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}