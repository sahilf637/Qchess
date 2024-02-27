import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom"
import Layout from './Layout/Layout'

type Props = {}

function AppRoutes({}: Props) {
  return (
    <Routes>
        <Route path="/" element={<Layout></Layout>}/>
    </Routes>
  )
}

export default AppRoutes