"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Assuming you're using this for sanity client
import Sidebar from "@/components/sidebar";

const AdminDashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // Ensure only the admin can access the dashboard (based on email or role)
  useEffect(() => {
console.log("session")
    console.log(session)

    // if (!session || session?.user?.email !== "mrashidfaheem@gmail.com") {
    //   router.push("/"); // Redirect if not admin
    // }
  }, [session, router]);

  useEffect(() => {
    // Fetch orders and users from Sanity
    const fetchOrders = async () => {
      const ordersData = await client.fetch(`*[_type == "order"]`);
      setOrders(ordersData);
    };

    const fetchUsers = async () => {
      const usersData = await client.fetch(`*[_type == "user"]`);
      setUsers(usersData);
    };

    fetchOrders();
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center bg-slate-200 p-2 mx-auto rounded shadow-lg">Admin Dashboard</h1>
      <div className="flex items-center gap-5 mb-6">
      <Sidebar />

      {/* Orders */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order: any) => (
            <div key={order._id} className="p-4 border-b">
              <p>Order Number: {order.orderId}</p>
              <p>Status: {order.status}</p>
              <p>Total Price: ₹ {order.totalPrice}</p>
            </div>
          ))
        )}
      </div> */}

      {/* Users */}
      {/* <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user: any) => (
            <div key={user._id} className="p-4 border-b">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        )}
      </div> */}
        </div>
    </div>
  );
};

export default AdminDashboard;
