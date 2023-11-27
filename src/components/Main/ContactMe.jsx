import '../../style/ContactMe.css'

const ContactMe = () => {
    return (
        <section className='contact__section' id="contact">
            <h2 className='contact__h2'>Contacta me...</h2>
            <form action="https://formsubmit.co/wilfrenmoney@gmail.com" method="POST">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="3" placeholder='Mensaje'></textarea>
                <button>
                    <span>Enviar </span>
                    <i class='bx bx-right-arrow-alt'></i>
                </button>
            </form>
        </section>
  )
}

export default ContactMe