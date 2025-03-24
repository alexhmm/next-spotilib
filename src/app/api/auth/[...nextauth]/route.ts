import { authOptions } from '@/auth';
import NextAuth from 'next-auth';

// Define the auth options directly in the route file
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
