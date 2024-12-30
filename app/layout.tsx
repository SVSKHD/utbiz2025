import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProviderWrapper } from "@/components/providers/tooltip-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trading Dashboard',
  description: 'Multi-broker trading dashboard with portfolio tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProviderWrapper>
            {children}
          </TooltipProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}