import type { Metadata } from 'next';

import '@/styles/globals.css';

import DefaultLayout from '@/components/layout';

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
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
