import '../../style/AboutMe.css'

const AboutMe = ({ darkMode }) => {
    return (
        <section className={`about__section ${darkMode ? 'about__section--darkmode' : ''}`} id="about">
            <h2 className='about__h2'>Acerca de mí</h2>
            <p className='about__p1'>
                Desarrollador Fullstack con experiencia en varios proyectos FreeLancer. Adicionalmente, tengo un título en Análisis y Programación de sistemas donde gané un reconocimiento por mejor estudiante por rendimiento académico y por cooperación con mis compañeros.            </p>

            <p className='about__p2'>
                Puedo diseñar y desarrollar un sitios Web de manera eficiente y adaptable a cualquier pantalla, llamando la atención del usuario haciendo de la página un lugar atractivo y funcional.
            </p>

            <p className='about__p3'>
                Tengo la capacidad de encontrar problemas de código y arreglarlos de manera que sea un código eficiente y entendible para facilitar el trabajo en equipo. Me gusta ser diligente con mis trabajos. Suelo ser una persona amigable y proactiva a la que le gusta ayudar.
            </p>
        </section>
    )
}

export default AboutMe
