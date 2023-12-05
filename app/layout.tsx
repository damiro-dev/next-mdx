import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50'
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4 prose-quoteless'>
            <header>
              <div className='flex items-center justify-between'>
                <ThemeToggle />
                <nav className='ml-auto text-sm font-medium space-x-6'>
                  <Link href='/'>Home</Link>
                  <Link href='/about'>About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
