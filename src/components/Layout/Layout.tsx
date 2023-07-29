'use client';

import Header from '@/components/Header/Header';
import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const hideNav = path === '/login' || path === '/register';

  return (
    <NextThemeProvider attribute="class">
      <ThemeProvider>
        <Header />
        {!hideNav && <Nav />}
        <main className="px-7">
          {children}
          <ToastContainer position="bottom-left" autoClose={1000} />
        </main>
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default Layout;
