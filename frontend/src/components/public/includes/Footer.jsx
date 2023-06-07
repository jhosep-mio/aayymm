import {React} from 'react';

import design from '../../../assets/public/img/logo/logos-peru.svg';
import logowhite from '../../../assets/public/img/logo/logo-bl.png';

import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <>
        <footer className="fta-bg1">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <h4 className="fta-tifot1">Acerca de nosotros</h4>
                      <div className="clearfix"></div>
                      <div className="fta-txtfot1">
                          <p>
                              Hola, Bienvenido a <b>AA&MM</b> Nuestra empresa se funda un 12 de enero del 2019; como consultor, ejecutor de obras y de bienes y servicios. 
                          </p>
                          <p>
                              Con el tiempo se sensibilizó la idea de brindar calidad y servicio profesional a todos los peruanos de a pie que deseen hacer sus sueños realidad; a través de la venta de materiales que cumplan los estándares de calidad y con la garantía nuestra empresa
                          </p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <h4 className="fta-tifot1">Contáctanos</h4>
                      <div className="clearfix"></div>
                      <ul className="fta-ullifot1">
                          <li>Calle Santa Rosa #1517, Sector Aurich, Ferreñafe.</li>
                          <li>Whatsapp: <Link to="https://api.whatsapp.com/send?phone=920 398 331">(+51) 920 398 331</Link></li>
                          <li>E-mail: <Link to="ventas@elosodelaconstruccion.com">ventas@elosodelaconstruccion.com</Link></li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <h4 className="fta-tifot1">Enlaces</h4>
                      <div className="clearfix"></div>
                      <ul className="fta-ullifot2">
                          <li><Link to="./../../productos"><i className="fa fa-users"></i> Productos</Link></li>
                          <li><Link to="./../../campanas"><i className="fa fa-shopping-cart"></i> Servicios</Link></li>
                          <li><Link to="./../../nosotros"><i className="fa fa-industry"></i> Nosotros</Link></li>
                          <li><Link to="./../../contacto"><i className="fa fa-envelope-open-o"></i> Contacto</Link></li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <h4 className="fta-tifot1">Redes Sociales</h4>
                      <div className="clearfix"></div>
                      <ul className="fta-ullifot2">
                          <li><Link to="https://api.whatsapp.com/send/?phone=%2B5151920398331&text&type=phone_number&app_absent=0" target='_blank'><i className="fa fa-whatsapp"></i> WhatsApp</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="fta-logocle1">
                          <Link to="./../../home">
                              <img src={logowhite} />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </footer>


      <footer className="foot-copybg1d">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h4 className="foot-coptxt"><b>AA&MM</b> © 2023. Todos los derechos Reservados</h4>
                  </div>
                  <div className="col-md-12">
                      <p className="foot-design"> 
                          <b>Design by 
                              
                              <Link className="https://logosperu.com/" to="https://www.logosperu.com/" target="_blank" style={{color: "#fff"}}>
                                  <img src={design} style={{width: "23px"}} />
                              </Link>
                          </b>
                      </p>
                  </div>
              </div>
          </div>
      </footer>

    </>
  )
}
