


"use client";
import { client  as  sanityClient } from "@/sanity/lib/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { v4 } from "uuid";

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
  const { data: session } = useSession();
const userId = session?.user?._id; // Get logged-in user's ID
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    const itemsArray = Object.values(storedCart) as CartItem[];
    setCartItems(itemsArray);

    const total = itemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  // Handle form changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle order submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    if (!userId) {
      alert("You must be logged in to place an order.");
      return;
    }
    const orderNumber = `ORD-${nanoid(6)}`;
    

    try {
      // Step 1: Create Order in Sanity
      const orderResponse = await sanityClient.create({
        _type: "order",
        user: { _type: "reference", _ref: userId }, // Use actual user ID
        orderId: orderNumber,
        items: cartItems.map((item) => ({
          _key: nanoid(),
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalPrice,
        status: "Pending",
        createdAt: new Date().toISOString(),
      });
  
      console.log("Order created:", orderResponse);
  
      // Step 2: Create Shipment Tracking
      // const shipmentResponse = await sanityClient.create({
      //   _type: "shipmentTracking",
      //   order: { _type: "reference", _ref: orderResponse._id }, // Reference Order ID
      //   trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
      //   carrier: "SELF",
      //   status: "In Transit",
      //   estimatedDelivery: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(),
      //   updatedAt: new Date().toISOString(),
      // });
      // console.log("Shipment tracking created:", shipmentResponse);

      // const updatedOrderResponse = await sanityClient.patch(orderResponse._id) // Use the order ID to patch the document
      // .set({
      //   shipment: { _type: "reference", _ref: shipmentResponse._id }, // Add the shipment reference to the order
      // })
      // .commit();
      // console.log("Order updated with shipment reference:", updatedOrderResponse);

      
      
  
      alert("Order placed successfully!");
      localStorage.removeItem("cart"); // Clear cart after checkout
      router.push("/OrderConfirmation");
    } catch (error) {
      console.error("Error creating order or shipment:", error);
      alert("Failed to place order. Please try again.");
    }
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
