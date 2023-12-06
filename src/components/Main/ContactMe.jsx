import '../../style/ContactMe.css'
import Aside from './Aside'

const ContactMe = () => {
    return (
        <>
            <section className='contact__section' id="contact">
                <h2 className='contact__h2'>Contacta me...</h2>
                <form className='contact__form' action="https://formsubmit.co/wilfrenmoney@gmail.com" method="POST" >
                    <label className='contact__label contact__name' htmlFor=""><span>Nombre</span>
                        <input className='contact__input input__name' type="name" name="name" placeholder='Ingresa tu nombre' />
                    </label>

                    <label className='contact__label contact__email' htmlFor="">
                        <span>Email</span>
                        <input className='contact__input input__email' type="email" name="email" placeholder='Ingresa tu correo' />
                    </label>

                    <label className='contact__label contact__message' htmlFor="">
                        <span>Mensaje</span>
                        <textarea className='contact__input input__message' name="message" id="message" cols="30" rows="3" placeholder='Escribe un mensaje'></textarea>
                    </label>

                    <div>
                        <button className='contact__button' formTarget=''>
                            <span className='contact__button--span'>Enviar </span>
                            <i className='bx bx-right-arrow-alt bx-flip-vertical bx-flashing' ></i>
                        </button>
                    </div>
                </form>
                <Aside />
            </section>
        </>
    )
}

export default ContactMe