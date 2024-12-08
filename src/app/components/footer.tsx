import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";

import React from 'react'

const footer = () => {
  return (
    <footer className="bg-black text-white pt-10 font-helvetica">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 px-4 lg:px-24">
          <div className="text-lg font-normal mb-6 flex flex-col text-[10px] leading-8">
          {/* 1ST Section */}
          <h3 >FIND A STORE</h3>
            <h3 >BECOME A MEMBER</h3>
            <h3 >SIGN UP FOR EMAIL</h3>
            <h3 >Send Us Feedback</h3>
            <h3>STUDENT DISCOUNT</h3>            
            </div>

  
          {/* 2ND Section */}
          <div className="text-xs font-normal mb-6 flex flex-col  leading-8">
            <h3>GET HELP</h3>
            <h3>Order Status</h3>
            <h3>Delivery</h3>
            <h3>Returns</h3>
            <h3>Payment Options</h3>
            <h3>Contact Us On Nike.com Inquiries</h3>
            <h3>Contact Us On All Other Inquiries</h3>

            </div>
            {/* Account Section */}
          <div>
            <h3 className=" text-lg mb-6">Account</h3>
            {/* <p className="mb-4"><a href="/" className="hover:text-gray-400">My Account</a></p>
            <p className="mb-4"><Link href="/signup" > Login / Register</Link></p>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">Cart</a></p>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">Wishlist</a></p>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">Shop</a></p>
           */}
  </div>
          {/* Quick Link Section */}
          <div>
            <h3 className=" text-lg mb-6">Quick Link</h3>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">Privacy Policy</a></p>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">Terms Of Use</a></p>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">FAQ</a></p>
            <p className="mb-4"><a href="/" className="hover:text-gray-400">Contact</a></p>
          </div>
  
          {/* Download App Section */}
          <div>
            <h3 className="text-lg mb-6">Download App</h3>
            <p className="text-xs mb-2">Save $3 with App New User Only</p>
            <img src="./img.png" alt="" />
            <div className="flex gap-6 mt-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            </div>
          </div>
        </div>
  
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-[16px] pb-6 opacity-[40%]">
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>
  )
}

export default footer
