import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ReduxProvider from '@/components/layout/redux-provider';

import { BaseProps } from '@/@utilities/type';

export default function DefaultLayout({ children }: BaseProps) {
  return (
    <ReduxProvider>
      <Header />
      {children}
      <Footer />
    </ReduxProvider>
  );
}
