import { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Global } from '../../../../helper/Global';
import Swal from 'sweetalert2';
import logo from "./../../../../assets/images/logos/logo.png";
import Editor from './Editor';
import { FaTimes, FaImage} from "react-icons/fa";

const AgregarProducto = () => {
    let token = localStorage.getItem("token");

    const [loading, setLoading] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState("");

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [peso, setPeso] = useState("");

    const [content, setContent] = useState('');
    const [imagen1, setImagen1] = useState({});
    const [boton1, setBoton1] = useState(false);
    const [url1, setUrl1] = useState("");

    const navigate = useNavigate();

    const getAllCategorias= async () =>{
        setLoading(true);
        const request = await axios.get(`${Global.url}/allCategorias`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
        setCategorias(request.data);
        setLoading(false);
    };

    useEffect ( () =>{
        getAllCategorias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveProducto = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");
        const data = new FormData();
        data.append('id_categoria', categoria);
        data.append('nombre', nombre);
        data.append('imagen1', imagen1.archivo);
        data.append('precio', precio);

        try {
            let respuesta = await axios.post(`${Global.url}/saveProducto`, data,{
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
            console.log(error.request.response)
            Swal.fire('Error al agregar el registro', '', 'error');
        }
    }

    // IMAGEN1
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
        <div className="container col-md-10 mt-6">
            <div className="card">
                <div className="card-header fw-bold">
                    Agregar Producto:
                </div>
                <form className="p-4 needs-validation" onSubmit={saveProducto}>
                    <div className="d-flex justify-content-between">
                        <div className="mb-3 col-md-12 content_img">
                           <img src={logo} alt=""/>
                        </div>
                    </div>
                    {loading === false ? 
                        <div className="d-flex justify-content-center" style={{paddingTop: '30px'}}>
                            <div className="mb-3 col-md-11">
                                <div className='content_general mb-3 col-md-12 content_double'>
                                    <div className="mb-3 col-md-7 div_conten div_content2">
                                        <label className="label_title">Nombre: </label>
                                        <input className="form-control form-control3" autoFocus required
                                            value={nombre}  
                                            type="text"
                                            onChange={(e) => setNombre(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-3 div_conten div_content2">
                                        <label className="label_title col-md-6">Categoria: </label>
                                        <select value={categoria} type="text" className="form-select"  autoFocus required onChange={(e)=>{setCategoria(e.target.value)}}>
                                            <option  >---SELECCIONAR---</option>
                                            {categorias.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3 col-md-2 div_conten">
                                        <label className="label_title">Precio: </label>
                                        <input className="form-control form-control3" autoFocus required
                                            value={precio}  
                                            type="number"
                                            onChange={(e) => setPrecio(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='content_general mb-3 col-md-12 content_double3'>
                                    <div className="mb-3 col-md-4 ">
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
                                                    {""+url1}
                                                </span>
                                                : ''}
                                                <input accept="image/*" id="imagen1" className="d-none" type="file" name="imagen1" onChange={imagen1Function} />

                                                <img className="img-thumbnail d-none" id="img-preview1" alt="img"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    :  
                    <div className="dot-spinner dot-spinner4">
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                    </div>}
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

export default AgregarProducto