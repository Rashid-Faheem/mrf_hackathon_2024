"use client"; // Ensure it's a client-side component
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use "next/navigation" in Next.js 13+

const OrderConfirmation = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000); // Redirect to homepage after 3 seconds
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h1>
      <p className="text-gray-600 mt-2">Thank you for shopping with us.</p>
      <p className="text-gray-600">You will be redirected to the homepage shortly.</p>
    </div>
  );
};

export default OrderConfirmation;
