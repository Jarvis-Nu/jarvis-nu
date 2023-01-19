import Image from "next/image";

export default function Testimonial(quote, image, name, job) {
    return(
        <div className="border border-[#EEEEEE] p-4 rounded-xl space-y-4 max-w-[300px] lg:max-w-full">
            <div>
                <p className="p">
                    "Dicat eripuit accumsan facilisi has cetero argumentum, 
                    vel at fugit definitionem integre abhorreant epicurei ferri pri."
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="rounded-full max-w-[50px] max-h-[50px]">
                    <Image src={"/reviewer.png"} width={50} height={50} />
                </div>
                <div>
                    <p className="font-semibold">Victor</p>
                    <p>Google</p>
                </div>
            </div>
        </div>
    )
}