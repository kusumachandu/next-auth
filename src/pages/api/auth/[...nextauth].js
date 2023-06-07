import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider[{
      name: 'Credentials',
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // Example: Check if the username and password are valid
        const isValid = await checkCredentials(email, password);

        if (isValid) {
          // Return the user object to be stored in the session
          return { email };
        } else {
          // Return null or throw an error to indicate authentication failure
          throw new Error('Invalid username or password');
        }
      }
    }]
  ]
})