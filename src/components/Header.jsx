import React from 'react'
import "./Header.css"

const Header = () => {

    
    return (
        <header className='header'>
            <div className='header__div'>
                <h1 className='header__h1'>
                    <span className='span__hola'>Hola, soy</span>
                    <img className='header__h1--img' src="/logo-w.svg" alt="" />
                    <span className='span__wilfren'>ilfren</span>
                </h1>
                <h2 className='header__h2'>
                    <span className='spam__Des'>Desarrollador</span>
                    <span className='spam__Full'>FullStack<span className='span__.'>.</span>
                    </span>

                </h2>
                <h3 className='header__h3'>
                    <span className='header__h3--span'>Me apasiona crear productos Frontend donde el usuario tenga una experiencia cautivadora y llamativa.</span>
                    <span className='header__h3--span'>Me gusta afrontar retos nuevos donde pueda aprender y ser mejor como persona y como profesional.</span>
                </h3>
                <p className='header__p'>
                    <span className='header__p--text'>El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos.</span>
                    <span className='header__p--autor'>Michael Jordan.</span>
                </p>
            </div>
            <figure className='header__figure'>
                <img src="imagen" alt="" />
            </figure>

        </header>
    )
}

export default Header