import { useCallback } from 'react'
import '../style/Nav.css'
import { useState } from 'react'

const Nav = () => {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  console.log(menu)

  return (
    <nav className='nav'>
      <button onClick={handleClick} className='nav__button'>
        <i className={`bx bx-minus ${(menu === true)?"bx-10":"bx-1"}`}></i>
        <i className={`bx bx-minus ${(menu === true)?"bx-20":"bx-2"}`}></i>
        <i className={`bx bx-minus ${(menu === true)?"bx-30":"bx-3"}`}></i>
      </button>
      <div className={`nav__container ${(menu === true)?"nav__div":""}`}>
        <a href="#root">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#skill">Habilidades técnicas</a>
        <a href="#proyects">Mis proyectos</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  )
}

export default Nav