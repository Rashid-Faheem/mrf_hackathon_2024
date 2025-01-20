"use client"
import IProduct from "@/types/product";
import { useState, useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '{}');
    setCartItems(Object.values(storedCart)); 
  }, []);

  // Update quantity
  const updateQuantity = (name: string, amount : number) => {
    const updatedCart = { ...JSON.parse(localStorage.getItem("cart") || '{}') };
    if (updatedCart[name]) {
      updatedCart[name].quantity = Math.max(1, updatedCart[name].quantity + amount);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(Object.values(updatedCart));
      notifyupdate();
    }
  };

  // Remove item from cart
  const removeItem = (name: string) => {
    const updatedCart = { ...JSON.parse(localStorage.getItem("cart") || '{}') };
    delete updatedCart[name];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(Object.values(updatedCart));
    notifyDelete();
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item:IProduct) => total + item.price * item.quantity, 0);
  const notifyupdate = () => toast.success('Cart Updated!', {
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
    const notifyDelete = () => toast.error('Product Removed!', {
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
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left: Cart Items */}
      <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
        <p className="text-gray-600 text-sm border-b pb-2">
          <span className="font-semibold">Free Delivery</span> Applies to orders of ₹14,000.00 or more.{" "}
          <a href="#" className="underline">View details</a>
        </p>

        <h1 className="text-2xl font-bold my-4">Bag</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item:IProduct) => (
            <div key={item.name} className="flex items-start border-b py-6">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />

              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-900 font-semibold mt-2">MRP: ₹ {item.price.toLocaleString()}</p>
                
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.name, -1)}
                    className="bg-gray-200 px-3 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, 1)}
                    className="bg-gray-200 px-3 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button onClick={() => removeItem(item.name)} className="text-gray-500 hover:text-red-500">
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right: Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>₹ {totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t pt-4">
          <span>Total</span>
          <span>₹ {totalPrice.toLocaleString()}</span>
        </div>
        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg text-center text-lg font-semibold">
          Member Checkout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
