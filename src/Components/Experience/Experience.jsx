import React from 'react';
import './Experience.css';
import Javascript from '../../img/javascript.jpg'
import rreact from '../../img/react.jpg'
import reduxx from '../../img/redux.png'
import nodejs from '../../img/node.png'
import expressjs from '../../img/express.jpg'
import sequilize from '../../img/sequilize.png'
import postgresql from '../../img/postgresql.png'



const Experience = () => {
  return (
    <div id="experience">
        <div className="title">
        <h2>Mis Skills</h2>
        </div>
        <div>
        <ul className="skills">
            <li><img src={ Javascript } alt="" /></li>
            <li><img src={ rreact } alt="" /></li>
            <li><img src={ reduxx } alt="" /></li>
            <li><img src={ nodejs } alt="" /></li>
            <li><img src={ expressjs } alt="" /></li>
            <li><img src={ sequilize } alt="" /></li>
            <li><img src={ postgresql } alt="" /></li>
        </ul>
        </div>
    </div>
  )
}

export default Experience;