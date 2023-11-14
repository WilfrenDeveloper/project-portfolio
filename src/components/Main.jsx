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
                <h2 className='skill__h2'>Habilidades Técnicas</h2>
                <h3 className='skill__h3'>He logrado terminar mis proyectos gracias a los conocimientos en<span className="skill__h3--span">:</span></h3>
                <div className="skill__icons">
                    <div className="div__icon">
                        <i className='bx bxl-react'></i>
                        <span className="span__icon">React</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-javascript'></i>
                        <span className="span__icon">JavaScript</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-css3' ></i>
                        <span className="span__icon">CSS</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-html5' ></i>
                        <span className="span__icon">HTML</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bx-devices'></i>
                        <span className="span__icon">Sitios Web Responsivos</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-visual-studio'></i>
                        <span className="span__icon">Visual Studio Code</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-github' ></i>
                        <span className="span__icon">Github</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-git' ></i>
                        <span className="span__icon">Git</span>
                    </div>
                    <div className="div__icon">
                        <i className='bx bxl-nodejs' ></i>
                        <span className="span__icon">node.js</span>
                    </div>
                </div>
                <p className="skill__p">
                    <span className="skill__p--span1">Actualmente trabajando en:</span>
                    <span className="skill__p--span2">Mejorar mis habilidades a través de node.js</span>
                </p>
            </section>

            <section className='proyects__section' id="proyects">
                <h2 className="proyects__h2">Mis proyectos</h2>
                <h3 className="proyects__h3">Esta es un lista que cosas que he hecho</h3>
                <ul className="proyects__ul">
                    <li className="proyects__li1">
                        <div className="proyects__container">
                            <h4 className="proyects__h4">ecommerce</h4>
                            <p className="proyects__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam voluptatibus at cumque itaque ad voluptas facilis maiores commodi dicta.</p>
                            <div className="proyects__icons">
                                <i className='bx bxl-javascript p-icon'></i>
                                <i className='bx bxl-css3 p-icon' ></i>
                                <i className='bx bxl-html5 p-icon' ></i>
                            </div>
                        </div>
                        <a className="proyects__a" href="https://ecommerce-grupo-patitos-team.vercel.app/" target="_blank">
                            <img className="proyects__page" src="/ecommerce.JPG" alt="" />
                            <img className="proyects__page2" src="/ecommerce-phone.png" alt="" />
                            <img className="proyects__phone" src="/phone.png" alt="" />
                            <img className="proyects__mac" src="/mac.png" alt="" />
                        </a>
                    </li>
                    <li className="proyects__li2">
                        <div className="proyects__container">
                            <h4 className="proyects__h4">Galleta de la Fortuna</h4>
                            <p className="proyects__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam voluptatibus at cumque itaque ad voluptas facilis maiores commodi dicta.</p>
                            <div className="proyects__icons">
                                <i className='bx bxl-javascript p-icon'></i>
                                <i className='bx bxl-css3 p-icon' ></i>
                                <i className='bx bxl-html5 p-icon' ></i>
                                <i className='bx bxl-react p-icon' ></i>
                            </div>
                        </div>
                        <a className="proyects__a" href="https://galleta-de-la-fortuna-seven.vercel.app/" target="_blank">
                            <img className="proyects__page" src="/galleta.JPG" alt="" />
                            <img className="proyects__page2" src="/galleta-phone.png" alt="" />
                            <img className="proyects__phone" src="/phone.png" alt="" />
                            <img className="proyects__mac" src="/mac.png" alt="" />
                        </a>
                    </li>
                    <li className="proyects__li1">
                        <div className="proyects__container">
                            <h4 className="proyects__h4">Wather App</h4>
                            <p className="proyects__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam voluptatibus at cumque itaque ad voluptas facilis maiores commodi dicta.</p>
                            <div className="proyects__icons">
                                <i className='bx bxl-javascript p-icon'></i>
                                <i className='bx bxl-css3 p-icon' ></i>
                                <i className='bx bxl-html5 p-icon' ></i>
                                <i className='bx bxl-react p-icon' ></i>
                            </div>
                        </div>
                        <a className="proyects__a" href="https://weather-app-five-tan.vercel.app/" target="_blank">
                            <img className="proyects__page" src="/weatherApp.JPG" alt="" />
                            <img className="proyects__page2" src="/weatherApp-phone.png" alt="" />
                            <img className="proyects__phone" src="/phone.png" alt="" />
                            <img className="proyects__mac" src="/mac.png" alt="" />
                        </a>
                    </li>
                    <li className="proyects__li2">
                        <div className="proyects__container">
                            <h4 className="proyects__h4">Rick and Morty</h4>
                            <p className="proyects__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam voluptatibus at cumque itaque ad voluptas facilis maiores commodi dicta.</p>
                            <div className="proyects__icons">
                                <i className='bx bxl-javascript p-icon'></i>
                                <i className='bx bxl-css3 p-icon' ></i>
                                <i className='bx bxl-html5 p-icon' ></i>
                                <i className='bx bxl-react p-icon' ></i>
                            </div>
                        </div>
                        <a className="proyects__a" href="https://rick-and-morty-app-xi-ten.vercel.app/" target="_blank">
                            <img className="proyects__page" src="/Rick-and-Morty.JPG" alt="" />
                            <img className="proyects__page2" src="/Rick-and-Morty-phone.png" alt="" />
                            <img className="proyects__phone" src="/phone.png" alt="" />
                            <img className="proyects__mac" src="/mac.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>

            <section className='contact__section' id="contact">
                <h2>Conversa conmigo</h2>
            </section>
        </main>
    )
}

export default Main