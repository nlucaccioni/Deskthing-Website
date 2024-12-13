import '../app/global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { ReactNode } from 'react';

export const metadata: { title: string; description: string } = {
  title: 'DeskThing',
  description: 'Take back your CarThing.',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
      <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
        <link rel="icon" href="imgs/AppIcon.png" />
        <body className="bg-neutral-950 text-neutral-50">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    )
}