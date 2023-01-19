import Image from "next/image";

export default function TeamCard(title, role, description) {
    return(
        <div className="w-full flex space-x-10">
            <div className="relative rounded-xl max-w-[300px] sm:max-w-[400px]">
                <Image src={"/person.png"} width={350} height={350} alt="" />
            </div>
            <div className="max-w-[500px] space-y-3.5">
                <h1 className="h1 font-semibold text-pink">{title}</h1>
                <h6 className="h6 text-ink font-semibold">{role}</h6>
                <p className="w-full p">{description}</p>
            </div>
        </div>
    )
}