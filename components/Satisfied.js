export default function Satisfied() {
    return(
        <div className="w-full px-4 lg:px-20 py-4 lg:py-8 sm:p-8 md:px-12 flex flex-col md:flex-row
         justify-center items-center md:space-x-[50px] lg:space-x-[75px] xl:space-x-[150px] space-y-5 md:space-y-0">
            <div className="max-w-[220px] text-center md:text-start">
                <h1 className="font-bold h1 text-pink">80+</h1>
                <h6 className="h6">Satisfied clients</h6>
            </div>
            <div className="h-0.5 w-[97px] md:h-28 bg-black md:w-0.5" />
            <div className="max-w-[220px] text-center md:text-start">
                <h1 className="font-bold h1 text-pink">200+</h1>
                <h6 className="h6">Projects completed</h6>
            </div>
            <div className="h-0.5 w-[97px] md:h-28 bg-black md:w-0.5" />
            <div className="max-w-[220px] text-center md:text-start">
                <h1 className="font-bold h1 text-pink">99+</h1>
                <h6 className="h6">Reviews given</h6>
            </div>
        </div>
    )
}