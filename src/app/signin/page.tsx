import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <div>
      <div className="flex items-center justify-center font-helvetica p-7">
      <div className="w-full max-w-[380px] p-8 items-center space-y-6 flex flex-col bg-white ">
        <img className="mx-auto h-5 w-auto" src="./logo.png" alt="" />
        <h2 className="text-sm font-bold font-helveticaBold text-center w-7/12 sm:text-lg">
        YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>
        <form className="space-y-4" >
          <div>
        
            <input
              type="email"
              id="email"
              required
              placeholder='Email address'
              className="w-full px-4 py-2 mt-1  border rounded-md "
             
            />
          </div>

          <div>
            
            <input
              type="password"
              id="password"
              required
              placeholder='Password'
              className="w-full px-4 py-2 mt-1 border rounded-md "
              />
          </div>

<div className="text-sm text-[#7E7E7E] flex justify-between">
          <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" >
                Keep me signed in
              </label>
            </div>
            <div>
                <Link href="/" >Forgotten your password?</Link>
            </div>
            </div>

<div>
    <p className='text-xs text-center px-6 text-[#7E7E7E] mb-[25px]'>By logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use</u>.</p>
</div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded "
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Not a Member?
          <Link href="./signup"><u>Join Us.</u></Link>
          </p>
      </div>
    </div>
    </div>
  )
}

export default SignIn