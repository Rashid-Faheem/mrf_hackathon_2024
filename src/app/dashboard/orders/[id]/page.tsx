"use client"
import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import IProduct from "@/types/product";
import Link from "next/link";

const OrderDetails = () => {
  
  const { id }  = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  
  interface Order {
    _id: string;
    orderId: string;
    user: string;
    items: { _key: string; name: string; price: number; quantity: number }[];
    totalPrice: number;
    status: string;
    tracking?: string;
  }

  useEffect(() => {
    if (id) {
      fetchOrderDetails();
    }
  }, [id]);

  const fetchOrderDetails = async () => {
    const query = `*[_type == "order" && _id == "UkSlqgX21Ynj4MrDomyZVh"][0]
{"items":items[]
    {_key,
    name,
    price,
    quantity},
    _id,
    'user':user->email,
    totalPrice,
    status,
    orderId,
   }`;
    // const query = `*[_type == "order" && _id == $id][0] 
    // {
    //   _id,
    //   user-> { name, email },
    //   items[] { product-> { name, price }, quantity },
    //   totalAmount,
    //   status,
    //   tracking
    // }
    //   `;

    const data = await client.fetch(query, { id });
    console.log(data)
    setOrder(data);
  };

  if (!order) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">


      <Link href="/dashboard/orders"  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
         >Back to Orders
      </Link>

      <h1 className="text-2xl font-bold mt-6">Order Details</h1>
      <p><strong>Order ID:</strong> {order.orderId}</p>
      <p><strong>Customer:</strong> {order.user} </p>
      <p><strong>Status:</strong> {order.status}</p>

      <h2 className="text-xl font-bold mt-4">Items</h2>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.quantity} X {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <p className="font-bold mt-4">Total: {order.totalPrice}</p>

      {order.tracking && (
        <p><strong>Tracking Number:</strong> {order.tracking}</p>
      )}
    </div>
  );
};

export default OrderDetails;
