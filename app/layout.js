import Footer from '@/components/Footer'
import '@/globals/styles.css'
import Provider from "@/components/Provider";

export const metadata = {
  title: 'Pet Care Connect',
  description: 'Trademark Design by Harshith',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
        
        {children}

        <Footer />
        </Provider> 
      </body>

    </html>
  )
}
