import './globals.css'

export const metadata = {
  title: '𝐟𝐨𝐮𝐝',
  description: 'Inspiration and art in food-form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
