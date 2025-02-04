
// import { NextResponse, NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// // Custom Middleware Function
// export async function middleware(request: NextRequest) {
//     const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
//     const { pathname } = request.nextUrl;

//     console.log("Middleware Token:", token);

//     if (token && pathname === "/checkout") {
//         return NextResponse.next();
//     }
    
    
//     if (token && pathname === "/signin") {
//         return NextResponse.redirect(new URL("/", request.url));
//     }
//     if (token) {
//         return NextResponse.next();
//     }

//     return NextResponse.redirect(new URL("/signin", request.url));
// }

// // Define Routes Where Middleware Should Apply
// export const config = {
//     matcher: [
//         "/home",
//         "/checkout",
        
//     ],
// };






import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    // console.log("🔹 Middleware Running...");
    // console.log("📌 Request Path:", request.nextUrl.pathname);
    console.log("🟢 Token in Middleware:", token);

    if (token) {
        if (request.nextUrl.pathname === "/signin") {
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    }

    if (request.nextUrl.pathname === "/checkout"
        || request.nextUrl.pathname === "/admin"
    ) {
        console.log("🔴 No Token Found! Redirecting to /signin");
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

// Apply middleware only to checkout
export const config = {
    matcher: ["/checkout",
    "/admin",
    "/dashboard/:path*",

    ],
};
