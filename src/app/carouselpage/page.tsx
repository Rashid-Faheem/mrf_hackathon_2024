
import React from 'react'
import Image from 'next/image';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Link from 'next/link';
   
  const products = [
    { id: 1, name: 'Nike Air Max Pulse', price: '₹ 13 995', image: '/AirMaxSec/1.png' ,category : "Women's Shoes"},
    { id: 2, name: 'Nike Air Max Pulse', price: '₹ 13 995', image: '/AirMaxSec/2.png' ,category : "Men's Shoes" },
    { id: 3, name: 'Nike Air Max 97 SE', price: '₹ 16 995', image: '/AirMaxSec/3.png' ,category : "Men's Shoes" },
    { id: 4, name: 'Nike Air Max Pulse', price: '₹ 13 995', image: '/AirMaxSec/2.png' ,category : "Men's Shoes" },
  ];
  
const CarouselPage = () => {
  return (
    <div>
    <Carousel  >
    <CarouselContent>
      
        {products.map((product) => (
          
        
        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
        <div  className='p-1' >
          
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
              />
              <div className='flex justify-between'>
                <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-medium">{product.name}</h3>
                <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-medium">{product.price}</h3>
              </div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{product.category}</p>
            </div>
        </CarouselItem>
      ))}
      
    </CarouselContent>
    <div className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
    <CarouselPrevious />
    <CarouselNext />
    </div>
 
  </Carousel>
  

  <hr />
  <section className="bg-white py-16">
      <div className="  py-2 px-8 md:px-20 md:py-4">
        <div className='flex justify-between'>
        <h2 className="text-sm sm:text-lg lg:text-2xl font-bold mb-8">Best of Air Max</h2>
        <div className='flex gap-2'><p>Shop</p>
        <img className='h-6' src="./left_btn.png" alt="" />
        <img className='h-6' src="./right_btn.png" alt="" />
        </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
              />
              <div className='flex justify-between'>
                <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-medium">{product.name}</h3>
                <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-medium">{product.price}</h3>
              </div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{product.category}</p>
            </div>
          ))}
        </div> */}
<Carousel >
<CarouselContent>
      
      {products.map((product) => (
        
      
      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
      <div  className='p-1' >
        
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
            />
            <div className='flex justify-between'>
              <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-medium">{product.name}</h3>
              <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-medium">{product.price}</h3>
            </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{product.category}</p>
          </div>
      </CarouselItem>
    ))}
    
  </CarouselContent>
  <div className='flex justify-between'>
        <h2 className="text-sm sm:text-lg lg:text-2xl font-bold mb-8">Best of Air Max</h2>
        <div className='flex gap-2 '><p>Shop</p> <span></span>
        <div className='flex flex-col'>
          <CarouselPrevious  />
          <CarouselNext />
          </div>
        </div>
        </div>
        
  </Carousel >
      </div>
    </section>

    </div>
  )
}

export default CarouselPage
