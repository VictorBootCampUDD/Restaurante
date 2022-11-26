import { addDoc, collection } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../../../../config/firestore';
import './formulario-contacto.css'
export default function FormularioContactoNormal() {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    start: "",
    tentacles: "",
    contactReason: ""
    
  })

  async function handleSubmit(event) {
    alert('Tu reserva fue realizada con exito ');
    event.preventDefault()
    console.log(formValues)
    try {
      const docRef = await addDoc(collection(db, "Reserva"), formValues);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function handleFormChange(event) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [name]: value }
    setFormValues(newValues)
  

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={formValues.name} onChange={handleFormChange}></input>

      <label htmlFor='surname'>Apellido</label>
      <input id='surname' name='surname' type="text" value={formValues.surname} onChange={handleFormChange}></input>

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={formValues.email} onChange={handleFormChange}></input>

      <label htmlFor="start">Fecha</label>
      <input type="datetime-local" id="start" name="start"
        min="2018-01-01" max="2030-12-31" value={formValues.start} onChange={handleFormChange}></input>

      <label htmlFor="tentacles">Personas</label>
      <input type="number" id="tentacles" name="tentacles"
         min="1" max="100" value={formValues.tentacles} onChange={handleFormChange}></input>
<br></br>
      <label htmlFor='contactReason'>Comentario</label>
      <textarea id='contactReason' name='contactReason' value={formValues.contactReason} onChange={handleFormChange}></textarea>

       <button  type='submit' >Reservar</button> 
       
    </form>
  )
}