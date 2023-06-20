import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'
import NavBar from '@/Components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET : Become a Certified Financial Advisor and Earn Big'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className='max-h-full'>
        <NavBar></NavBar>

        <div className={inter.className}>{children}</div>

        <Footer></Footer> 
      </body>
    </html>
  )
}

export default RootLayout;
