import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Global } from "../../../helper/Global";
import Pagination from 'react-bootstrap/Pagination';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import Loading from './shared/Loading';


// import Loading from './shared/Loading';

export const Categorias = () => {

    const {id} = useParams();
    const [categorias, setCategorias] = useState([]);
    const [itemPagination, setItemPagination] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const [paginaActual, setpaginaActual] = useState(1);
    const [cantidadRegistros] = useState(12);
    const [cargandoBusqueda, setCargandoBusqueda] = useState(0);

    const navigate = useNavigate();

    const getAllCategorias= async () =>{
        setLoading(true);
        const request = await axios.get(`${Global.url}/allCategorias`);
        setCategorias(request.data);
    };

    function convertirTextoAUrl(texto) {
        // Reemplazar los caracteres no deseados por un espacio en blanco
        let url = texto.replaceAll(/[^a-zA-Z0-9 ]/g, '');
        // Convertir todo el texto a minúsculas
        url = url.toLowerCase();
        // Reemplazar los espacios en blanco por guiones
        url = url.replaceAll(' ', '-');
        return url;
    }

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
    },[productos,paginaActual])

    const getAllProductos= async () =>{
        const request = await axios.get(`${Global.url}/allProductosGroup/${id}`);
        setProductos(request.data);
        setCargandoBusqueda(request.data.length);
        setLoading(false);
    };

    useEffect(()=>{
        getAllCategorias();
        getAllProductos();
    },[])

    useEffect(()=>{
        getAllCategorias();
        getAllProductos();
    },[id])
    
    const indexOfLastPost = paginaActual * cantidadRegistros;
    const indexOfFirstPost= indexOfLastPost - cantidadRegistros;
    let totalPosts = productos.length;

    const filterDate = () =>{
        let clinica = productos.slice(indexOfFirstPost, indexOfLastPost);
        return clinica;
    }

  return (
    <section className="sect_servicio_descripcion" style={{position: 'relative'}}>
        {loading ? 
                <Loading/> 
            :
            filterDate().length !== 0 ?
            <div className='cargando_busqueda_result'>
                <p>{cargandoBusqueda} productos encontrados</p>
            </div>
                : ""
            }
        <div className="container">
            <div className="row">
            
                <div className="col-md-9 col-lg-9">
                    <div className="box_servicio_descripcion">
                        <div className="box_body">
                            <ul className="list_products">

                                {
                                    filterDate().map((pro) =>(
                                        <li className="" key={pro.id}>
                                            <div className="box_products">
                                                <div className="box_header">
                                                    <Link to="#">
                                                        <img src={`${Global.urlImages}/productos/${pro.imagen1}`} alt={pro.nombre}/>
                                                    </Link>
                                                </div>
                                                <div className="box_body">
                                                    <div>
                                                        <div className="price">
                                                            <span>{pro.nombre}</span>
                                                        </div>
                                                        {
                                                            pro.precio > 0 ?
                                                            <span className="precio">S/ {pro.precio}</span>
                                                            :""
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                    {filterDate().length > 0 ?
                        <div className="dataTables_paginate paging_simple_numbers" id="productos_paginate">
                            <Pagination>
                                {itemPagination.map((item) =>{
                                    return item;
                                })}
                            </Pagination>
                        </div> 
                    :""  
                    }
                </div>
                
                <div className="col-md-3 col-lg-3 order2_mobile">
                    <aside className="aside_categorias">
                        <Accordion defaultActiveKey="1" className='aside_categorias-acordion'>
                            {categorias.map((cate)=>(
                                <Accordion.Item eventKey="1" className='' key={cate.id} onClick={()=>(navigate(`/categorias/${cate.id}-${convertirTextoAUrl(cate.nombre)}`))}>
                                    <Accordion.Header className='aside_categorias-acordion-link'>{cate.nombre}</Accordion.Header>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </aside>

                    <div className="box_horario">
                    <ul>
                            <li>
                                <span>Lun - Vie</span>
                                <span>8:00am - 6:30pm</span>
                            </li>

                            <li>
                                <span>Sab</span>
                                <span>8:00am - 6:30pm</span>
                            </li>
                        </ul>
                    </div>

                    <div className="box_contacto">
                        <ul>
                            <li><Link to="tel:51920398331"><span className="fa fa-mobile"></span> (+51) 920 398 331</Link></li>

                            <li><Link to="mailto:ventas@elosodelaconstruccion.com"><span className="fa fa-envelope"></span> ventas@elosodelaconstruccion.com</Link></li>
                            <li><span className="fa fa-home"></span> Calle Santa Rosa #1517, Sector Aurich, Ferreñafe.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>

  )
}
