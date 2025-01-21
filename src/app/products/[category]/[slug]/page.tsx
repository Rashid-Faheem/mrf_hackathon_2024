'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import IProduct from '@/types/product';

export default function ProductDetailPage() {
  const { slug } = useParams(); // ✅ Hook کو Component کے اندر رکھیں

  // 🟢 useState کا استعمال تاکہ product data کو store کیا جا سکے
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const handleWishlist = (product: IProduct) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    const isAlreadyInWishlist = wishlist.some((item: IProduct) => item._id === product._id);
    if (!isAlreadyInWishlist) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      toast.success('Added to Wishlist!',
        { position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.info('Already in Wishlist',
        { position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // 🟢 useEffect کے ذریعے async function call کریں
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "product" && slug.current == "${slug}"] | order(_createdAt desc) {
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
          }
        `);

        if (result.length > 0) {
          setProduct(result[0]);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]); // ✅ Dependency array میں slug شامل کریں

  // ✅ Notification function
  const notify = () =>
    toast.success('Product Added to Cart!', {
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

  // 🟢 Loading state
  if (loading) {
    return <p className="text-center text-xl">Loading product...</p>;
  }

  // 🟢 If no product is found
  if (!product) {
    return <p className="text-center text-xl text-red-500">Product not found!</p>;
  }

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

          <button
            onClick={() => handleClick(product)}
            className="mt-6 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-black transition w-full md:w-auto"
          >
            Add to Cart
          </button>
          <button
  onClick={() => handleWishlist(product)}
  className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
>
  Add to Wishlist
</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
