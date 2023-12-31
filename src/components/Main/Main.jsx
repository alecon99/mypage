import React from 'react'

import { Container } from 'react-bootstrap'

import '../Main/Main.css'

import Jumbotron from '../Sections/Jumbotron/Jumbotron'
import Stack from '../Sections/Stack/Stack'
import AboutMe from '../Sections/AboutMe/AboutMe'
import Portfolio from '../Sections/Portfolio/Portfolio'
import Contacts from '../Sections/Contacts/Contacts'

const Main = () => {
    return (
        <Container id='jumbotron_background' className='bg-white rounded-4'>
            <Jumbotron />
            <AboutMe/>
            <Stack/>
            <Portfolio/>
            <Contacts/>
        </Container>
    )
}

export default Main