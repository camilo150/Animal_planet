import React from 'react'
import { Link } from 'react-router-dom'
import "./../styles/portada.css"
const Portada = () => {
  return (
    <div className='portada-body'>
        <main>
          <Link to={"/inicio"}>
          <section className='a'></section>
          </Link>
        </main>
    </div>
  )
}

export default Portada