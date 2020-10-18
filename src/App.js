import React from 'react'
import Formulario from './components/formulario'
import { useFirebaseApp } from 'reactfire'

function App() {
  const firebase = useFirebaseApp()
  console.log({ firebase })

  return (
    <div className="container mt-5">
      <Formulario />
    </div>
  )
}

export default App
