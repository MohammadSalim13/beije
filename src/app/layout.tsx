import type { Metadata } from 'next';

import '@/styles/globals.css';

import ReduxProvider from '@/components/layout/redux-provider';

export const metadata: Metadata = {
  title: 'Task for Beije',
  description: 'Developed by Salim',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
