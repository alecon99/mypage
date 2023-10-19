import React from 'react'

import { Container } from 'react-bootstrap'

import logo from '../../media/ac.png'

const NavigationBar = () => {
    return (
        <div className='bg-black fixed-top'>
            <Container className='d-flex py-3 align-items-center justify-content-between text-white'>
                <a href="#">
                    <img className='logo-small' src={logo} alt="logo Ac" />
                </a>
                <div className='d-flex'>
                    <a href='#about' className='text-decoration-none text-white hover_orange'>About</a>
                    <a href='#portfolio' className='text-decoration-none text-white mx-5 hover_orange'>Portfolio</a>
                    <a href='#contacts' className='text-decoration-none text-white hover_orange'>Contacts</a>
                </div>
            </Container>
        </div>

    )
}

export default NavigationBar