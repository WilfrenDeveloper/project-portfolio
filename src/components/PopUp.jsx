import '../style/PopUp.css'

export const PopUp = () => {

    const popUP = setTimeout(() => {
        document.querySelector('.popup').classList.add('popup__div')
    }, 4000);

    const handleClick= () => {
        document.querySelector('.popup').classList.remove('popup__div')
        setTimeout(() => {
            document.querySelector('.popup').classList.add('popup__div')
        }, 30000);
    }

  return (
    <div className='popup'>
        <section className='popup__section'>
            <button className='popup__x' onClick={handleClick}>X</button>
            <h2 className='popup__h2'>Hola, se que tienes algo en mente, escribeme 😉</h2>
                <form className='popup__form' action="https://formsubmit.co/wilfrenmoney@gmail.com" method="POST" >
                    <label className='popup__label popup__name' htmlFor=""><span>Nombre</span>
                        <input className='popup__input input__name' type="name" name="name" placeholder='Ingresa tu nombre' />
                    </label>

                    <label className='popup__label popup__email' htmlFor="">
                        <span>Email</span>
                        <input className='popup__input input__email' type="email" name="email" placeholder='Ingresa tu correo' />
                    </label>

                    <label className='popup__label popup__message' htmlFor="">
                        <span>Mensaje</span>
                        <textarea className='popup__input input__message' name="message" id="message" cols="30" rows="3" placeholder='Escribe un mensaje'></textarea>
                    </label>

                    <div>
                        <button className='popup__button' formTarget=''>
                            <span className='popup__button--span'>Enviar </span>
                            <i className='bx bx-right-arrow-alt bx-flip-vertical bx-flashing' ></i>
                        </button>
                    </div>
            </form>
            </section>
    </div>
  )
}
