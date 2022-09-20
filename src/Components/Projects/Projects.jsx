import React from "react";
import "./Projects.css";
import Pelicano from "../../img/Pelicano.jpg";
import Taskeep from "../../img/TASKEEP.jpg";
import OpenWeatherApp from "../../img/OpenWeatherApp-.jpg";

import Podedex from "../../img/Pokedex.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="title">
        <h3>Proyectos</h3>
      </div>

      <div className="cards">
        <div className="card">
          <div className="img-card">
            <img src={Pelicano} alt="Pelicano" />
          </div>
          <div className="content-card">
            <div className="details">
              <h2>Pelicano PetStore</h2>
              <h3>Aplicación Web</h3>
              <br />
              <div className="data">
                <p>
                  Pagina Web responsiva para para emprendimiento de articulos
                  para mascostas
                </p>
              </div>
              <div className="btn-action">
                <a
                  href="https://github.com/pabloecarranza/pelicano_petstore"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://pabloecarranza.github.io/pelicano_petstore/pages/home.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-card">
            <img src={OpenWeatherApp} alt="Open Weather App" />
          </div>
          <div className="content-card">
            <div className="details">
              <h2>Open Weather App</h2>
              <h3>Aplicación de Clima</h3>
              <div className="data">
                <p>
                  Aplicación Web para consultar el clima mediante buscador y con
                  geolocalizacion con 5 ciudades preseteadas.
                </p>
              </div>
              <div className="btn-action">
                <a
                  href="https://github.com/pabloecarranza/FrontEnd-React---Flow"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://front-end-react-flow-j0kxhkkfw-pabloecarranza.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-card">
            <img src={Taskeep} alt="Pokedex" />
          </div>
          <div className="content-card">
            <div className="details">
              <h2>TASKEEP</h2>
              <h3>Aplicación de Tareas</h3>
              <br />
              <br />
              <br />
              <div className="data">
                <p>Proyecto FullStack PERN</p>
              </div>
              <div className="btn-action">
                <a
                  href="https://github.com/pabloecarranza/NewPokedex"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://github.com/pabloecarranza/taskeep"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-card">
            <img src={Podedex} alt="Pokedex" />
          </div>
          <div className="content-card">
            <div className="details">
              <h2>Pokedex</h2>
              <h3>Aplicación Pokemon API</h3>
              <br />
              <br />
              <div className="data">
                <p>Aplicacion de consumo de API de Pokemon</p>
              </div>
              <div className="btn-action">
                <a
                  href="https://github.com/pabloecarranza/NewPokedex"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://new-pokedex.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
