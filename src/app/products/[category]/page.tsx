'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import IProduct from '@/types/product';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const CategoryPage = () => {
  const { category } = useParams(); // ✅ Hook کو Component کے اندر رکھیں
  const category1 = category === 'all' ? "" : category;

  // 🟢 useState کا استعمال تاکہ products کو store کیا جا سکے
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // 🟢 useEffect کے ذریعے async function call کریں
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "product" && category match "${category1}*"] | order(_createdAt desc) {
          _id,
          "image": image.asset->url,
          status,
          name,
          category,
          "colorCount": count(colors),
          colors,
          price,
          "slug": slug.current,
          description
        }`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category1]); // ✅ Dependency array میں category1 شامل کریں

  // ✅ Notification function
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

  // ✅ Cart handling function
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
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{category}&apos;s Products</h1>

      {/* 🟢 Loading State */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.length > 0 ? (
            products.map((product: IProduct) => (
              <div key={product._id}>
                <Link href={`/products/${category}/${product.slug}`} key={product._id}>
                  <ProductCard key={product._id} product={product} />
                </Link>
                <button
                  onClick={() => handleClick(product)}
                  className="block w-full mx-auto mt-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-black transition-opacity duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found for {category}.</p>
          )}
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CategoryPage;
