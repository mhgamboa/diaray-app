import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb.js";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // CredentialsProvider({
    //   name: "email", // `Sign in with ${name}`
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "User Name" },
    //     password: { label: "Password", type: "password", placeholder: "Password" },
    //   },

    //   async authorize(credentials, req) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either an object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
    //     console.log(credentials);
    //     const res = await fetch("/your/endpoint", {
    //       method: "POST",
    //       body: JSON.stringify(credentials),
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     const user = await res.json();
    //     if (res.ok && user) {
    //       return user; // If no error and we have user data, return it
    //     }
    //     return null; // Return null if user data could not be retrieved
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7 * 1, //sec * min * hour * day = 1 week
  },
});
