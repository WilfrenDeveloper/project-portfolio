import '../../style/AboutMe.css'

const AboutMe = ({ darkMode }) => {
    return (
        <section className={`about__section ${darkMode ? 'about__section--darkmode' : ''}`} id="about">
            <h2 className='about__h2'>Acerca de mí</h2>
            <p className='about__p1'>Desarrollador Full Stack en formación con conocimientos en HTML, CSS, JavaScript. Soy una persona a la que le gusta investigar y aumentar su conocimiento y experiencia en la programación y así mismo conocer herramientas que me ayuden a mejorar mi desempeño como programador</p>

            <p className='about__p2'>Procuro siempre ayudar a mis semejantes a tiempo y fuera de tiempo. Una buena forma de aprender es enseñando eso me ha servido para mejorar mis habilidades laborales y blandas.</p>

            <p className='about__p3'>He encontrado una gran pasión por el desarrollo web y la implementacion de aplicaciones que busquen supplir necesidades sociales y resolver problemas.</p>
        </section>
    )
}

export default AboutMe
