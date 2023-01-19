import Testimonial from "./Testimonial";

export default function Reviews() {
    return(
        <div className="w-full flex flex-col justify-center items-center space-y-4">
            <div className="lg:w-[700px] xl:w-[600px] text-center space-y-2">
                <h6 className="font-semibold text-pink h6">| Reviews |</h6>
                <h1 className="font-bold text-ink h1">Testimonials From Our Clients</h1>
                <p className="p px-2.5 sm:px-10 lg:px-5">Lorem ipsum dolor sit amet consectetur. Dui dictumst turpis tellus integer vulputate.</p>
            </div>
            <div className="flex space-x-5 lg:w-[850px]">
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </div>
    )
}