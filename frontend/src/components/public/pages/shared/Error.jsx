import React from 'react'

export const Error = () => {
  return (
        <div className="main">
            <picture>
                <img src={error_img} alt="" className='img_error'/>
            </picture>
            <p>Página no encontrada 😕</p>

            <div className="design">
                <p>
                    Diseñado por: <br/>
                    <span>Logos Perú</span>
                </p>

                <div className="redes-sociales">
                    <Link to="https://www.facebook.com/DLogosPeru/?locale=es_LA" target='_blank'><BsFacebook></BsFacebook></Link>
                    <Link to="https://instagram.com/dlogosperu?igshid=NTc4MTIwNjQ2YQ==" target='_blank'><BsInstagram></BsInstagram></Link>
                    <Link to="https://api.whatsapp.com/send/?phone=%2B51993765495&text&type=phone_number&app_absent=0" target='_blank'><BsWhatsapp></BsWhatsapp></Link>
                    <Link to="https://www.tiktok.com/@logos_peru" target='_blank'><BsTiktok></BsTiktok></Link>
                </div>
            </div>
        </div>
  )
}
