import '../app/global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata = {
  title: 'DeskThing',
  description: 'Take back your CarThing.',
}

export default function RootLayout({ children }) {
    return (
      <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
        <body className="bg-neutral-950 text-neutral-50">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    )
  }