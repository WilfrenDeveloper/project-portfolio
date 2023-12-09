import'../../style/MyProyects.css'

const MyProyects = ({ darkMode }) => {
  return (
    <section className={`proyects__section ${darkMode ? 'proyects__section--darkmode' : ''}`} id="proyects">
                <h2 className="proyects__h2">Mis proyectos</h2>
                <h3 className="proyects__h3">Esta es un lista que cosas que he hecho</h3>
                <ul className="proyects__ul">
                    <li className="proyects__li1">
                        <div className="proyects__container">
                            <h4 className="proyects__h4">Ecommerce</h4>
                            <p className="proyects__p">Es una tienda online donde puedes encontrar diferentes tipos de camisetas. Puedes añadir camisetas al carrito de compras y ver el costo total de los productos que escojas.</p>
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
                            <p className="proyects__p">Abre una galleta de la fortuna y descubre lo que el mensaje que el universo tiene para ti, puedes encontrar mensajes motivadores o concejos muy positivos.</p>
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
                            <h4 className="proyects__h4">Weather App</h4>
                            <p className="proyects__p">¿Quieres saber el estado actual de clima?
                            <br />
                            Con esta app puedes conocer el estado del clima de cualquier ciudad el mundo, en tiempo real.</p>
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
                            <p className="proyects__p">Sé que te gusta ver Rick and Morty, aquí encontrarás todos los personajes de la serie.
                            Tambien puedes buscar los personajes que están en cada universo paralelo de la serie.
                            </p>
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
  )
}

export default MyProyects