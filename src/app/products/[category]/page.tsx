'use client'
import React from 'react'
import {  useParams  } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import IProduct from '@/types/product';
import { Bounce, ToastContainer, toast } from 'react-toastify';


const CategoryPage = async () => {
  const { category } = useParams();
  const category1 = category == 'all' ? "" : category;

const product = await client.fetch(`*[_type == "product" && category match "${category1}*"] | order(_createdAt desc)
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
const filteredProducts = product;
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
    <div>
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{category}'s Products</h1>
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product:IProduct) => (
            <div key={product._id}>

            <Link href={`/products/${category}/${product.slug}`} key={product._id}>
                <ProductCard key={product._id} product={product} />
                
            </Link>
            <button onClick={() => handleClick(product)} className=" block w-full mx-auto mt-1 bg-black text-white px-4 py-2 rounded opacity-60 hover:opacity-100 transition-opacity duration-300">
            Add to Cart
            </button>
            
            </div>
            
          ))
        ) : (
          <p>No products found for {category}.</p>
        )}

<ToastContainer/>


      </div>
    </div>
  </div>
  )
}

export default CategoryPage
