import React from "react"
import "./Card.css";
import PropTypes from 'prop-types'

export const Card = ({name}) =>{
    return(
        <div className="card">
            <div className="float-btn">
                boton flotante
            </div>
            <div className="card-header">
                <h1>{name}</h1>
            </div>
            <div className="card-body">
                <p>Cuerpo</p>
            </div>
            <div className="card-footer">
                <p>redes sociales</p>
            </div>
        </div>
    )
}

Card.propTypes = {
name: PropTypes.string.isRequired
}