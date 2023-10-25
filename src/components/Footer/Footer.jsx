import { useState, useEffect } from 'react'

import '../Footer/Footer.css'

import { ProgressBar } from 'react-bootstrap';

import logo from '../../media/ac.png'

const Footer = () => {

    const [ scroll, setScroll ] = useState(0)

    window.onscroll = ()=>myFunction()

    const myFunction = ()=> {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScroll(scrolled)
    }

    return (
        <div className='fixed-bottom bg-black'>
            <ProgressBar variant="warning" now={scroll} id='progressBar' className='bg-black' />
            <div className='text-center  py-2 d-flex justify-content-center align-items-center'>
                <img className='logo_xsmall' src={logo} alt="logo Ac" />
                <div className='text-white ms-2'>Alessio Conte</div>
            </div>
        </div>

    )
}

export default Footer