import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
      CredentialsProvider({
        type: 'credentials',
        credentials: {},
        authorize(credentials, req) {
          const {email, password} = credentials
          return {email: email, password: password}
        },
        pages: {
          signin: '/'
        }
      })
  ]
}

export default NextAuth(authOptions);