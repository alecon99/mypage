import React from 'react'

import '../Main/Main.css'
import Jumbotron from '../Jumbotron/Jumbotron'
import { Container } from 'react-bootstrap'

const Main = () => {
    return (
        <Container id='jumbotron_background' className='bg-white rounded-4 p-5'>
            <Jumbotron />
        </Container>
    )
}

export default Main