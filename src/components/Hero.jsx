import React from "react";
import video from '../resources/img/video.png'


export default function Hero() {
  return <div className="hero">
        <div className="heroContainer">
            <div className="heroInfo">
                <h6>Producto DESTACADO del Mes</h6>
                <h2>Placa RPX ultraGame 69k</h2>
                <p>Desempeño mejorado para ICQ, mIRC y Arcanoid.</p>
                <button className="heroBtn" >COMPRAR</button>

                </div>
            <div className="heroImage">
                <img src={video} alt="video" />
                </div>
            </div>
      
      </div>;
}
