import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Global } from '../../../helper/Global';

export const Contacto = () => {

    const[nombres, setNombres] = useState("");
    const[telefono, setTelefono] = useState("");
    const[email, setEmail] = useState("");
    const[asunto, setAsunto] = useState("");
    const[mensaje, setMensaje] = useState("");
    const[loading, setLoading] = useState(false);

    const enviarCorreo = async() =>{
        setLoading(true);

        const data = new FormData();
        data.append('nombre', nombres);
        data.append('telefono', telefono);
        data.append('email', email);
        data.append('asunto', asunto);
        data.append('mensaje', mensaje);
        data.append('mensaje', carrito);


        try {
            let respuesta = await axios.post(`${Global.url}/enviarCorreo`, data);

            if(respuesta.data.status === "success"){
                Swal.fire('Correo enviado','', 'success');
                setNombres("");
                setTelefono("");
                setEmail("");
                setAsunto("");
                setMensaje("");
            }else{
                Swal.fire('Error al enviar el correo', '', 'error');
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Complete todos los campos', '', 'error');
        }
        setLoading(false);
    }

  return (

    <>
    <section className="mapeadobga1">
            <div id="map" style={{width: "100%", height: "400px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.143711970177!2d-79.78854328522874!3d-6.629066195206407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzcnNDQuNiJTIDc5wrA0NycxMC45Ilc!5e0!3m2!1ses!2spe!4v1683562631119!5m2!1ses!2spe" width="100%" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <section>
            <div className="container">
                <ul className="row cn1-list1">
                    <li className="col-xs-12 col-sm-4">
                        <div className="cn1-direction1">
                            <h3>Dirección:</h3>
                            <p>Calle Santa Rosa #1517, Sector Aurich, Ferreñafe.</p>
                        </div>
                    </li>
                    <li className="col-xs-12 col-sm-4">
                        <div className="cn1-mov1">
                            
                        
                                <h3>Whatsapp:</h3>
                                <a href="mailto:51986170834"><span>(+51) 986 170 834</span></a>
                            
                        </div>
                    </li>
                    <li className="col-xs-12 col-sm-4 last">
                        <div className="cn1-email1">
                            <h3>E-mail:</h3>
                            <a href="mailto:ventas@exportando-online.com">ventas@exportando-online.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="bgallercontact1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row" style={{position: 'relative'}}>
                            <form className="formulario hmfrmcontac bform" >
                                <div className="col-sm-12 col-md-12">
                                    <span className="response"></span>
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <div className="gs1-frmCnt">
                                        <input className="form-control gs1-inpfrm" id="nombre" name="nombre" type="text" placeholder="Nombres" value={nombres} onChange={(e) => setNombres(e.target.value)}/>
                                        <span aria-hidden="true" className="fa fa-user gs1-frmIcon"></span>
                                    </div>
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <div className="gs1-frmCnt">
                                        <input className="form-control gs1-inpfrm" id="telefono" name="telefono" type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                                        <span aria-hidden="true" className="fa fa-phone gs1-frmIcon"></span>
                                    </div>
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <div className="gs1-frmCnt">
                                        <input className="form-control gs1-inpfrm" id="email" name="email" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <span aria-hidden="true" className="fa fa-at gs1-frmIcon"></span>
                                    </div>
                                </div>
                                <div className="form-group col-sm-12 col-md-12">
                                    <div className="gs1-frmCnt">
                                        <input className="form-control gs1-inpfrm" id="asunto" name="asunto" type="text" placeholder="Asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)}/>
                                        <span aria-hidden="true" className="fa fa-book gs1-frmIcon"></span>
                                    </div>
                                </div>
                                <div className="form-group col-sm-12 col-md-12">
                                    <div className="gs1-frmCnt">
                                        <textarea className="form-control gs1-txtareafrm" id="mensaje" name="mensaje" rows="7" style={{resize: "vertical", placeholder: "Mensaje"}} value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                                        <span aria-hidden="true" className="fa fa-pencil-square-o gs1-frmIcon"></span>
                                    </div>
                                </div>

                                <div className="form-group text-right col-md-12">
                                    <button className="btn frmbtnflt save" onClick={(e)=>{enviarCorreo(), e.preventDefault()}}>Enviar</button>
                                </div>
                                {
                                    loading ?
                                        <div className='gira_absolute'>
                                            ...ENVIANDO
                                        </div>
                                    :""
                                }
                            </form> 
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
        
  )
}
