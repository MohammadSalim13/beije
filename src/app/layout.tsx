import '@/styles/globals.css';

import DefaultLayout from '@/components/layout';
import { StoreProvider } from '@/components/layout/redux-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
