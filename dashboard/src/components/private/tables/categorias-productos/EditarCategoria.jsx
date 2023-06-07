import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Global } from '../../../../helper/Global';
import Swal from 'sweetalert2';
import logo from "./../../../../assets/images/logos/logo.png";
import { FaTimes, FaImage} from "react-icons/fa";

const EditarCategoria = () => {
    let token = localStorage.getItem("token");

    const [nombre, setNombre] = useState("");
    const [loading, setLoading] = useState(false);
    const [imagen1, setImagen1] = useState({});
    const [boton1, setBoton1] = useState(false);
    const [url1, setUrl1] = useState("");
    const[imagenNueva, SetImagenNueva] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const preguntar = (e) =>{
        e.preventDefault();
        Swal.fire({
            title: '¿Seguro que deseas editar el registro?',
            showDenyButton: true,
            confirmButtonText: 'Editar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                updateCategoria();
            }
          })
    }

    const updateCategoria = async () => {
        const data = new FormData();
        
        data.append('nombre', nombre);
        data.append('imagen', imagenNueva.archivo);
        data.append('_method', 'PUT');

        try {
            let respuesta= await axios.post(`${Global.url}/updateCategoria/${id}`, data,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });

            if(respuesta.data.status === "success"){
                Swal.fire('Actualizacion Correcta', '', 'success');
                navigate(`/admin/productos`);
            }else{
                Swal.fire('Error al realizar la edicion', '', 'error');
            }
        } catch (error) {
            console.log(error.request.response)
            if(error.request.response.includes("nombre")){
                Swal.fire('Nombre invalido', '', 'error');
            }
        }
     
    }

    useEffect(()=>{
        getOneCategoria();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getOneCategoria = async() =>{
        setLoading(true);
        const oneServicio = await axios.get(`${Global.url}/oneCategoria/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });

        setNombre(oneServicio.data.nombre);
        setImagen1(oneServicio.data.imagen);
        setLoading(false);
    }

    const imagen1Function = (e) =>{
            const url = e.target.files[0];
            // CREAR URL
            const urlTmp = URL.createObjectURL(url);
            // CARGAR PREVIEW IMG
            document.getElementById("img-preview").src = urlTmp;
            document.getElementById("icon-image").classList.add("d-none");
            document.getElementById("img-preview").classList.remove("d-none");

            setUrl1(url['name']);
            setBoton1(true);
    
            SetImagenNueva({
                archivo: e.target.files[0],
                archivoName: e.target.files[0].name
            });
    }
    const deleteImg1 = (e) =>{
        setBoton1(false);
        document.getElementById("icon-image").classList.remove("d-none");
        document.getElementById("img-preview").classList.add("d-none");
        document.getElementById("imagen").value = '';
        document.getElementById("foto_delete").value = '';
    }
    
    return (
        <div className="container col-md-10 mt-6">
            <div className="card">
                <div className="card-header fw-bold">
                    Editar Servicio:
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mb-3 col-md-12 content_img">
                    <img src={logo} alt="" />
                    </div>
                </div>
                {loading === false ?
                <form className="p-4 needs-validation" onSubmit={preguntar} style={{paddingTop: '30px'}}>
                     <div className="d-flex justify-content-center">
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
                                    <label htmlFor="imagen" id="icon-image" className="btn btn-primary col-md-12"><FaImage id="btn-image-close"/></label>

                                    {boton1 === true ?
                                    <span id="icon-cerrar">
                                        <button className="btn btn-danger mb-2" onClick={deleteImg1}>
                                            <FaTimes/>
                                        </button>
                                        {"    "+url1}
                                    </span>
                                    : ''}

                                    <input accept="image/*" id="imagen" className="d-none" type="file" name="imagen" onChange={imagen1Function}/>

                                        <input type="hidden" id="foto_actual" value={imagen1} name="foto_actual"/>

                                        <input type="hidden" id="foto_delete" value={imagen1} name="foto_delete"/>

                                        <img className="img-thumbnail2" id="img-preview" src={`${Global.urlImages}/categorias/${imagen1}`} alt="nombre"
                                        style={{width: "100%"}} />
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="d-flex gap-2 contentBtnRegistrar">
                            <input type="hidden" name="oculto" value="1" />
                            <Link to="/admin/productos" className="btn btn-danger btnCancelar">Cancelar</Link>
                            <input type="submit" className="btn btn-primary btnRegistrar" value="Grabar" />
                        </div>
                </form>
                : <div className="dot-spinner dot-spinner4">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div>}
            </div>
             
        </div>
    )
}

export default EditarCategoria