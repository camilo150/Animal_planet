import React from 'react'
import Header from '../interfaz/Header'
import biodiversidad from '../../database/database'

const Arkea = () => {
    const dominioArkea = biodiversidad.find(d =>d.dominio === 'Arkea')
  return (
    <div>
        hola

    </div>
  )
}

export default Arkea