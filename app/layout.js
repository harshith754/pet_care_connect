import Footer from '@/components/Footer'
import '@/globals/styles.css'
import Provider from "@/components/Provider";
import { Toaster } from 'sonner';


export const metadata = {
  title: 'Pet Care Connect',
  description: 'Trademark Design by Harshith',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className='bg-aliceblue-200'  >
        <Provider>
        <Toaster richColors />
        {children}

        <Footer />
        </Provider> 
      </body>

    </html>
  )
}
