import '../app/global.css';

export const metadata = {
  title: 'DeskThing',
  description: 'Take back your CarThing.',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-neutral-950 text-neutral-50">{children}</body>
      </html>
    )
  }