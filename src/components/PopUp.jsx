import { useRef } from 'react';
import '../style/PopUp.css'

export const PopUp = () => {

    const popUP = setTimeout(() => {
        document.querySelector('.popup').classList.add('popup__div')
    }, 4000);

    const handleClick= () => {
        document.querySelector('.popup').classList.remove('popup__div')
        setTimeout(() => {
            document.querySelector('.popup').classList.add('popup__div')
        }, 60000);
    }

    let url = "https://formsubmit.co/wilfrenmoney@gmail.com"
    const name = useRef()
    const mail = useRef()
    const msn = useRef()

    const handleInput = () => {
        document.querySelector('.popup__name').classList.remove('p--name')
        document.querySelector('.popup__mail').classList.remove('p--mail')
        document.querySelector('.popup__msn').classList.remove('p--msn')
        document.querySelector('.contact__form').removeAttribute('action')
        document.querySelector('.contact__form').removeAttribute('method')
    }

    const handleButton = (e) => {
        if (name.current.value.length < 5) {
            document.querySelector('.popup__name').classList.add('p--name')
            e.preventDefault()
        } else {
            if (mail.current.value.includes('@') && mail.current.value.includes('.com')) {
                if (msn.current.value.length < 30) {
                    document.querySelector('.popup__msn').classList.add('p--msn')
                    e.preventDefault()
                } else {
                    document.querySelector('.popup__form').setAttribute('action', `${url}`)
                    document.querySelector('.popup__form').setAttribute('method', "POST")
                }
            } else {
                document.querySelector('.popup__mail').classList.add('p--mail')
                e.preventDefault()
            }
        }
    }
    

  return (
    <div className='popup'>
        <section className='popup__section'>
            <button className='popup__x' onClick={handleClick}>X</button>
            <h2 className='popup__h2'>Hola, se que tienes algo en mente, escribeme 😉</h2>
                <form className='popup__form'>
                    <label className='popup__label popup__name--lbl' htmlFor=""><span>Nombre</span>
                        <input className='popup__input input__name' onClick={handleInput} ref={name} type="name" name="name" placeholder='Ingresa tu nombre' />
                        <p className='popup__name'><span>Debes agregar un nombre de 5 caracteres mínimo</span></p>
                    </label>

                    <label className='popup__label popup__email' htmlFor="">
                        <span>Email</span>
                        <input className='popup__input input__email' onClick={handleInput} ref={mail} type="email" name="email" placeholder='Ingresa tu correo' />
                        <p className='popup__mail'>
                            <span>Debes agregar un correo</span>
                            <br />
                            <span>ejemplo: nombre@email.com</span>
                        </p>
                    </label>

                    <label className='popup__label popup__message' htmlFor="">
                        <span>Mensaje</span>
                        <textarea className='popup__input input__message' onClick={handleInput} ref={msn} name="message" id="message" cols="30" rows="3" placeholder='Escribe un mensaje'></textarea>
                        <p className='popup__msn'><span>Debes agregar un mensaje mínimo 30 carateres</span></p>
                    </label>

                    <div>
                        <button className='popup__button' formTarget='' onClick={handleButton}>
                            <span className='popup__button--span'>Enviar </span>
                            <i className='bx bx-right-arrow-alt bx-flip-vertical bx-flashing' ></i>
                        </button>
                    </div>
            </form>
            </section>
    </div>
  )
}
