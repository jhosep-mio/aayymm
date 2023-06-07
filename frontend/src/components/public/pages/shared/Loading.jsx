import React from 'react';
import logo from './../../../../assets/public/img/logo/logo-ico.png'


const Loading = () => {
  return (
    <div className="loading-success">
        <div className='loading-success-content'>
            <img src={logo} alt="" />
            <div className='loading-success-content-giro'></div>
        </div>
    </div>
  )
}

export default Loading