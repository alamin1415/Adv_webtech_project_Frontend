//'use client';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.brand}>Laundry_service</h1>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Sign Up</Link>
          </li>
          <li>
            <Link href="/customer">Customer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
