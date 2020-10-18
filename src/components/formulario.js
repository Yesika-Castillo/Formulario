import React, { Fragment, useState } from 'react'
import { useFirestore } from 'reactfire'

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
  })
  const firestore = useFirestore()

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }
  const enviarDatos = (event) => {
    event.preventDefault()
    console.log({ datos })
    enviarAFirebase()
  }

  const enviarAFirebase = () => {
    firestore()
      .collection('lista-clientes')
      .add({ ...datos })
      .then((quantityAfter) => {
        console.log('the amount was saved successfully', quantityAfter)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
          ></input>
        </div>
        <input
          type="date"
          id="start"
          name="fecha"
          min="1900-1-1"
          max="2020-12-31"
          onChange={handleInputChange}
        ></input>
        <div className="col-md-3"></div>

        <h3>
          {datos.nombre} - {datos.apellido}
        </h3>
        <div>
          <h6>Estado civil</h6>
          <select name="estadoCivil" onChange={handleInputChange}>
            <option value="casado">Casado</option>
            <option value="casado">Soltero</option>
            <option value="casado">Disponible</option>
            <option value="casado">Complicado</option>
          </select>
          <h6>Fecha de nacimiento</h6>
        </div>
        <div className="col-md-3">
          <h6>Ingrese Correo</h6>
          <input
            placeholder="Alguien@.com"
            className="form-control"
            type="text"
            name="correo"
            onChange={handleInputChange}
          ></input>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default Formulario
