'use client';

import Header from '@/components/Header/Header';
import { ThemeProvider } from '@/components/MTComponents/MTComponents';
import ScrollToTop from '@/ui/ScrollToTop';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showScroll, setShowScroll] = useState(false);

  const path = usePathname();
  const hideNav = path === '/login' || path === '/register';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NextThemeProvider attribute="class">
      <ThemeProvider>
        <Header />
        {!hideNav && <Nav />}
        <main>
          {children}
          <ToastContainer position="bottom-left" autoClose={1000} />
        </main>
        {showScroll && <ScrollToTop />}
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default Layout;
