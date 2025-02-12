import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/header';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { auth } from '@/lib/auth';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Home | C4G Template',
  description:
    'A starter template for the computing 4 good projects leveraging Next.js and Prisma.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <SessionProvider session={session}>
            <Header />
            <div className='mt-16 min-h-[calc(100dvh-8.4rem)]'>{children}</div>
            <Footer />
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
