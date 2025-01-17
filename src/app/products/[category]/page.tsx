'use client'
/*
import { useRouter } from 'next/router';
import ProductCard from '../../../components/ProductCard';

const product = [
  { id: 1, category: 'men', name: "Nike Air Max", price: "₹8,995", image: "/air-max.jpg" },
  { id: 2, category: 'women', name: "Nike Pegasus", price: "₹6,495", image: "/pegasus.jpg" },
  { id: 3, category: 'men', name: "Nike Zoom", price: "₹10,495", image: "/zoom.jpg" },
  { id: 4, category: 'women', name: "Nike Revolution", price: "₹4,995", image: "/revolution.jpg" },
];

const products = () => {
  const router = useRouter();
  const { category } = router.query;

  // Filter products based on category
  const filteredProducts = product.filter((product) => product.category === category);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold capitalize">{category}'s Products</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found for {category}.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default products;

*/

import React from 'react'
import {  useParams  } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

const product = [
  { id: 1, category: 'men', name: "Nike Air Max", price: "₹8,995", image: "/AirMaxSec/1.png" },
  { id: 2, category: 'women', name: "Nike Pegasus", price: "₹6,495", image: "/AirMaxSec/2.png" },
  { id: 3, category: 'men', name: "Nike Zoom", price: "₹10,495", image: "/AirMaxSec/3.png" },
  { id: 4, category: 'women', name: "Nike Revolution", price: "₹4,995", image: "/AirMaxSec/1.png" },
];

const CategoryPage = () => {
  const { category } = useParams();
  const filteredProducts  = category == 'all' ? product : product.filter((product) => product.category === category);
 
  console.log(category); 
  return (
    <div>
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{category}'s Products</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for {category}.</p>
        )}
      </div>
    </div>
  </div>
  )
}

export default CategoryPage
