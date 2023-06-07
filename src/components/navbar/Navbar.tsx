import Link from 'next/link';
import React from 'react'
import { useSession, signOut } from 'next-auth/react';

function Navbar() {

  const { data: session} = useSession();

  function handleSignOut(){
    signOut();
  }

  return (
    <div className='flex px-5 justify-between bg-black text-white py-5'>
      <p>Next-Auth</p>
      <div className='flex gap-5'>
        <Link href="/login" onClick={handleSignOut}>
          {
            session ? 'Logout' : 'Login'
          }
        </Link>
        <Link href="/register">Register</Link>
        {
          session && <p>Admin</p>
        }
      </div>
    </div>
  )
}

export default Navbar