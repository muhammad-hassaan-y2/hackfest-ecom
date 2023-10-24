import './globals.css'
import Header from '@/Components/views/Header'
import Footer from '@/Components/views/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        
       <main className=''>
       <Header />
     {    /*<Mobile />*/}
        {children}
        <Footer />
       </main>
         
      {/*Homepage*/}
     
      
</body>

    </html>
  )
}