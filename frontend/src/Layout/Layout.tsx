import React from 'react'
import Header from '../components/Header/Header'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div className='container mx-auto'></div>
    </div>
  )
}

export default Layout