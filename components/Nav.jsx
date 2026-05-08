"use client";

import Link from "next/link";
import Image from "next/image";
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

  return (
    <nav
      className='flex-between w-full pt-4 pb-4 mb-10'
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <Link href='/' className='flex gap-3 items-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={26}
          height={26}
          className='object-contain'
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
        />
        <p className='logo_text max-sm:hidden'>Promptopia</p>
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            background: 'var(--accent)',
            marginLeft: '-6px',
            marginBottom: '18px',
            flexShrink: 0,
          }}
        />
      </Link>

      {/* Desktop */}
      <div className='sm:flex hidden items-center gap-3'>
        {session?.user ? (
          <>
            <Link href='/create-prompt' className='black_btn'>
              + New Prompt
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={32}
                height={32}
                className='object-contain'
                alt='profile'
                style={{ border: '1px solid var(--border-2)' }}
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={32}
              height={32}
              className='object-contain'
              alt='profile'
              style={{ border: '1px solid var(--border-2)', cursor: 'pointer' }}
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
                  New Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => { setToggleDropdown(false); signOut(); }}
                  className='mt-3 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
