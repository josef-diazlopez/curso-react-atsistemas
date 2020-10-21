import React from "react"
import "./Card.css";

export const Card = () =>{
    return(
        <div className="card">
            <div className="float-btn">
                boton flotante
            </div>
            <div className="card-header">
                <h1>Jose</h1>
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