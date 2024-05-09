import React from 'react'
import PublicNavbar from '../components/navigations/PublicNavbar'
import { Toaster } from 'sonner'
interface Props {
    children: React.ReactNode
}
export default function PublicLayout({children}:Props) {
  return (
    <div className="h-svh dark:text-white overflow-y-auto">
      <PublicNavbar/>
      <Toaster richColors />
      {children}
    </div>
  )
}
