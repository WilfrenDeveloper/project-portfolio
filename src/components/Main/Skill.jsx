import '../../style/Skill.css'

const Skill = () => {
    return (
        <section className='skill__section' id="skill">
            <h2 className='skill__h2'>Habilidades Técnicas</h2>
            <h3 className='skill__h3'>Tengo experiencia con las siguientes tecnologías<span className="skill__h3--span">:</span></h3>
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
    )
}

export default Skill