import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";

export default function OurTeam() {
    const TeamData = [
        {
            key: 1,
            name: "Victor Omorogbe",
            role: "Founder, Lead Photographer, CEO",
            description: "Lorem ipsum dolor sit amet consectetur. Nisl vitae risus et id scelerisque rutrum sollicitudin tellus. Quam nibh urna dignissim arcu ligula congue risus. Nisl volutpat pulvinar consequat feugiat eget feugiat. Turpis eu tristique fusce pulvinar fusce turpis."
        },
        {
            key: 2,
            name: "Victor Omorogbe",
            role: "Founder, Lead Photographer, CEO",
            description: "Lorem ipsum dolor sit amet consectetur. Nisl vitae risus et id scelerisque rutrum sollicitudin tellus. Quam nibh urna dignissim arcu ligula congue risus. Nisl volutpat pulvinar consequat feugiat eget feugiat. Turpis eu tristique fusce pulvinar fusce turpis."
        },
        {
            key: 3,
            name: "Victor Omorogbe",
            role: "Founder, Lead Photographer, CEO",
            description: "Lorem ipsum dolor sit amet consectetur. Nisl vitae risus et id scelerisque rutrum sollicitudin tellus. Quam nibh urna dignissim arcu ligula congue risus. Nisl volutpat pulvinar consequat feugiat eget feugiat. Turpis eu tristique fusce pulvinar fusce turpis."
        }
    ]
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10 h-full space-y-5 px-4 lg:px-20 py-4 lg:py-8 sm:p-8">
            <div className="lg:w-[700px] xl:w-[500px] text-center space-y-2">
                <h6 className="font-semibold text-pink h6">| Lorem ipsum |</h6>
                <h1 className="font-bold text-ink h1">Our Team</h1>
                <p className="p px-2.5 sm:px-10 lg:px-5">Lorem ipsum dolor sit amet consectetur. Dui dictumst turpis tellus integer vulputate.</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-[850px]">
                    <Slide slidesToScroll={1} slidesToShow={1} indicators={true} arrows={false} duration={2000}>
                        {
                            TeamData.map(data => (
                                <div className="w-full flex flex-col lg:flex-row lg:space-x-10 text-center lg:text-start space-y-3.5 lg:space-y-0">
                                    <div className="relative rounded-xl max-w-[300px] sm:max-w-[400px]">
                                        <Image src={"/person.png"} width={500} height={500} alt="" />
                                    </div>
                                    <div className="lg:max-w-[500px] space-y-3.5">
                                        <h1 className="h1 font-semibold text-pink">{data.name}</h1>
                                        <h6 className="h6 text-ink font-semibold">{data.role}</h6>
                                        <p className="w-full p">{data.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
            </div>
        </div>
    )
}