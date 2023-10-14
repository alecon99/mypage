import React from 'react'
import logo from '../../media/ac.png'
import '../NavigationBar/NavigationBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Container } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div className='bg-black fixed-top'>
            <Container className='d-flex p-3 align-items-center justify-content-between text-white'>
                <img className='logo-small' src={logo} alt="logo Ac" />
                <div className='d-flex'>
                    <div className='hover_orange'>About</div>
                    <div className='mx-5 hover_orange'>Portfolio</div>
                    <div className='hover_orange'>Contact</div>
                </div>
                <div className='d-none d-sm-block'>
                    <a className='contact_icon me-3 hover_orange' href="https://www.linkedin.com/in/alessio-conte-143149271/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className='contact_icon hover_orange' href="https://github.com/alecon99">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </Container>
        </div>

    )
}

export default NavigationBar