"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const Checkout = () => {
  interface CartItem {
    name: string;
    price: number;
    quantity: number;
  }
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const router = useRouter();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}") ;
    const itemsArray = Object.values(storedCart) as CartItem[];
    setCartItems(itemsArray);

    // Calculate total price
    const total = itemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  // Handle form changes
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle order submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log(formData);
    console.log(cartItems);
   // localStorage.removeItem("cart"); // Clear cart after checkout
    router.push("/OrderConfirmation");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Billing Form */}
        <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="w-1/2 p-3 border rounded-md"
                onChange={handleChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                required
                className="w-1/2 p-3 border rounded-md"
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between border-b pb-3 mb-3">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">₹ {item.price.toLocaleString()}</p>
              </div>
            ))
          )}
          <div className="flex justify-between text-lg font-bold border-t pt-4">
            <span>Total</span>
            <span>₹ {totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
