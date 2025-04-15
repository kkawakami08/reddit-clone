// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { db } from "./db";

// const GITHUB_CLIENT_ID = process.env.AUTH_GITHUB_ID;
// const GITHUB_CLIENT_SECRET = process.env.AUTH_GITHUB_SECRET;

// if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET)
//   throw new Error("Missing github OAuth Credentials");

// export const {
//   handlers: { GET, POST },
//   signIn,
//   signOut,
//   auth,
// } = NextAuth({
//   adapter: PrismaAdapter(db),
//   providers: [
//     GitHub({
//       clientId: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     async session({ session, user }: any) {
//       if (session && user) {
//         session.user.id = user.id;
//       }
//       return session;
//     },
//   },
// });

//from robot
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

const GITHUB_CLIENT_ID = process.env.AUTH_GITHUB_ID;
const GITHUB_CLIENT_SECRET = process.env.AUTH_GITHUB_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET)
  throw new Error("Missing GitHub OAuth Credentials");

const nextAuthConfig = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});

// ✅ Export handlers for the route
export const { handlers } = nextAuthConfig;

// ✅ Export everything else as needed
export const { signIn, signOut, auth } = nextAuthConfig;
