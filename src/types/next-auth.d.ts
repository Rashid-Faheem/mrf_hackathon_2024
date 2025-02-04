import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {
        _id?: string;
        isAdmin?: boolean;
        email?: string;
    }

    interface Session extends DefaultSession {
        user: User & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        _id?: string;
        isAdmin?: boolean;
        email?: string;
    }
}
