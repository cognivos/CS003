import NextAuth from "next-auth";
import { authOptions } from "./lib/auth.options";
 
export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);