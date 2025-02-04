"use client";

import { useState, useEffect } from "react";
import { client as sanityClient } from "@/sanity/lib/client";
import Link from "next/link";

interface Order {
  _id: string;
  orderNumber: string;
  user: {
    name: string;
    email: string;
  };
  totalPrice: number;
  status: string;
  createdAt: string;
}

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders from Sanity
    const fetchOrders = async () => {
      const query = `*[_type == "order"]{
        _id,
        "orderNumber" : orderId,
        user->{
          name, email
        },
        totalPrice,
        status,
        createdAt
      } | order(createdAt desc)`;
      
      const data = await sanityClient.fetch(query);
      setOrders(data);
    };

    fetchOrders();
  }, []);

  // Status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-500 text-white";
      case "Processing":
        return "bg-yellow-500 text-white";
      case "Unpaid":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Order #</th>
              <th className="p-3 border">Customer</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Total Price</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{order.orderNumber}</td>
                  <td className="p-3 border">{order.user?.name || "Guest"}</td>
                  <td className="p-3 border">{order.user?.email || "N/A"}</td>
                  <td className="p-3 border">₹ {order.totalPrice.toFixed(2)}</td>
                  <td className="p-3 border">
                    <span className={`px-3 py-1 rounded-full ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 border">{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 border">
                  <Link href={`/dashboard/orders/${order._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">View</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
