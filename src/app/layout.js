import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeta',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <nav>
        <a href="/">Home</a>
      </nav>
      <body className={inter.className}>{children}</body>
      <footer className=' min-h-[530px] bg-contain '>
        <div className='py-2 px-48'>
          <div className='flex py-5'>
            <Image
              alt=''
              width={100}
              height={100}
              src={"https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"}>

            </Image>
          </div>
          <hr />
          <div className='flex mt-[3vw] justify-between'>
            <div className='flex flex-col'>
              <h3>Company</h3>
              <a href="/about">About us</a>
              <a href="/">Partner with us</a>
              <a href="/  ">Blog</a>
            </div>

            <div className='flex flex-col'>
              <h3>Legal</h3>
              <a href="/about">About us</a>
              <a href="/">Partner with us</a>
              <a href="/  ">Blog</a>
            </div>

            <div className='flex flex-col'>
              <h3>Contact</h3>
              <a href="/about">About us</a>
              <a href="/">Partner with us</a>
              <a href="/  ">Blog</a>
            </div>

            <div className='flex flex-col'>
              <h3>Social</h3>
              <a href="/about">About us</a>
              <a href="/">Partner with us</a>
              <a href="/  ">Blog</a>
            </div>

          </div>
        </div>

      </footer>
    </html>
  )
}

export default RootLayout;
