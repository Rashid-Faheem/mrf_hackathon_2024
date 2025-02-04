
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (session) {
   
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <p className="text-lg font-semibold">Signed in as {session.user?.email }</p>
<div className='flex gap-4'>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => signOut()}
          >
          Sign out
        </button>

        <Link href={"/"}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
        
          Back to Home
        </Link>
          </div>
      </div>
    );
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    });
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
          {/* <div className="flex flex-col items-center gap-4 p-4">
      <p className="text-lg text-gray-700">Not signed in</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={async () => {
          try {
            await signIn("credentials");
          } catch (error) {
            console.error("Sign in failed:", error);
          }
        }}
      >
        Sign in
      </button>
    </div> */}

      <Card className="w-full max-w-md shadow-lg p-6 bg-white dark:bg-gray-800 rounded-2xl">
        {/* <CardHeader className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome Back
        </CardHeader> */}
        <CardHeader className='w-full max-w-[380px] p-8 items-center space-y-6 flex flex-col'><Image className="mx-auto h-5 w-auto" src="/logo.png" alt="Jordan Logo" width={100} height={100} />
        {/* <img className="mx-auto h-5 w-auto" src="./logo.png" alt="" /> */}
        <h2 className="text-sm font-bold font-helveticaBold text-center w-7/12 sm:text-lg">
        YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => signIn('google', { callbackUrl: '/' })} 
            className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
            <FcGoogle size={20} /> Sign in with Google
          </Button>

          <div className="relative my-6 text-center">
            <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 text-sm">OR</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full px-4 py-2 border rounded-lg" 
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full px-4 py-2 border rounded-lg" 
            />
            <div>
    <p className='text-xs text-center px-6 text-[#7E7E7E] mb-[25px]'>{"By logging in, you agree to Nike's "}<u>Privacy Policy</u> and <u>Terms of Use</u>.</p>
</div>
            <Button type="submit" className="w-full px-4 py-2 text-white bg-black rounded border-black  border-2 hover:bg-white hover:text-black">
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
          Not a Member?
          <Link href="./signup"><u>Join Us.</u></Link>
          </p>
        </CardContent>
      </Card>
      
    </div>
  );
}
