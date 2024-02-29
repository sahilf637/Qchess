import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom"
import Layout from './Layout/Layout'
import Home from "./Pages/Home"
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'

type Props = {}

function AppRoutes({}: Props) {
  return (
    <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<SignIn/>}/>
    </Routes>
  )
}

export default AppRoutes