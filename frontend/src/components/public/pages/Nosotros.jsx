import React from 'react'
import nosotros from '../../../assets/public/img/nosotros/we-nosotros-1.jpg';

export const Nosotros = () => {
  return (
    <>
        <section className="wex-bgweall1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h2 className="wex-titleprn1">Conoce Acerca de <b>AA&MM</b></h2>
                    </div>
                    <div className="col-sm-5 col-md-4">
                        <figure className="wex-imge1-1">
                            <img src={nosotros} alt="" />
                        </figure>
                    </div>
                    <div className="col-sm-7 col-md-8">
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
            </div>
        </section>


        <section className="wex-bgmisvis1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h2 className="wex-titlemisv1">Misión & <b>Visión</b></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <span className="wex-nmber1x1">M</span>
                        <div className="wex-wrapvmis1">
                            <p>
                                Somos una empresa ferretera y de materiales de construcción; con el respaldo de aas.mm contratistas generales, ingenieros expertos en la construcción.

                            </p>
                            <p>
                                Estamos preparados para satisfacer las necesidades de nuestros clientes a través de un servicio rápido y de la mejor calidad, con precios competitivos, de la mano con nuestros colaboradores; que nos ayudan ser mejores como empresa y como personas.

                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <span className="wex-nmber1x1">V</span>
                        <div className="wex-wrapvmis1">
                            <p>
                                Ser líder en el mercado y ser reconocido como una empresa donde opera la calidad y la diversidad de productos y soluciones, tanto en la región como a nivel nacional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
