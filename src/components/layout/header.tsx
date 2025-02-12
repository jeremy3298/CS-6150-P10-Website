'use client';

import Link from 'next/link';
import { UserMenu } from './user-menu';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export function Header() {
  const { data, status } = useSession();

  return (
    <header className='fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-4'>
      <div className='flex items-center justify-center gap-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/c4g-logo.png'
            alt='Computing for good'
            width='32'
            height='32'
          />
        </Link>
        {status === 'authenticated' && data?.user.role === 'ADMIN' ? (
          <Link
            href='/users'
            className='text-sm font-medium hover:text-primary'
          >
            Users
          </Link>
        ) : null}
      </div>
      <UserMenu />
    </header>
  );
}
