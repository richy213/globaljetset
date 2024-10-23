import Clientes from '@/components/Clientes'
import Inicio from '../components/Inicio'
import Servicios from '../components/Servicios'
import Aeroart from '@/components/Aeroart'
export default function Home() {
  return (
    <>
      <Inicio></Inicio>
      <Servicios></Servicios>
      <Aeroart></Aeroart>
      <Clientes></Clientes>
    </>
  )
}
