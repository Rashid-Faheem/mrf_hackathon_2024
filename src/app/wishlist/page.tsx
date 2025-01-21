'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import IProduct from '@/types/product';
import Link from 'next/link';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  // 🟢 Wishlist Data کو localStorage سے Load کریں
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  // 🛑 Wishlist سے Item Remove کرنے کا Function
  const removeFromWishlist = (product: IProduct) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="mt-4 text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {wishlist.map((product) => (
            <div key={product._id}>
              <Link href={`/products/${product.category}/${product.slug}`}>
                <ProductCard key={product._id} product={product} />
              </Link>
              <button
                onClick={() => removeFromWishlist(product)}
                className="mt-2 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
