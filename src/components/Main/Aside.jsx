import '../../style/Aside.css'

const Aside = () => {
    return (
        <aside className='aside'>
            <div className='aside__div'>
                <a href="https://www.linkedin.com/in/oscar-wilfren-quintero-ramos-5a8323294/" target='_blank'>
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
                <a href="https://github.com/WilfrenDeveloper" target='_blank'>
                    <i className='bx bxl-github' ></i>
                </a>
                <a href="mailto:wilfrenmoney@gmail.com" target='_blank'>
                    <i className='bx bx-envelope' ></i>
                </a>
                <a href=" https://api.whatsapp.com/send/?phone=573212041857" target='_blank'>
                    <i className='bx bxl-whatsapp' ></i>
                </a>
            </div>
        </aside>
    )
}

export default Aside