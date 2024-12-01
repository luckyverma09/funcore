import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className='bg-indigo-600'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
          <div className='flex items-center'>
            <Link href='/' className='text-white text-2xl font-bold'>
              FunCore
            </Link>
            <div className='hidden ml-10 space-x-8 lg:block'>
              <Link
                href='/dashboard'
                className='text-base font-medium text-white hover:text-indigo-50'
              >
                Dashboard
              </Link>
              <Link href='/games' className='text-base font-medium text-white hover:text-indigo-50'>
                Games
              </Link>
            </div>
          </div>
          <div className='ml-10 space-x-4'>
            {session ? (
              <>
                <span className='text-white text-base font-medium mr-4'>
                  Welcome, {session.user.name}
                </span>
                <Link
                  href='/profile'
                  className='inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href='/login'
                  className='inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'
                >
                  Sign in
                </Link>
                <Link
                  href='/signup'
                  className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
