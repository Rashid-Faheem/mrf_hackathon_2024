
"use client"; // Ensure this is a Client Component
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+

const ProdPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/products/all"); // Redirect to another page
  }, [router]); // Runs only once when the component mounts

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Redirecting...</h1>
      <p className="text-gray-600 mt-2">Please wait...</p>
    </div>
  );
};

export default ProdPage;
