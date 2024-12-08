import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <div>
        <div className='hidden sm:flex font-helvetica font-medium text-[12px] items-center justify-between px-12 py-4 bg-[#F5F5F5]'>
            <img src="./icon1.png" alt="Jordan Logo" className="h-6" />
            <div className='flex items-center gap-[15.38px]'>
                <div className='flex items-center gap-[15.38px] '>
                    <p>Find a Store</p>
                    <p>|</p>
                </div>
                <div className='flex items-center gap-[15.38px] '>
                    <p>Help</p>
                    <p>|</p>
                </div>
                <div className='flex items-center gap-[15.38px] '>
                    <p>Join Us</p>
                    <p>|</p>
                </div>
                <div className='flex items-center gap-[15.38px] '>
                    <p>Sign In</p>
                </div>
            </div>
        </div>
         <header className="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      {/* Left: Logos */}
      <div className="flex items-center space-x-4">
        <Link href="/"><img src="./logo.png" alt="Nike Logo" className="h-6" /></Link>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex space-x-8 ">
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
      </nav>

      {/* Right: Search, Favorites, and Cart */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className='flex items-center gap-2 rounded-full border px-3 py-2 bg-[#F5F5F5]'>
          <img src="./search.png" alt="Search" className="h-5 cursor-pointer" />
        <input 
          type="text"
          placeholder="Search" 
          className="px-2 py-1 bg-[#F5F5F5]  rounded-full text-sm focus:outline-none "
          />
          </div>
        <img src="./Wishlist.png" alt="Favorites" className="h-5 cursor-pointer" />
        <img src="./cart.png" alt="Cart" className="h-5 cursor-pointer" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button id="menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div id="mobile-menu" className="absolute top-16 left-0 w-full bg-white shadow-md hidden flex-col items-center space-y-4 p-4 md:hidden">
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
    </header>
  
    </div>
  )
}

export default header
