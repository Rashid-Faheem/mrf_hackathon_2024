import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Package, Users, Truck, CreditCard, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Mobile Toggle Button */}
      <button onClick={toggleSidebar} className="p-4 md:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative h-screen w-64 bg-gray-900 text-white transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block p-5`}
      >
        {/* <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2> */}

        <nav className="space-y-4">
          <SidebarItem href="/dashboard/orders" icon={<ShoppingCart size={20} />} text="Orders" />
          <SidebarItem href="/dashboard/catalog" icon={<Package size={20} />} text="Catalog" />
          <SidebarItem href="/dashboard/customers" icon={<Users size={20} />} text="Customers" />
          <SidebarItem href="/dashboard/shipping" icon={<Truck size={20} />} text="Shipping" />
          <SidebarItem href="/dashboard/payments" icon={<CreditCard size={20} />} text="Payments" />
          <SidebarItem href="/dashboard/settings" icon={<Settings size={20} />} text="Settings" />
        </nav>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const SidebarItem = ({ href, icon, text }: SidebarItemProps) => {
  return (
    <Link href={href} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700">
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
