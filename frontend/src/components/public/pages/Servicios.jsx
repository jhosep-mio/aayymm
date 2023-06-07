import React from 'react'

import servicios from '../../../assets/public/img/servicios/alquile.jpg';

import { Link } from 'react-router-dom';

export const Servicios = () => {
  return (
    
    <section className="sect_servicio_descripcion">
        <div className="container">
            <div className="row">
            
                    <div className="col-lg-6">
                        <div className="title_servicio">
                            <h1>Alquiler de trompo mezclador</h1>
                        </div>
                        <p>Si necesitas una mezcladora de cemento para tus proyectos de construcción, ¡tenemos justo lo que necesitas!. Te ofrecemos equipos de alta calidad y fácil de usar que te ayudarán a mezclar cemento y otros materiales con rapidez y eficiencia.</p>
                        <p>Ofrecemos precios competitivos y un servicio amable y profesional para asegurarnos de que tengas la mejor experiencia posible.</p>
                        <p>¡No pierdas tiempo mezclando cemento a mano! Contáctanos hoy mismo para alquilar una mezcladora de cemento y hacer tus proyectos de construcción más eficientes y efectivos.</p>
                    
                        <Link className="btn_ctcserv" to="/contacto">Contactar
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <img src={servicios} style={{width: "100%"}} className="img_serv" />
                    </div>
                    


            </div>
        </div>
    </section>
  )
}
