import'../../style/MyProyects.css'

const MyProyects = () => {
  return (
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
  )
}

export default MyProyects