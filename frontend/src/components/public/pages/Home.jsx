
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from 'react-router-dom';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from '../../../assets/public/img/slider/slider1.jpg';
import slide2 from '../../../assets/public/img/slider/slider2.jpg';
import cat1 from '../../../assets/public/img/categorias/categoria1.jpg';
import cat2 from '../../../assets/public/img/categorias/categoria2.jpg';
import cat3 from '../../../assets/public/img/categorias/categoria3.jpg';
import cat4 from '../../../assets/public/img/categorias/categoria4.jpg';
import material from '../../../assets/public/img/productos/material1.webp';
import nosotros from '../../../assets/public/img/nosotros/we-nosotros-1.jpg';
import servicios from '../../../assets/public/img/servicios/alquile.jpg';
import axios from "axios";
import { Global } from "../../../helper/Global";
import Loading from "./shared/Loading";

const Home = () => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllCategorias= async () =>{
        setLoading(true);
        const request = await axios.get(`${Global.url}/allCategorias`);
        setCategorias(request.data);
    };

    const getAllProductos= async () =>{
        const request = await axios.get(`${Global.url}/allProductos`);
        setProductos(request.data);
        setLoading(false);
    };

    useEffect(()=>{
        getAllCategorias();
        getAllProductos();
    },[])

    function convertirTextoAUrl(texto) {
        // Reemplazar los caracteres no deseados por un espacio en blanco
        let url = texto.replaceAll(/[^a-zA-Z0-9 ]/g, '');
      
        // Convertir todo el texto a minúsculas
        url = url.toLowerCase();
      
        // Reemplazar los espacios en blanco por guiones
        url = url.replaceAll(' ', '-');
      
        return url;
    }


  return (
    
    <>
          <section>

            <Swiper navigation={true} modules={[Navigation, Autoplay]} className="slider" loop={true} autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}>
              <SwiperSlide>
                <img src={slide1} alt="" className="img_slide_Sc"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" className="img_slide_Sc"/>
              </SwiperSlide>

            </Swiper>
          </section>

          <section className="sect_categorias">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <Swiper  className="categorias_product" modules={[Autoplay]}  
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            576: {
                              slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                              slidesPerView: 4,
                            }
                          }}
                          slidesPerView={4} 
                          spaceBetween={30} 
                          loop={true} 
                          autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            
                          }}>
                            {categorias.map((cate)=>(
                                <SwiperSlide key={cate.id}>
                                <div className="box_categoria">
                                    <div className="box_head">
                                    <Link to="/productos"><img src={`${Global.urlImages}/categorias/${cate.imagen}`} alt={cate.nombre} /></Link>
                                    </div>

                                    <div className="box_body">
                                    <h5><Link to="#">{cate.nombre}</Link></h5>
                                    </div>
                                </div>

                                </SwiperSlide>

                            ))}
                          </Swiper>

                      </div>
                  </div>
              </div>
          </section>

          <section className="sect_producto_firts fondo_isotipo1">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="controls_products">
                              <div className="title_categoria">
                                  <h4>Todos los Productos</h4>
                              </div>
                          </div>

                          <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="list_products"
                            loop={true} autoplay={{
                              delay: 4000,
                              disableOnInteraction: false,
                            }}
                          >
                            {productos.map((pro)=>(
                                <SwiperSlide key={pro.id}>
                                <div className="box_products">
                                    <div className="box_header">
                                    <Link to="/productos">
                                        <img src={`${Global.urlImages}/productos/${pro.imagen1}`} alt={pro.nombre} style={{width: "100%"}}/>
                                    </Link>
                                    {/* <div className="add_cart">
                                        <span><Link to="#"><i className="fa fa-eye"></i> Ver más</Link></span>
                                    </div> */}
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
                                </SwiperSlide>
                            ))}
                          </Swiper>

                         

                      </div>
                  </div>
              </div>
          </section>

          {loading ?
            <Loading/>
            :""
        }
            
          {
            categorias.map((cate)=>(
                <section className="sect_producto_firts fondo_isotipo2" style={{background: "#f1f1f1"}} key={cate.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="controls_products">
                                <div className="title_categoria">
                                <h4>{cate.nombre}</h4>
                                </div>
                            </div>
                                <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    }
                                    }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                loop={true} autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                className="list_products"
                                key={cate.id}
                                >
                                    {productos.map((pro) =>(
                                        pro.id_categoria == cate.id ?
                                        <SwiperSlide key={pro.id}>
                                            <div className="box_products">
                                            <div className="box_header" >
                                                <Link to="#" style={{background: "white"}}>
                                                    <img src={`${Global.urlImages}/productos/${pro.imagen1}`} alt={pro.nombre} style={{width: "100%"}}/>
                                                </Link>
                                                <div className="add_cart">
                                                <span><Link to="/productos"><i className="fa fa-eye"></i> Ver más</Link></span>
                                                </div>
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
                                        </SwiperSlide>
                                        :""
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            ))
          }  

          <section className="noso-sectbghm1">
              <div className="container">
                  <div className="row flexbox-container">
                      <div className="col-sm-6 col-md-6">
                          <h2 className="noso-titleprinc1">Bienvenidos a <span>AA&MM</span></h2>
                          <div className="clearfix"></div>
                          <div className="text-nosotros">
                              <p>
                                  Nuestra empresa se funda un 12 de enero del 2019; como consultor, ejecutor de obras y de bienes y servicios. 
                              </p>
                              <p>
                                  Con el tiempo se sensibilizó la idea de brindar calidad y servicio profesional a todos los peruanos de a pie que deseen hacer sus sueños realidad; a través de la venta de materiales que cumplan los estándares de calidad y con la garantía nuestra empresa
                              </p>
                              <p>
                                  El esfuerzo, visión y dedicación de todos y cada uno de las personas involucradas en esta familia han hecho posible el establecimiento de una ferretería confiable, donde encontrarán materiales de construcción, electricidad, tuberías, entre otros.
                              </p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                          <figure className="noso-imgfigure1">
                              <img src={nosotros} />
                          </figure>
                      </div>
                  </div>
              </div>
          </section>

          <section className="sect_producto_firts fondo_isotipo3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="controls_products">
                            <div className="title_categoria">
                                <h4>Servicios</h4>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6">
                  <div className="title_servicio">
                    <h1>Alquiler de trompo mezclador</h1>
                  </div>
                  <p>Si necesitas una mezcladora de cemento para tus proyectos de construcción, ¡tenemos justo lo que necesitas!. Te ofrecemos equipos de alta calidad y fácil de usar que te ayudarán a mezclar cemento y otros materiales con rapidez y eficiencia.</p>
                  <p>Ofrecemos precios competitivos y un servicio amable y profesional para asegurarnos de que tengas la mejor experiencia posible.</p>
                  <p>¡No pierdas tiempo mezclando cemento a mano! Contáctanos hoy mismo para alquilar una mezcladora de cemento y hacer tus proyectos de construcción más eficientes y efectivos.</p>
                
                  <Link className="btn_ctcserv" to="">Contactar
                  </Link>
                </div>
                <div className="col-lg-6">
                  <img src={servicios} width="100%" className="img_serv" />
                </div>
                
                </div>
            </div>
          </section> 
    </>
  )
}

export default Home