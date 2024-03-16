/* React */
import { ReactNode } from 'react';

/* META */
import type { Metadata } from 'next';

/* UI */
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';

/* Styles */
import { createAppLayoutsStyles } from './styles';

/* Fonts */
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

/* App meta */
export const metadata: Metadata = {
  title: 'web dev demo',
  description: 'demo site',
};

/* Layout */
import AppLayouts from './layouts/AppLayouts';

/* App layout root */
export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  /* Props */
  const { children } = props;

  /* Styles */
  const appLayoutsStyles = createAppLayoutsStyles();

  /* Layouts */
  return (
    <html lang="en" suppressHydrationWarning>
      <body {...appLayoutsStyles.base}>
        <ChakraProvider>
          <AppLayouts>{children}</AppLayouts>
        </ChakraProvider>
      </body>
    </html>
  );
}
