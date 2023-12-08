import { useRef } from 'react'
import '../../style/ContactMe.css'
import Aside from './Aside'

const ContactMe = () => {

    let url = "https://formsubmit.co/wilfrenmoney@gmail.com"
    const name = useRef()
    const mail = useRef()
    const message = useRef()

    const handleInput = () => {
        document.querySelector('.p__name').classList.remove('name')
        document.querySelector('.p__mail').classList.remove('mail')
        document.querySelector('.p__msn').classList.remove('msn')
        document.querySelector('.contact__form').removeAttribute('action')
        document.querySelector('.contact__form').removeAttribute('method')
    }

    const handleButton = (e) => {
        if (name.current.value.length < 5) {
            document.querySelector('.p__name').classList.add('name')
            e.preventDefault()
        } else {
            if (mail.current.value.includes('@') && mail.current.value.includes('.com')) {
                if (message.current.value.length < 30) {
                    document.querySelector('.p__msn').classList.add('msn')
                    e.preventDefault()
                } else {
                    document.querySelector('.contact__form').setAttribute('action', `${url}`)
                    document.querySelector('.contact__form').setAttribute('method', "POST")
                }
            } else {
                document.querySelector('.p__mail').classList.add('mail')
                e.preventDefault()
            }
        }
    }
    return (
        <>
            <section className='contact__section' id="contact">
                <h2 className='contact__h2'>Contactame...</h2>
                <form className='contact__form'>
                    <label className='contact__label contact__name' htmlFor=""><span>Nombre</span>
                        <input className='contact__input input__name' onClick={handleInput} ref={name} type="name" name="name" placeholder='Ingresa tu nombre' />
                        <p className='p__name'><span>Debes agregar un nombre de 5 caracteres mínimo</span></p>
                    </label>

                    <label className='contact__label contact__email' htmlFor="">
                        <span>Email</span>
                        <input className='contact__input input__email' onClick={handleInput} ref={mail} type="email" name="email" placeholder='Ingresa tu correo' />
                        <p className='p__mail'>
                            <span>Debes agregar un correo</span>
                            <br />
                            <span>ejemplo: nombre@email.com</span>
                        </p>
                    </label>

                    <label className='contact__label contact__message' htmlFor="">
                        <span>Mensaje</span>
                        <textarea className='contact__input input__message' onClick={handleInput} ref={message} name="message" id="message" cols="30" rows="3" placeholder='Escribe un mensaje'></textarea>
                        <p className='p__msn'><span>Debes agregar un mensaje mínimo 30 carateres</span></p>
                    </label>

                    <div>
                        <button className='contact__button' formTarget='' onClick={handleButton}>
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