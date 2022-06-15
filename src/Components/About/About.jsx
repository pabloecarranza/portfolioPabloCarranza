import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about">
        <div className="title">
            <h2>Sobre Mi</h2>
        </div>

        <div className="container about-container">
            <div className="about-content">
                 <div className="about-cards">
                     <div className="about-bg-card">
                     <article className="about-card">
                        <i class="fa-solid fa-briefcase"></i>
                         <h4>Experiencia</h4>
                         <small>2 años</small>
                     </article>
                     </div>
                     <div className="about-bg-card">
                     <article className="about-card">
                        <i class="fa-solid fa-code"></i>
                         <h4>Conocimientos</h4>
                         <small>JavaScript, React, Redux, NodeJS, Express, postgreSQL</small>
                     </article>
                     </div>
                     <div className="about-bg-card">
                     <article className="about-card">
                        <i class="fa-solid fa-palette"></i>
                         <h4>Maquetación & Diseño</h4>
                         <small>CSS, SASS, LESS, PostCSS, TailwindCSS, BootStrap, FIgma</small>
                     </article>
                     </div>
                 </div>
                    <div className="about-text">
                 <p>Hola! soy Pablo Carranza soy Desarrollador FullStack. Inicie en el mundo de la programación hace dos años de manera autodidacta, nunca me imaginé la pasión que me iba a generar. Por este motivo hace un año decidí empezar a certificarme para demostrar mis conocimientos y capacidades mediante un Bootcamp y fue una experiencia unica de muchisimo aprendizaje.
                     Me considero una persona dinámica, responsable y un gran jugador en equipo, con muchas ganas de seguir aprendiendo nuevas tecnologías.</p>
                     </div>
            </div>
        </div>
    </div>
  )
}

export default About;