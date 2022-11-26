import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import  '../Footer/footer.css'



export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'class='foot'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Síguenos en nuestras redes sociales:</span>
        </div>

        <div>
          <a  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                C&V Comidas Caseras
              </h6>
              <p>
              Nuestro restaurante se encuentra en la Costanera de Villarica, rodeado de naturaleza y alejado del ruido de la ciudad, donde usted podrá apreciar los fantásticos atardeceres y puestas de sol, mientras saborea la extensa variedad de platos preparados con recetas originales, pensados para satisfacer a todos los gustos...
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Reservación</h6>
              <p>
                <a href='./reservations' className='text-reset'>
                  Reservación ó Contacto
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Costanera 125, Villarica.
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@c&v.cl
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 56 912345678
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https:www.google.cl'>
         Cristian & Victor
        </a>
      </div>
    </MDBFooter>
  );
}