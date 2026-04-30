'use client'
import { signOut, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const {data, isPending} = useSession();
    console.log("seassion data in Navbar", data, 'ispending', isPending);

    if(isPending){
        return <div>Loding....</div>
    }

    const user = data?.user;

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <p className="font-bold">ACME</p>
                    <ul className='flex items-center gap-4'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/dashboard'>Dashboard</Link></li>
                        <li><Link href='/about'>About</Link></li>
                    </ul>
                    <div>
                        {user ? <>
                        <p>Welcome, {user.name}</p>
                        <Button
                        onClick={() => signOut()}
                        >Sign Out</Button>
                        </> : <>
                        <Link href='/auth/signin'>Sign In</Link>
                        </>}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;