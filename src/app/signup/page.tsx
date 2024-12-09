import Link from 'next/link'
import React from 'react'

import Image from 'next/image'


const Signup = () => {
  return (
    <div>

    <div className="flex items-center justify-center font-helvetica p-7">
      <div className="w-full max-w-[380px] p-8 items-center space-y-6 flex flex-col bg-white ">
        <img className="mx-auto h-5 w-auto" src="./logo.png" alt="" />
        <h2 className="text-sm font-bold font-helveticaBold text-center w-7/12 sm:text-lg">
        BECOME A NIKE MEMBER
        </h2>
        <form className="mt-12 space-y-6">
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
