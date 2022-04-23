/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import NavLink from '../NavLink';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Navbar() {
  const router = useRouter();
  const token = Cookies.get('token');

  return (
    <nav className='container navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link href={'/'}>
          <a className='navbar-brand'>
            <img src='/images/logo.svg' alt='semina' />
          </a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div
            className={`navbar-nav ${
              router.pathname !== '/signin' ? 'mx-auto' : 'ms-auto'
            } my-3 my-lg-0`}
          >
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/browse'}>Browse</NavLink>
            <NavLink href={'/stories'}>Stories</NavLink>
            <NavLink href={'/about'}>About</NavLink>
          </div>

          {router.pathname !== '/signin' && (
            <div className='d-grid'>
              {token ? (
                <Link href={'/dashboard'}>
                  <a className='btn-navy'>Dashboard</a>
                </Link>
              ) : (
                <Link href={'/signin'}>
                  <a className='btn-navy'>Sign In</a>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
