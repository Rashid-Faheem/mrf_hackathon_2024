import React from 'react'

const Dontmiss = () => {
    return (
        <section className="bg-white py-16">
            <div className=" flex flex-col py-2 px-8 md:px-20 md:py-4 gap-2 sm:gap-6 lg:gap-12">
                <h2 className="text-sm sm:text-lg lg:text-2xl font-bold mb-8">Don&apos;t Miss</h2>

                <img src="./dontmiss.png" alt="" />
                <div className='flex flex-col sm:gap-4 lg:gap-6 text-center '>

                    <p className='text-lg sm:text-2xl md:text-4xl lg:text-5xl  font-helveticaBold'>FLIGHT ESSENTIALS</p>
                    <p className='text-sm sm:text-sm md:text-base lg:text-xl'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                    <div>
                        <button className='px-6 py-2 bg-black text-white font-medium rounded-full text-xs sm:text-sm lg:text-base'>Shop</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dontmiss
