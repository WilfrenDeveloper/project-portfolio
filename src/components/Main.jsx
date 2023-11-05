import "./Main.css"

const Main = () => {


    return (
        <main className='main'>
            <section className='about__section' id="about">
                <h2 className='about__h2'>Acerca de mí</h2>
                <p className='about__p1'>Desarrollador Full Stack en formación con conocimientos en HTML, CSS, JavaScript. Soy una persona a la que le gusta investigar y aumentar su conocimiento y experiencia en la programación y así mismo conocer herramientas que me ayuden a mejorar mi desempeño como programador</p>

                <p className='about__p2'>Procuro siempre ayudar a mis semejantes a tiempo y fuera de tiempo. Una buena forma de aprender es enseñando eso me ha servido para mejorar mis habilidades laborales y blandas.</p>

                <p className='about__p3'>He encontrado una gran pasión por el desarrollo web y la implementacion de aplicaciones que busquen supplir necesidades sociales y resolver problemas.</p>
            </section>

            <section className='skill__section' id="skill">
                <h2>Habilidades Técnicas</h2>
                <h3>Mis herramientas de trabajo han sido <span>:</span></h3>
                <div className="skill__icons">
                    <div className="div__icon">
                        <i class='bx bxl-react'></i>
                        <span className="span__icon">React</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-javascript'></i>
                        <span className="span__icon">JavaScript</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-css3' ></i>
                        <span className="span__icon">CSS</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-html5' ></i>
                        <span className="span__icon">HTML</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bx-devices'></i>
                        <span className="span__icon">Sitios Web Responsivos</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-visual-studio'></i>
                        <span className="span__icon">Visual Studio Code</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-github' ></i>
                        <span className="span__icon">Github</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-git' ></i>
                        <span className="span__icon">Git</span>
                    </div>
                    <div className="div__icon">
                        <i class='bx bxl-nodejs' ></i>
                        <span className="span__icon">node.js</span>
                    </div>
                </div>
                <p className="skill__p">
                    <span className="skill__p--span1">Actualmente trabajando en:</span>
                    <span className="skill__p--span2">Mejorando mis habilidades a través de node.js</span>
                </p>


            </section>

            <section className='proyects__section' id="proyects">
                <h2>Mis proyectos</h2>
            </section>

            <section className='contact__section' id="contact">
                <h2>Conversa conmigo</h2>
            </section>
        </main>
    )
}

export default Main