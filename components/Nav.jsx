"use client";

import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { useState } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

const Nav = () => {
  const { user, isLoaded } = useUser();
  const [toggleDropdown, setToggleDropdown] = useState(false);

=======
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
<<<<<<< HEAD
        {isLoaded && user ? (
=======
        {session?.user ? (
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

<<<<<<< HEAD
            <SignOutButton>
              <button type='button' className='outline_btn'>
                Sign Out
              </button>
            </SignOutButton>

            <Link href='/profile'>
              <Image
                src={user.imageUrl}
=======
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
<<<<<<< HEAD
          <SignInButton>
            <button type='button' className='black_btn'>
              Sign In
            </button>
          </SignInButton>
=======
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
<<<<<<< HEAD
        {isLoaded && user ? (
          <div className='flex'>
            <Image
              src={user.imageUrl}
=======
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
<<<<<<< HEAD
                <SignOutButton>
                  <button type='button' className='mt-5 w-full black_btn'>
                    Sign Out
                  </button>
                </SignOutButton>
=======
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
              </div>
            )}
          </div>
        ) : (
<<<<<<< HEAD
          <SignInButton>
            <button type='button' className='black_btn'>
              Sign In
            </button>
          </SignInButton>
=======
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
        )}
      </div>
    </nav>
  );
};

export default Nav;
