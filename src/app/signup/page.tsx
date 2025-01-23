'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';

import bcrypt from 'bcryptjs';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if user already exists in Sanity
      const query = `*[_type == "user" && email == $email][0]`;
      console.log(query);
      const existingUser = await client.fetch(query, { email: formData.email });

      if (existingUser) {
        alert("User already exists!");
        setLoading(false);
        return;
      }

      // Hash the password before storing
      const hashedPassword = await   bcrypt.hash(formData.password, 10);
      console.log(hashedPassword);
      // Create new user in Sanity
      const newUser = await client.create({
        _type: "user",
        fullName: formData.fullName,
        email: formData.email,
        password: hashedPassword, // Store hashed password
        orders: [],
      });

      console.log("New user created:", newUser);

      alert("Signup successful!");
      router.push("/dashboard"); // Redirect after signup
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed, try again!");
    }

    setLoading(false);
  };
  
  return (
    <div>

    <div className="flex items-center justify-center font-helvetica p-7">
      <div className="w-full max-w-[480px] md:p-4 md:px-5 items-center space-y-6 flex flex-col bg-white ">
        <Image className="mx-auto h-5 w-auto" src="/logo.png" alt="Jordan Logo" width={100} height={100} />
        {/* <img className="mx-auto h-5 w-auto" src="./logo.png" alt="" /> */}
        <h2 className="text-sm font-bold font-helveticaBold text-center w-7/12 sm:text-lg">
        BECOME A NIKE MEMBER
        </h2>
        {/* <form className="mt-12 space-y-6">
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
          />
          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              required
              className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200"
            />
            <p className="text-xs text-slate-500 mt-2">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <select className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200">
            <option value="">India</option>
          </select>
          <div className="flex gap-4">
            <button type="button" className="w-1/2 px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 text-slate-600">
              Male
            </button>
            <button type="button" className="w-1/2 px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 text-slate-600">
              Female
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="sr-only"
            />
            <span 
              className={`w-5 h-5 border border-gray-300 rounded mr-2 flex items-center justify-center `}
            >
            </span>
            <label htmlFor="email-signup" className="text-sm text-slate-500">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </label>
          </div>
          <p className="text-sm text-center text-slate-500">
            By creating an account, you agree to Nike&apos;s{' '}
            <Link href="#" className="underline text-slate-600 hover:text-black">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline text-slate-600 hover:text-black">
              Terms of Use
            </Link>
          </p>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            JOIN US
          </button>
        </form> */}

        <form  className="space-y-4">
        <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-3 border rounded-md" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-md" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required className="w-full p-3 border rounded-md" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit} className="w-full bg-black text-white py-3 rounded-md font-semibold">
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

        <p className="text-sm text-center text-gray-600">
        Already a Member?
          <Link href="./signin"><u>Sign In</u></Link>
          </p>
      </div>
    </div>
    
    </div>
  )
}

export default Signup
