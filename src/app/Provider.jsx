"use client"
import React, { useContext, useState } from 'react'
import { NavbarResponsive } from '../components/NavBar'
import Footer from '../components/Footer'
import GlobalState from './context/GlobalState'
import Cotizar from '@/components/Cotizar'

const Provider = ({ children }) => {
  return (
    <GlobalState>
      <NavbarResponsive></NavbarResponsive>
      {children}
      <Cotizar></Cotizar>
      <Footer></Footer>
    </GlobalState>

  )
}

export default Provider
