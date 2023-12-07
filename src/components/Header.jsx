import React from "react";
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="header">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <Link href="/" className="text-lg text-white font-bold"><img src='/img/jb.png' style={{ width: '300px', height: '100px' }} alt="logo" /></Link>
        </div>
        <div className="ml-auto flex items-center font-bold">
          <SignedOut>
            <Link href="/sign-in" className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px' }}>Sign In</Link>
            <Link href="/sign-up" className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px' }}>Sign Up</Link>
          </SignedOut>
          <SignedIn>
            <div>
            <Link href="https://edu.joongbu.ac.kr/" className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px' }}>LMS</Link>
            <Link href="https://www.joongbu.ac.kr/index.es?sid=a1" className="text-gray-300 hover:text-white mr-4" style={{ marginRight: '20px' }}>대표 홈페이지</Link>
            </div>
            <div>
            <UserButton  />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Header;
