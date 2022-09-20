import React from "react";
import "./About.css";

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
                <small>
                  JavaScript, React, Redux, NodeJS, Express, postgreSQL
                </small>
              </article>
            </div>
            <div className="about-bg-card">
              <article className="about-card">
                <i class="fa-solid fa-palette"></i>
                <h4>Maquetación & Diseño</h4>
                <small>
                  CSS, SASS, LESS, PostCSS, TailwindCSS, BootStrap, FIgma
                </small>
              </article>
            </div>
          </div>
          <div className="about-text">
            <p>
              ¡Hola!, Soy Desarrollador Fullstack con orientación a Frontend
              apasionado por el aprendizaje. Me eh formado mediante
              instituciones educativas y de manera constante como autodidacta.{" "}
              <br />
              <br />
              Mis tecnologías son HTML5, CSS, Boostrap, ChakraUI, MaterialUI,
              JavaScript, React, Redux, NodeJS, Express, Sequelize, MongoDB,
              PostgreSQL, MySQL y actualmente me encuentro aprendiendo
              Typescript, React Native y NextJS. <br /> <br />
              He trabajado en entornos profesionales con metodologías ágiles
              SCRUM utilizando Trello/Jira y GitFlow/GitLab. Soy muy
              comunicativo, me adapto rápidamente al cambio y me gusta mucho el
              trabajo en equipo en los que se promueva la excelencia y el
              mejoramiento continuo. <br /> <br />
              Quieres conocerme mejor? Te dejo mi contacto: <br /> Mail:
              📬pabloecarranza@gmail.com <br /> Github: 🐱
              https://github.com/pabloecarranza
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
