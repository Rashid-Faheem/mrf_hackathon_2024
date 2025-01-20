'use client';
import React from 'react'
import {  useParams  } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import ProductDetail from '@/components/ProductDetail';
import IProduct from '@/types/product';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export default async function productdetailpage() {
    
 const { category,slug } = useParams();
const result = await client.fetch(`*[_type == "product" && slug.current == "${slug}"] | order(_createdAt desc)
{
    _id,
    "image": image.asset->url,
    status,
      name,
    category,
    "colorCount": count(colors),
    colors,
    price,
    "slug":slug.current,
    description

}`); 

const product = result[0];

const notify = () => toast.success('Product Added to Cart!', {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  });

const handleClick = (product: IProduct) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    if (cart[product.name]) {
      cart[product.name] = {
        ...cart[product.name],
        quantity: cart[product.name].quantity + 1,
      };
    } else {
      cart[product.name] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    notify();
  };


  return (

<div className="min-h-screen bg-white text-black flex flex-col items-center p-4">
          <div className="max-w-6xl w-full p-6 flex flex-col md:flex-row gap-10">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg object-cover" 
              />
            </div>
    
            {/* Product Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <p className="mt-4 text-2xl font-semibold">₹ {product.price}</p>
    
              <button onClick={() => handleClick(product)}
                className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full md:w-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
   <ToastContainer />
        </div>
  )
}
