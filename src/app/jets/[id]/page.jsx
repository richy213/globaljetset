"use client";
import React, { useState, useEffect } from 'react'
import Aviones from '../../../components/Flota';
import { aviones_renta, aviones_venta } from '@/app/data';

const Jets = (id) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open)
  const [aviones, setAviones] = useState(null)
  const categorie = id.params.id;


  useEffect(() => {
    if (id.params.id == "venta") {
      setAviones(aviones_venta)
    }
    if (id.params.id == "renta") {
      setAviones(aviones_renta)
    }
  }, [])
  return (

    <div className={`${open == true ? "blur-xl" : ""}`}>
      {
        aviones ? <Aviones handleOpen={handleOpen} open={open} valor={categorie} aviones={aviones}></Aviones> : null
      }
    </div>
  )
}

export default Jets