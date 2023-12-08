import { useRef } from 'react'
import '../../style/ContactMe.css'
import Aside from './Aside'

const ContactMe = () => {

    let url = "https://wil-dev.vercel.app/#contact"
    const name = useRef()
    const mail = useRef()
    const message = useRef()

    const handleClick = () => {
        document.querySelector('#name').classList.remove('p__name')
        document.querySelector('#name').classList.remove('p__mail')
        document.querySelector('#name').classList.remove('p__message')
    }

    const condition = () => {
        if (name.current.value === "" && name.current.value.length < 5) {
            document.querySelector('#name').classList.add('p__name')
        } else {
            if (mail.current.value.length <30) {
                document.querySelector('#mail').classList.add('p__mail')
            } else {
                if (message.current.value.length <30) {
                    document.querySelector('#message').classList.add('p__message')
                } else {
                    url = "https://formsubmit.co/wilfrenmoney@gmail.com"
                }
            }
        }
    }
    return (
        <>
            <section className='contact__section' id="contact">
                <h2 className='contact__h2'>Contactame...</h2>
                <form className='contact__form' action={url} method="POST" >
                    <label className='contact__label contact__name' htmlFor=""><span>Nombre</span>
                        <input className='contact__input input__name' onClick={handleClick} ref={name} type="name" name="name" placeholder='Ingresa tu nombre' />
                        <p id='name'><span>Lo siento debes agregar un nombre de 5 caracteres mínimo</span></p>
                    </label>

                    <label className='contact__label contact__email' htmlFor="">
                        <span>Email</span>
                        <input className='contact__input input__email' onClick={handleClick} ref={mail} type="email" name="email" placeholder='Ingresa tu correo' />
                        <p id='mail'><span>Lo siento debes agregar un nombre</span></p>
                    </label>

                    <label className='contact__label contact__message' htmlFor="">
                        <span>Mensaje</span>
                        <textarea className='contact__input input__message' onClick={handleClick} ref={message} name="message" id="message" cols="30" rows="3" placeholder='Escribe un mensaje'></textarea>
                        <p id='message'><span>Lo siento debes agregar un nombre</span></p>
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