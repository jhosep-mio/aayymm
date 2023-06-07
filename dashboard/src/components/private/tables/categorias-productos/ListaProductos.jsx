import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../../../../helper/Global';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Swal from 'sweetalert2';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";


const ListaProductos = () => {
    const [productos, setProductos] = useState( [] );
    const [categorias, setCategorias] = useState( [] );
    const [itemPagination, setItemPagination] = useState( [] );
    const [itemPaginationOdonto, setItemPaginationOdonto] = useState( [] );
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [paginaActual, setpaginaActual] = useState(1);
    const [paginaActualOdonto, setPaginaActualOdonto] = useState(1);
    const [cantidadRegistros] = useState(4);
    const [cargandoBusqueda, setCargandoBusqueda] = useState(0);
    const [cargandoBusqueda2, setCargandoBusqueda2] = useState(0);
    const [activo, setActivo] = useState(0);
    let token = localStorage.getItem("token");

    useEffect ( () =>{
        const filter2 = productos.filter((cate) => {
            return (
                quitarAcentos(cate.nombre.toLowerCase()).includes(quitarAcentos(search.toLowerCase()))
            );
        });
        setCargandoBusqueda(filter2.length);

        const filter3 = categorias.filter((cate) => {
            return (
                quitarAcentos(cate.nombre.toLowerCase()).includes(quitarAcentos(search.toLowerCase()))
            );
        });
        setCargandoBusqueda(filter2.length);
        setCargandoBusqueda2(filter3.length);
    }, [search]);

    useEffect ( () =>{
        getAllProductos();
        getAllCategorias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() =>{

       let items= [];
        if(paginaActual > 1){
            items.push(<li key="previous" className="paginate_button page-item previous" id="productos_previous" onClick={()=>{setpaginaActual(paginaActual - 1)}}  >
                            <Link aria-controls="productos" className="page-link"> <BsChevronDoubleLeft/> </Link>
                         </li>);
        }else{
            items.push(<li key="previous" className="paginate_button page-item previous disabled" id="productos_previous" >
                        <Link aria-controls="productos" className="page-link"> <BsChevronDoubleLeft/></Link>
                    </li>);
        }

        items.push(
            <Pagination.Item key={1} active={1 === paginaActual} onClick={() => setpaginaActual(1)}>
            {1}
            </Pagination.Item>
        );
        
        for(let i =1; i < Math.ceil(totalPosts / cantidadRegistros); i++){
            if (paginaActual <= 2 && i <= 2) {
                if(i != 1){
                    items.push(
                        <Pagination.Item key={i} active={i === paginaActual} onClick={() => setpaginaActual(i)}>
                        {i}
                        </Pagination.Item>
                    );
                }
            }
              // Si la página actual es mayor o igual al total de páginas menos 3, siempre mostramos los últimos 5 botones
            else if (paginaActual >= totalPosts - 1 && i >= totalPosts - 2) {
                    items.push(
                        <Pagination.Item key={i} active={i === paginaActual} onClick={() => setpaginaActual(i)}>
                        {i}
                        </Pagination.Item>
                    );
            }
    
              // Si estamos en el medio, mostramos los 3 botones previos y los 3 siguientes a la página actual
            else if (i >= paginaActual - 1 && i <= paginaActual + 1) {
                items.push(
                    <Pagination.Item key={i} active={i === paginaActual} onClick={() => setpaginaActual(i)}>
                    {i}
                    </Pagination.Item>
                );
            }
            // Agregamos el botón de elipsis cuando sea necesario
            else if (i === 1 || i === totalPosts || (i >= paginaActual - 1 && i <= paginaActual + 2) ) {
                items.push(
                    <Pagination.Ellipsis />
                );
            }
            // items.push(<Pagination.Item key={i} active={i=== paginaActual} onClick={()=>{setpaginaActual(i)}}>{i}</Pagination.Item>);
        }

        if(Math.ceil(totalPosts / cantidadRegistros) > 1){
            items.push(
                <Pagination.Item key={Math.ceil(totalPosts / cantidadRegistros)} active={(Math.ceil(totalPosts / cantidadRegistros)) === paginaActual} onClick={() => setpaginaActual(Math.ceil(totalPosts / cantidadRegistros))}>
                {Math.ceil(totalPosts / cantidadRegistros)}
                </Pagination.Item>
            );
        }

        if(paginaActual < Math.ceil(totalPosts / cantidadRegistros)){
            items.push(<li key="next" className="paginate_button page-item next" id="productos_next" onClick={()=>{setpaginaActual(paginaActual + 1)}}>
                            <Link aria-controls="productos" className="page-link"><BsChevronDoubleRight/></Link>
                        </li>);
        }else{
            items.push(<li key="next" className="paginate_button page-item next disabled" id="productos_next">
                            <Link aria-controls="productos" className="page-link"><BsChevronDoubleRight/></Link>
                        </li>);
        }
        setItemPagination(items);

    },[productos,paginaActual,search]);


    useEffect(() =>{
        let items= [];
        if(paginaActualOdonto > 1){
            items.push(<li key="previous" className="paginate_button page-item previous" id="productos_previous" onClick={()=>{setPaginaActualOdonto(paginaActualOdonto - 1)}}  >
                            <Link aria-controls="productos" className="page-link">Anterior</Link>
                         </li>);
        }else{
            items.push(<li key="previous" className="paginate_button page-item previous disabled" id="productos_previous" >
                        <Link aria-controls="productos" className="page-link">Anterior</Link>
                    </li>);
        }
        for(let i =1; i <= Math.ceil(totalPostsOdonto / cantidadRegistros); i++){
            items.push(<Pagination.Item key={i} active={i=== paginaActualOdonto} onClick={()=>{setPaginaActualOdonto(i)}}>{i}</Pagination.Item>);
        }

        if(paginaActualOdonto < Math.ceil(totalPostsOdonto / cantidadRegistros)){
            items.push(<li key="next" className="paginate_button page-item next" id="productos_next" onClick={()=>{setPaginaActualOdonto(paginaActualOdonto + 1)}}>
                            <Link aria-controls="productos" className="page-link">Siguiente</Link>
                        </li>);
        }else{
            items.push(<li key="next" className="paginate_button page-item next disabled" id="productos_next">
                            <Link aria-controls="productos" className="page-link">Siguiente</Link>
                        </li>);
        }
        setItemPaginationOdonto(items);
    },[categorias,paginaActualOdonto,search]);

    const cambiarActivo = (id) =>{
        setActivo(id);
    }

    const getAllProductos= async () =>{
        setLoading(true);
        const request = await axios.get(`${Global.url}/allProductos`);
        setProductos(request.data);
        setCargandoBusqueda(request.data.length);
        setLoading(false);
    };

    const getAllCategorias= async () =>{
        setLoading(true);

        const request = await axios.get(`${Global.url}/allCategorias`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });

        setCategorias(request.data);
        setCargandoBusqueda2(request.data.length);
        setLoading(false);
    };

    const indexOfLastPost = paginaActual * cantidadRegistros;
    const indexOfFirstPost= indexOfLastPost - cantidadRegistros;
    let totalPosts = productos.length;

    const indexOfLastPostOdonto = paginaActualOdonto * cantidadRegistros;
    const indexOfFirstPostOdonto= indexOfLastPostOdonto - cantidadRegistros;
    let totalPostsOdonto = categorias.length;

    function quitarAcentos(cadena){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
    } 

    const filterDate = () =>{
        if(search.length === 0){
            let producto = productos.slice(indexOfFirstPost, indexOfLastPost);
            return producto;
        }

        const filter = productos.filter((pro) => {
            return (
                quitarAcentos(pro.nombre.toLowerCase()).includes(quitarAcentos(search.toLowerCase())) ||
                quitarAcentos(pro.categoria.toLowerCase()).includes(quitarAcentos(search.toLowerCase())) ||
                pro.precio.toString().includes(search)
            );
        });

        totalPosts= filter.length;
        return filter.slice(indexOfFirstPost, indexOfLastPost);
    }

    const filterDatecategorias = () =>{
        if(search.length === 0){
            let categoria = categorias.slice(indexOfFirstPostOdonto, indexOfLastPostOdonto);
            return categoria;
        }

        const filter = categorias.filter((cate) => {
            return (
                quitarAcentos(cate.nombre.toLowerCase()).includes(quitarAcentos(search.toLowerCase()))
            );
        });
        totalPosts= filter.length;
        return filter.slice(indexOfFirstPostOdonto, indexOfLastPostOdonto);
    }

    const onSeachChange = ({target}) =>{
        setpaginaActual(1);
        setPaginaActualOdonto(1);
        setSearch(target.value);
    }

    const preguntar = (id) =>{
        Swal.fire({
            title: `¿Estas seguro de eliminar al producto N° ${id}?`,
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                deleteproducto(id);
            }
          })
    }

    const preguntar2 = (id) =>{
        Swal.fire({
            title: `¿Estas seguro de eliminar la categoria N° ${id}?`,
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                deleteCategoria(id);
            }
          })
    }

    const deleteproducto = async (id) =>{
        try {
            const resultado= await axios.delete(`${Global.url}/deteleProducto/${id}`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });

            
            if(resultado.data.status === "success"){
                Swal.fire('Registro eliminado correctamente', '', 'success');
                getAllProductos();
                setTimeout(()=>{
                    if(Math.round(totalPosts / cantidadRegistros) === paginaActual){
                        console.log();
                    }else{
                        setpaginaActual(Math.round(totalPosts / cantidadRegistros));
                    }
                }, 1000);
            }else{
                Swal.fire('Error al eliminar el registro', '', 'error');
            }
        } catch (error) {
                Swal.fire('Error al eliminar el registro', '', 'error');
                console.log(error)
        }
    }

    const deleteCategoria = async (id) =>{
        try {
            const resultado= await axios.delete(`${Global.url}/deleteCategoria/${id}`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(resultado.data.status);
            
            if(resultado.data.status === "success"){
                Swal.fire('Registro eliminado correctamente', '', 'success');
                getAllCategorias();
                setTimeout(()=>{
                    if(Math.round(totalPostsOdonto / cantidadRegistros) === paginaActualOdonto){
                        console.log();
                    }else{
                        setItemPaginationOdonto(Math.round(totalPostsOdonto / cantidadRegistros));
                    }
                }, 1000);
            }else{
                Swal.fire('Error al eliminar el registro', '', 'error');
            }
        } catch (error) {
                Swal.fire('Error al eliminar el registro', '', 'error');
        }
    }

    return (
        <div className="container mt-6 ms-5-auto">
            <div className="row justify-content-center">
                {/* TAMAÑO DE LA TABLA WIDTH  */}
                <div className="col-md-11">

                    {activo === 0 ?
                    <div className="d-grid">
                        <input type="hidden" name="oculto" value="1" />
                        <Link type="submit" className="btn btn-primary mb-3" to="agregar/producto" style={{width: '200px'}}> <FontAwesomeIcon icon={faPlus}/> Registrar Producto</Link>
                    </div>
                    :
                    <div className="d-grid">
                        <input type="hidden" name="oculto" value="1" />
                        <Link type="submit" className="btn btn-primary mb-3" to="agregar/categoria" style={{width: '250px'}}> <FontAwesomeIcon icon={faPlus}/> Registrar Categoria</Link>
                    </div>
                    }
                    {/* <!--==== TABLA PRODUCTOS ====--> */}
                    <div className="card">
                        <div className="card-header text-center fs-5 fw-bolder" style={{transition: 'all 500ms'}}>
                            Lista de {activo === 0 ? "Productos" : "Categorias" } 
                        </div>
                        <div className='content_top_filters'>
                                <div className='content_top_filters__buttons'>
                                    <button onClick={() => cambiarActivo(0)} style={{
                                                backgroundColor: 0 === activo ? '#1C3661' : 'transparent',
                                                color: 0 === activo ? 'white' : '#1C3661'
                                    }}>Productos</button>
                                    <button onClick={() => cambiarActivo(1)} style={{
                                                backgroundColor: 1 === activo ? '#1C3661' : 'transparent',
                                                color: 1 === activo ? 'white' : '#1C3661'
                                    }}>Categorias</button>
                                </div>
                                <div id="productos_filter" className="dataTables_filter">
                                    <label>Buscar:<input 
                                    value={search}
                                    onChange={onSeachChange}
                                    type="search" className="form-control form-control-sm" placeholder="" aria-controls="productos"/>
                                    </label>
                                </div>
                        </div>
                        
                        {activo === 0 ?
                        <div className="p-4 table-responsive odon_productos">
                            <Table id="productos" className="table align-middle table-hover display">
                                <thead className="table-light">
                                    <tr>
                                        {/* <!-- 1 --> */}
                                        <th scope="col" className="text-center">ID</th>
                                        {/* <!-- 2 --> */}
                                        <th scope="col" className="text-center">Nombre</th>

                                        <th scope="col" className="text-center">Imagen</th>

                                        <th scope="col" className="text-center">Precio</th>

                                        <th scope="col" className="text-center">Categoria</th>

                                        {/* <!-- 3 --> */}
                                        <th scope="col" className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tableBody">
                                    { loading === false ? filterDate().map( (producto)=>(
                                        <tr key={producto.id}>
                                            
                                            <td  className="text-center">
                                                {producto.id}
                                            </td>

                                            <td  className="text-center">
                                                {producto.nombre}
                                            </td>

                                            <td  className="text-center">
                                                <img className="images" src={`${Global.urlImages}/productos/${producto.imagen1}`} alt={producto.nombre} />
                                            </td>

                                            <td  className="text-center">
                                                {producto.precio}
                                            </td>

                                            <td  className="text-center">
                                                {producto.categoria}
                                            </td>

                                            {/* <!-- 9. Opciones --> */}
                                            <td className="text-center">
                                                <Link className="text-success" to={`/admin/productos/editar/producto/${producto.id}`}>
                                                <FontAwesomeIcon icon={faPencil}/>
                                                </Link>
                                                <button className="text-danger btnEliminar" onClick={()=>{preguntar(producto.id)}}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )) : 
                                    <tr colSpan="7" align="center" rowSpan="7">
                                        <td colSpan="7">
                                            <div className="dot-spinner">
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    }

                                </tbody>
                            </Table>

                            <div className="dataTables_info" id="productos_info" role="status" aria-live="polite">
                              {
                              cargandoBusqueda
                              } Registros</div>
                            
                             <div className="dataTables_paginate paging_simple_numbers" id="productos_paginate">
                                <Pagination>
                                    {itemPagination.map((item) =>{
                                        return item;
                                    })}
                                </Pagination>
                            </div> 
                        </div>
                        : 
                        
                        <div className="p-4 table-responsive odon_productos">
                            <Table id="productos" className="table align-middle table-hover display">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className="text-center">ID</th>

                                        <th scope="col" className="text-center">Nombre</th>

                                        <th scope="col" className="text-center">Imagen</th>

                                        {/* <!-- 3 --> */}
                                        <th scope="col" className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tableBody">
                                    { loading === false ? filterDatecategorias().map( (cate)=>(
                                        <tr key={cate.id}>
                                            
                                            <td  className="text-center">
                                                {cate.id}
                                            </td>

                                            <td  className="text-center">
                                                {cate.nombre}
                                            </td>

                                            <td  className="text-center">
                                                <img className="images" src={`${Global.urlImages}/categorias/${cate.imagen}`} alt={cate.nombre} />
                                            </td>

                                            <td className="text-center">
                                                <Link className="text-success" to={`/admin/productos/editar/categoria/${cate.id}`}>
                                                <FontAwesomeIcon icon={faPencil}/>
                                                </Link>
                                                <button className="text-danger btnEliminar" onClick={()=>{preguntar2(cate.id)}}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )) : 
                                    <tr colSpan="6" align="center" rowSpan="5">
                                        <td colSpan="6">
                                            <div className="dot-spinner">
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                                <div className="dot-spinner__dot"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    }

                                </tbody>
                            </Table>

                            <div className="dataTables_info" id="productos_info" role="status" aria-live="polite">
                              {
                              cargandoBusqueda2
                              } Registros</div>
                            
                             <div className="dataTables_paginate paging_simple_numbers" id="productos_paginate">
                                <Pagination>
                                    {itemPaginationOdonto.map((item) =>{
                                        return item;
                                    })}
                                </Pagination>
                            </div> 
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaProductos