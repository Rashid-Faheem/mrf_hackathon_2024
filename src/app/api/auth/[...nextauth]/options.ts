
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import { client } from "@/sanity/lib/client";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string || "",// process.env.GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string || "",// process.env.GOOGLE_SECRET as string,
          }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            // async authorize(credentials) {
            //     console.log("AUTHORIZE")
            //     console.log(credentials)
            //     console.log(credentials?.email)

            //     const query = `*[_type == "user" && email == $email][0]`;
            //     const existingUser = await client.fetch(query, { email: credentials?.email });
            //     console.log(existingUser);
            //     if (!existingUser) {
            //         return null;
            //     }
            //     //const user = { id: "1", name: "mrashidfaheem@gmail.com", password: "123" };
                
            //     if(credentials?.email === existingUser.email && credentials?.password && bcrypt.compareSync(credentials.password, existingUser.password)) {

            //    // if (credentials?.email === existingUser.email && credentials?.password === existingUser.password) {
            //         // bcrypt.compareSync(credentials.password, user.password)) {
            //             console.log(existingUser)
            //         return existingUser;
            //     } else {
            //         console.log("ERRPR" + existingUser)
            //         return null;
            //     }
            // }

            async authorize(credentials) {
            
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
            
                const query = `*[_type == "user" && email == $email][0]`;
                const existingUser = await client.fetch(query, { email: credentials?.email });
            
                if (!existingUser) {
                    return null;
                }
            
            
                const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password);
                if (!passwordMatch) {
                    return null;
                }
            
                return existingUser; 
            }
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (!user?.email) return false; // Ensure email exists
      
            const existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email: user.email });
      
            if (!existingUser) {
              const newUser = {
                _type: "user",
                name: user.name,
                email: user.email,
                image: user.image || "",
                provider: account?.provider || "credentials",
                createdAt: new Date().toISOString(),
              };
      
              await client.create(newUser);
            }
             return true;
          },
        async jwt({ token, user }) {
            if (user) {
                
                token._id = user._id?.toString();
                token.isAdmin = user.isAdmin;
                token.email = user.email;
            }
            return token;
        },
        
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.isAdmin = token.isAdmin;
                session.user.email = token.email;
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin",
        signOut: "/signout",
        error: "/error",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};





