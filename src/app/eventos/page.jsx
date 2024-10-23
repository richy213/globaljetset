import React from 'react'
import EventUs from '@/components/EventUs'

export const metadata = {
  title: "Eventos",
  description: `No solo somos una empresa, somos un estilo de vida, participamos en eventos exclusivos.`,
}
const Eventos = () => {
  return (
    <div className={"w-full overflow-hidden"}>
      <EventUs></EventUs>
    </div>
  )
}

export default Eventos
