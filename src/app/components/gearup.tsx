// components/BestOfAirMax.js
import Image from 'next/image';


const mens = [
    { id: 1, name: 'Nike Dri-FIT ADV TechKnit Ultra', price: '₹ 3 895', image: '/gearup/men1.png', category: "Men's Short-Sleeve Running Top" },
    { id: 2, name: 'Nike Dri-FIT Challenger', price: '₹ 2 495', image: '/gearup/men2.png', category: "Men's ShoesMen's 18cm (approx.) 2-in-1 Versatile Shorts" },
];
const women = [
    { id: 1, name: 'Nike Dri-FIT ADV Run Division', price: '₹ 5 295', image: '/gearup/women1.png', category: "Women's Long-Sleeve Running Top" },
    { id: 2, name: 'Nike Fast', price: '₹ 13 995', image: '/gearup/women2.png', category: "Women's Mid-Rise 7/8 Running Leggings with Pockets" },
];



const GearUp = () => {
    return (
        <section className="bg-white py-16">
            <div className="  py-2 px-8 md:px-20 md:py-4">
                <div className='flex justify-between'>
                    <h2 className="text-sm sm:text-lg lg:text-2xl font-bold ">Gear Up</h2>
                    {/* <div className='flex gap-2'><p>Shop Men's</p>
                        <img className='h-6' src="./left_btn.png" alt="" />
                        <img className='h-6' src="./right_btn.png" alt="" />
                    </div>
                    <div className='flex gap-2'><p>Shop Women's</p>
                        <img className='h-6' src="./left_btn.png" alt="" />
                        <img className='h-6' src="./right_btn.png" alt="" />
                    </div> */}
                </div>
                <div className='md:flex md:gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className="flex">
                            <div className="ml-auto"><div className='flex gap-2 right-2 '><p>Shop Men&apos;s</p>
                                <img className='h-6' src="./left_btn.png" alt="" />
                                <img className='h-6' src="./right_btn.png" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className='absolute right-4' >
                            {/* <div className=' h-[1px] w-[1px] '></div> */}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                            {mens.map((mens) => (
                                <div key={mens.id} >
                                    <Image
                                        src={mens.image}
                                        alt={mens.name}
                                        width={400}
                                        height={400}
                                    />
                                    <div className='flex justify-between'>
                                        <h3 className="mt-4 text-xs sm:text-sm font-helveticaBold font-medium">{mens.name}</h3>
                                        <h3 className="mt-4 text-xs sm:text-sm font-helveticaBold font-medium">{mens.price}</h3>
                                    </div>
                                    <p className="text-gray-600 text-xs sm:text-xs lg:text-sm">{mens.category}</p>
                                </div>
                            ))}
                        </div></div>

                        <div className='flex flex-col gap-4'>
                        <div className="flex">
                            <div className="ml-auto"><div className='flex gap-2 right-2 '><p>Shop Women&apos;s</p>
                                <img className='h-6' src="./left_btn.png" alt="" />
                                <img className='h-6' src="./right_btn.png" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className='absolute right-4' >
                            {/* <div className=' h-[1px] w-[1px] '></div> */}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                            {women.map((women) => (
                                <div key={women.id} >
                                    <Image
                                        src={women.image}
                                        alt={women.name}
                                        width={400}
                                        height={400}
                                    />
                                    <div className='flex justify-between'>
                                        <h3 className="mt-4 text-xs sm:text-sm font-helveticaBold font-medium">{women.name}</h3>
                                        <h3 className="mt-4 text-xs sm:text-sm font-helveticaBold font-medium">{women.price}</h3>
                                    </div>
                                    <p className="text-gray-600 text-xs sm:text-xs lg:text-sm">{women.category}</p>
                                </div>
                            ))}
                        </div></div>
                </div>
            </div>
        </section>
    );
};

export default GearUp;
