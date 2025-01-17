
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";

import React from 'react'

const footer = () => {
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
    <img src="../twitter.png" alt="" />
    <img src="../facebook.png" alt="" />
    <img src="../youtube.png" alt="" />
    <img src="../instagram.png" alt="" />
  </div> 
        </div>
        {/* next div Section */}

<div className="flex justify-between text-[10px] text-[#7E7E7E] py-4">
<div className="flex gap-2">
  <img src="../ind.png" alt="" />
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

export default footer
