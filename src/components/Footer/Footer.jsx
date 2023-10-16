import React from 'react'

import logo from '../../media/ac.png'

const Footer = () => {
    return (
        <div className='text-center fixed-bottom bg-black py-2 d-flex justify-content-center align-items-center'>
            <img className='logo_xsmall' src={logo} alt="logo Ac" />
            <div className='text-white ms-2'>Alessio Conte</div>
        </div>
    )
}

export default Footer