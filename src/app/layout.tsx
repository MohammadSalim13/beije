'use client';

import '@/styles/globals.css';

import DefaultLayout from '@/components/layout';
import ReduxProvider from '@/components/layout/redux-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReduxProvider>
        <body>
          <DefaultLayout>{children}</DefaultLayout>
        </body>
      </ReduxProvider>
    </html>
  );
}
