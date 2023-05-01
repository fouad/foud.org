import { Playfair_Display } from 'next/font/google'

const inter = Playfair_Display({ subsets: ['latin'] })

export function Logo() {
  return (
    <span className={inter.className}>
      <span className="font-light text-8xl">fou&lsquo;d</span>
    </span>
  )
}
