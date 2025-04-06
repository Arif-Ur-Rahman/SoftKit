// app/layout.js
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-4 p-4">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}