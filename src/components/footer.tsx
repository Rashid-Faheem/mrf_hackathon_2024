'use client'
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";

import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathname = usePathname();
  const noLayoutPages = ["/signin", "/signup"];
  //console.log(pathname)
  if (pathname === "/signin" || pathname === "/signup") {
    return null;
  }
  
  return (
    <footer className="bg-black text-white pt-10 font-helvetica px-12">
      <div className="lg:flex items-start justify-between">
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16  ">
          <div className="text-xs font-normal mb-6 flex flex-col gap-2 leading-8">
          {/* 1ST Section */}
          <h3 >FIND A STORE</h3>
            <h3 >BECOME A MEMBER</h3>
            <h3 >SIGN UP FOR EMAIL</h3>
            <h3 >Send Us Feedback</h3>
            <h3>STUDENT DISCOUNT</h3>            
            </div>

  
          {/* 2ND Section */}
          <div className="text-xs font-normal mb-6 flex flex-col  leading-8 text-[#7E7E7E]">
            <h3 className="text-white">GET HELP</h3>
            <h3>Order Status</h3>
            <h3>Delivery</h3>
            <h3>Returns</h3>
            <h3>Payment Options</h3>
            <h3>Contact Us On Nike.com Inquiries</h3>
            <h3>Contact Us On All Other Inquiries</h3>

            </div>
            {/* 3rd Section */}
            <div className="text-xs font-normal mb-6 flex flex-col  leading-8 text-[#7E7E7E]">
            <h3 className="text-white">ABOUT NIKE</h3>
            <h3>News</h3>
            <h3>Careers</h3>
            <h3>Investors</h3>
            <h3>Sustainability</h3>

            </div>

          {/* bLANK Section */}
          <div>
          </div>
  
      
        </div>
         {/* SOCIAL Section */}
        <div className="flex gap-4 h-3">
    <Image src="/twitter.png" alt="" width={12} height={5} />
    <Image src="/facebook.png" alt="" width={12} height={5} />
    <Image src="/youtube.png" alt="" width={12} height={5} />
    <Image src="/instagram.png" alt="" width={12} height={5} />
  </div> 
        </div>
        {/* next div Section */}

<div className="flex justify-between text-[10px] text-[#7E7E7E] py-4">
<div className="flex gap-2">
  <Image width={24} height={16} src="/ind.png" alt="" />
<h3>© 2023 NIKE, Inc. All Rights Reserved</h3>
</div>
<div className="flex gap-4">
<h3>Guides</h3>
<h3>Terms of Sale</h3>
<h3>Terms of Use</h3>
<h3>Nike Privacy Policy</h3>
</div>
</div>

      </footer>

  )
}

export default Footer
