import type { UserRole } from '@prisma/client';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession`, and `auth` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role: UserRole | null;
    } & DefaultSession['user'];
  }
}
