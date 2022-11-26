// import Contacto from './Contacto/Contacto'
import "./nosotros.css"
import imagen from '../img/img7.png'
export default function Nosotros() {
  return (
    <div>
      <h1 class='h'> Bienvenido a C&V Comidas Caseras</h1>
      <img
      src={imagen}
      className='img-fluid hover-shadow rounded-8'
      alt=''
    />
    </div>
  )
}