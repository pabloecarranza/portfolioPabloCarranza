import React from 'react';
import './ContactMe.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1r80ney', 'template_8uasqph', form.current, 'KfaXYZWGilXxF9yk7')

        e.target.reset()
      };

  return (
    <div id="contact">
        <h2>¡Contáctame!</h2>

        <div className="container contact-container">
            <div className="options-contact">
                <article className="option-contact">
                    <i class="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                    <h5>pabloecarranza@gmail.com</h5>
                    <a href="mailto:pabloecarranza@gmail.com" target='_blank' rel="noreferrer">Envíame un correo</a>
                </article>
                <article className="option-contact">
                    <i class="fa-brands fa-linkedin"></i>
                    <h4>LinkedIn</h4>
                    <h5>Pablo Carranza LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/pabloecarranza/" target='_blank' rel="noreferrer">Visita mi LinkedIn</a>
                </article>
                <article className="option-contact">
                    <i class="fa-brands fa-whatsapp"></i>
                    <h4>WhatsApp</h4>
                    <h5>+54 2664777870</h5>
                    <a href="https://api.whatsapp.com/send/?phone=542664777870&text=Hola+Pablo+vi+tu+portfolio+me+gustaria+hablar+contigo&app_absent=0" target='_blank' rel="noreferrer">Escríbeme</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Tu nombre" required />
                <input type="email" name="email" placeholder="Tu email" required />
                <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
                <button type="submit" className="button">Enviar mensaje</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe;