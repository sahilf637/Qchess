import React from 'react'
import Header from '../components/Header/Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div className='container mx-auto'>{children}</div>
    </div>
  )
}

export default Layout