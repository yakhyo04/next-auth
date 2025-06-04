// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { auth } from "@/server/auth";

const handler = NextAuth(auth);

export { handler as GET, handler as POST };
