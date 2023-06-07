import React, { useState } from 'react'

import { Link } from 'react-router-dom';


import logo from '../../../assets/public/img/logo/logo.png';
import logo_bl from '../../../assets/public/img/logo/icono_bol.png';


export const Header = () => {

    const [show, setShow] = useState(false);

  return (
    <>
    	<header>
        <section className="header-top111">
    		<div className="container">
    			<div className="row row_desk">
    				<div className="col-xs-6 col-sm-6 col-md-6">
    					<p className="datoshead-1"><Link to="tel:51920398331"><i className="material-icons">phone</i> (+51) 920 398 331</Link></p>
    				</div>
    				<div className="col-xs-6 col-sm-6 col-md-6">
    					<p className="datoshead-2"><Link to="mailto:ventas@elosodelaconstruccion.com"><i className="material-icons">mail</i> ventas@elosodelaconstruccion.com</Link></p>
    				</div>
    			</div>

                <div className="row row_mobile">
                    <div className="col-lg-12">
                       <marquee direction="left" width="100%" height="23" behavior="alternate" scrollamount="3">
                            <span><Link to="tel:51920398331"><i className="material-icons">phone</i> (+51) 920 398 331</Link></span>
                            <span><Link to="mailto:ventas@elosodelaconstruccion.com"><i className="material-icons">mail</i> ventas@elosodelaconstruccion.com</Link></span>
                        </marquee>
                    </div>
                </div>

    		</div>
    	</section>
    	<section className="mheader1-bga1">
    		<div className="container">
    			<div className="row flexbox-container">
    				<div className="col-md-3">
    					<figure className="loghead-1">
    						<Link to="">
    							<img src={logo} alt="" />
    						</Link>
    					</figure>
    				</div>
    				<div className="col-md-4">
    					<h4 className="horariotile-1"><i className="material-icons">access_alarms</i> Horario de Atención</h4>
    					<p className="horatimeclock1"><b>Lun - Vie:</b> 8:00 am - 6:30pm</p>
    					<p className="horatimeclock1"><b>Sábado:</b> 8:00 am - 6:30pm</p>
    				</div>
    				<div className="col-md-5">
    					<ul className="ac1-menuredtop1">
							{/* <!--
								<li>
									<Link to="#" target="_blank" className="ag-fb1">
										<i className="fa fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link to="#" target="_blank" className="ag-tw1">
										<i className="fa fa-twitter"></i>
									</Link>
								</li>
							--> */}
								<li>
									<Link to="https://api.whatsapp.com/send/?phone=%2B5151920398331&text&type=phone_number&app_absent=0" target="_blank" className="ag-yt1">
										<i className="fa fa-whatsapp"></i>
									</Link>
								</li>
								
							
                        </ul>
    				</div>
    			</div>
    		</div>
    	</section>
        <div className="navigation-allgs">
            <section className="eonav-cntfluid">
            	<nav className="navbar navbar-default bootsnav ac1-navbarbgal1">
        		    <div className="container cnter-menu">      
    
        		        <div className="navbar-header">
        		            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={()=>{setShow(!show)}}>
        		                <i className="fa fa-bars"></i>
        		            </button>
        		            <figure className="logomenubil1">
        			            <Link className="" to="#brand">
        			            	<img src={logo_bl} className="logo" alt="" />
        			            </Link>
        		            </figure>
                            <figure className="lfvcon1">
                                <Link to="#">
                                    <img src={logo_bl} className="" alt="" />
                                </Link>
                            </figure>
        		        </div>
        		       
        		        <div className={`${show ? "" : "collapse"} navbar-collapse`} id="navbar-menu">
        		           <ul className="nav navbar-nav navbar-center ac1-menuhref1">
        		                <li className="bot-hvr1 bot-hvractive1"><Link to="/" onClick={()=>{setShow(false)}}><i className="material-icons">home</i> Home</Link></li>
                                
                                <li className="bot-hvr1"><Link to="nosotros" onClick={()=>{setShow(false)}}><i className="material-icons">supervisor_account</i> Nosotros</Link></li>

        		                <li className="bot-hvr1"><Link to="productos" onClick={()=>{setShow(false)}}><i className="material-icons">supervisor_account</i> Productos</Link></li>
        		                {/* <!--li className="bot-hvr1"><Link to="./../../merchandising"><i className="material-icons">assignment_turned_in</i> Merchandising</Link></li-->
        		                <!--li className="bot-hvr1 dropdown">
        		                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" ><i className="material-icons">photo_library</i> Galería</Link>
        		                    <ul className="dropdown-menu">
        		                        <li><Link to="./../../galeria_imagen">Galería de Imágenes</Link></li>
        		                        <li><Link to="./../../galeria_video">Galería de Video</Link></li>
        		                    </ul>
        		                </li--> */}
        		                <li className="bot-hvr1"><Link to="servicios" onClick={()=>{setShow(false)}}><i className="material-icons">library_books</i> Servicios</Link></li>
        		                <li className="bot-hvr1"><Link to="contacto" onClick={()=>{setShow(false)}}><i className="material-icons">contact_mail</i> Contacto</Link></li>
        		            </ul>
        		        </div>
        		    </div>   
        		</nav>
            </section>
        </div>
        </header>
        <div className="wrapsection"></div>
    </>
 
  )
}
