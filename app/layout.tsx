import './globals.css'
import  SideMenu  from "@/components/side-menu"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <SideMenu/>
          {children}
          
          </body>
    </html>
  )
}
