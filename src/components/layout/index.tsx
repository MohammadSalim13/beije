'use client';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import { BaseProps } from '@/@utilities/type';

export default function DefaultLayout({ children }: BaseProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
