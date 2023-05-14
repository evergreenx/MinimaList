import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);
        const res = await axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          })
          .then((res) => {
            console.log(res);

            if (res.status === 200) {
              return res.data;
            }
          });

        if (res) {
          return res;
        }

        console.log("res", res);

        console.log("res", res);

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
