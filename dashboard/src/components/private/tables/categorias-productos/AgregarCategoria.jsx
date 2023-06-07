import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Global } from '../../../../helper/Global';
import Swal from 'sweetalert2';
import logo from "./../../../../assets/images/logos/logo.png";
import { FaTimes, FaImage} from "react-icons/fa";

const AgregarCategoria = () => {

    const [nombre, setNombre] = useState("");
    const [imagen1, setImagen1] = useState({});
    const [boton1, setBoton1] = useState(false);
    const [url1, setUrl1] = useState("");

    const navigate = useNavigate();

    const saveCategoria = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");

        const data = new FormData();
        data.append('nombre', nombre);
        data.append('imagen', imagen1.archivo);

        try {
            let respuesta = await axios.post(`${Global.url}/saveCategoria`, data,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if(respuesta.data.status === "success"){
                Swal.fire('Agreado correctamente', '', 'success');
                navigate(`/admin/productos`);
            }else{
                Swal.fire('Error al agregar el registro', '', 'error');
            }
        } catch (error) {
            Swal.fire('Error al registrar la categoria', '', 'error');
        }
    }

    const imagen1Function = (e) =>{
        const url = e.target.files[0];
        // CREAR URL
        const urlTmp = URL.createObjectURL(url);
        // CARGAR PREVIEW IMG
        document.getElementById("img-preview1").src = urlTmp;
        document.getElementById("icon-image1").classList.add("d-none");
        document.getElementById("img-preview1").classList.remove("d-none");
        setUrl1(url['name']);
        setBoton1(true);

        setImagen1({
            archivo: e.target.files[0],
            archivoName: e.target.files[0].name
        });
    }
    const deleteImg1 = (e) =>{
        e.preventDefault();
        setBoton1(false);
        document.getElementById("icon-image1").classList.remove("d-none");
        document.getElementById("img-preview1").classList.add("d-none");
        document.getElementById("imagen1").value = '';
        document.getElementById("foto_delete").value = '';
    }

    return (
        <div className="container col-md-8 mt-6">
            <div className="card">
                <div className="card-header fw-bold">
                    Agregar Categoria:
                </div>
                <form className="p-4 needs-validation" onSubmit={saveCategoria}>
                    <div className="d-flex justify-content-between">
                        <div className="mb-3 col-md-12 content_img">
                           <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center" style={{paddingTop: '30px'}}>
                        <div className="mb-3 col-md-11">
                            <div className='content_general mb-3 col-md-12'>
                                <div className="mb-3 col-md-12 div_conten">
                                    <label className="label_title">Nombre: </label>
                                    <input className="form-control form-control3" autoFocus required
                                        value={nombre}  
                                        type="text"
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className='content_general mb-3 col-md-12 content_double3'>
                        <div className="mb-3 col-md-4 div_content2">
                            <label className="form-label">Imagen: </label>
                            <div className="card border-primary">
                                <div className="card-body">
                                    <label htmlFor="imagen1" id="icon-image1" className="btn btn-primary col-md-12 btn-openImage"><FaImage className="icon-preimage"/>
                                    </label>
                                    {boton1 === true ?
                                    <span id="icon-cerrar">
                                        <button className="btn btn-danger mb-2" onClick={deleteImg1}>
                                            <FaTimes/>
                                        </button>
                                        {"    "+url1}
                                    </span>
                                    : ''}
                                    <input accept="image/*" id="imagen1" className="d-none" type="file" name="imagen1" onChange={imagen1Function} />
                                    <img className="img-thumbnail d-none" id="img-preview1" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex gap-2 contentBtnRegistrar">
                        <input type="hidden" name="oculto" value="1" />
                        <Link to="/admin/productos" className="btn btn-danger btnCancelar">Cancelar</Link>
                        <input type="submit" className="btn btn-primary btnRegistrar" value="Registrar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregarCategoria