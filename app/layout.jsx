import './globals.css'

export const metadata = {
  title: 'Tic Tac Toe',
  description: 'A simple Tic Tac Toe game built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}