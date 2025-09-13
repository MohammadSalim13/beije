'use client';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import GlobalToast from '@/components/layout/toast';

import { BaseProps } from '@/@utilities/type';

export default function DefaultLayout({ children }: BaseProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <GlobalToast />
    </>
  );
}
