export default function Subscribe() {
    return(
        <div className="w-full px-4 lg:px-20 py-20 bg-pink/10 flex flex-col lg:flex-row items-center justify-center 
            space-y-5 lg:space-y-0 lg:space-x-16 text-center lg:text-start">
            <div className="max-w-[400px] space-y-2.5">
                <h4 className="text-[36px] leading-[48px] lg:text-[60px] lg:leading-[70px] text-ink font-semibold">Subscribe to our newsletter</h4>
                <h6 className="text-[20px] leading-[40px] lg:h6">Lorem ipsum dolor sit amet consectetur. Dictum eu sed est suspendisse libero at. </h6>
            </div>
            <div className="w-full flex justify-center max-w-xs">
                <div className="flex min-w-full">
                    <input type="email" className="w-full p-2 rounded-l-lg outline-none pl-4 pr-5" placeholder="Enter email" />
                    <button className="text-white py-2 px-4 rounded-lg bg-pink -ml-3.5">Subscribe</button>
                </div>
            </div>
        </div>
    )
}