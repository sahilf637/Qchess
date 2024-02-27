import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from './../../assets/Designer.png'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='container flex justify-between mx-auto p-4 px-10 text-blue-200'>
        <Link to={"/"} className='w-16 flex flex-col text-center font-bold'>
        <img src={logoImg} className="rounded-md" />
        <p>QChess</p>
        </Link>
        <div className='hidden md:block'>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header