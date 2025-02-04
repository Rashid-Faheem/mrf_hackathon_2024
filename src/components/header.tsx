'use client'
import { client } from '@/sanity/lib/client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const noLayoutPages = ["/signin", "/signup"];
  //console.log(pathname)
  if (pathname === "/signin" || pathname === "/signup") {
    return null;
  }
  
  return (
    
    <div>
        <div className=' flex font-helvetica font-medium text-[8px] sm:text-[12px] items-center justify-between px-12 py-4 bg-[#F5F5F5]'>
            <Image height={16} width={24} src="/icon1.png" alt="Jordan Logo" className="h-6 sm:block hidden" />
            {/* <img src="/icon1.png" alt="Jordan Logo" className="h-6" /> */}
            <div className='flex items-center mx-auto  gap-[15.38px] '>
                <div className='flex items-center gap-[15.38px] '>
                    
                    <Link href={"/carouselpage"}><p>Find a Store</p></Link>
                    <p>|</p>
                </div>
                <div className='flex items-center gap-[15.38px] '>
                    <p>Help</p>
                    <p>|</p>
                </div>
                <div className='flex items-center gap-[15.38px] '>
                    <Link href="/signup"><p>Join Us</p></Link>
                    <p>|</p>
                </div>
                <div className='flex items-center gap-[15.38px] '>
                    <Link href="/signin"><p>Sign In</p></Link>     
                </div>
            </div>
        </div>
         <header className="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      {/* Left: Logos */}
      <div className="flex items-center space-x-4">
        <Link href="/"><Image height={16} width={40} src="/logo.png" alt="Nike Logo" className="h-6" /></Link>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex space-x-8 ">
        <Link href="/products/all">
          <div className="hover:underline">New & Featured</div>
        </Link>
        <Link href="/products/men">
          <div className="hover:underline">Men</div>
        </Link>
        <Link href="/products/women">
          <div className="hover:underline">Women</div>
        </Link>
        <Link href="/products/kids">
          <div className="hover:underline">Kids</div>
        </Link>
        <Link href="/products/sale">
          <div className="hover:underline">Sale</div>
        </Link>
        <Link href="/products/snkrs">
          <div className="hover:underline">SNKRS</div>
        </Link>
      </nav>

      {/* Right: Search, Favorites, and Cart */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className='flex items-center gap-2 rounded-full border px-3 py-2 bg-[#F5F5F5]'>
        <Image height={10} width={24} src="/search.png" alt="Search" className="h-5 cursor-pointer" />
        <input 
          type="text"
          placeholder="Search" 
          className="px-2 py-1 bg-[#F5F5F5]  rounded-full text-sm focus:outline-none "
          />
          </div>
          <Link href="/wishlist">
          <Image height={16} width={24} src="/Wishlist.png" alt="Favorites" className="h-5 cursor-pointer" />
          </Link>
        <Link href="/cart">
        <Image height={16} width={24} src="/cart.png" alt="Cart" className="h-5 cursor-pointer" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      </header>
      {/* Mobile Dropdown Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mx-auto items-center m-3 p-2 rounded  bg-slate-200 shadow-md w-4/5`}>
      <div id="mobile-menu" className="mt-1 items-center space-y-2 text-sm font-medium flex flex-col ">
        <Link href="/new-featured">
          <div className="hover:underline">New & Featured</div>
        </Link>
        <Link href="/men">
          <div className="hover:underline">Men</div>
        </Link>
        <Link href="/women">
          <div className="hover:underline">Women</div>
        </Link>
        <Link href="/kids">
          <div className="hover:underline">Kids</div>
        </Link>
        <Link href="/sale">
          <div className="hover:underline">Sale</div>
        </Link>
        <Link href="/snkrs">
          <div className="hover:underline">SNKRS</div>
        </Link>
      </div>
      </div>

  
    </div>
  )

}

export default Header
