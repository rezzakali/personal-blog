'use client';

import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const hideNav = path === '/login' || path === '/register';

  return (
    <ThemeProvider>
      {!hideNav && <Nav />}
      <main className="m-4">
        {children}
        <ToastContainer position="bottom-left" autoClose={1000} />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
