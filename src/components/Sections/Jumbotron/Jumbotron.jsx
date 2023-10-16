import React from 'react'

import './Jumbotron.css'

import photo from '../../../media/photo.png'

import { Col, Row } from 'react-bootstrap'

const Jumbotron = () => {
    return (
        <div className='d-flex justify-content-center' >
            <Row id='jumbotron_container'>
                <Col id='jumbotron_name' className='d-flex justify-content-center align-items-center me-md-5'>
                    <div id='container_name' className='text-start'>
                        <div className='typed-out_1'>{' < Hello'}</div>
                        <div className='typed-out_2'>I'm Alessio</div>
                        <div className='typed-out_3'>{'Conte />'}</div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center pt-3 pt-lg-0' >
                    <div id='container_photo'>
                        <img id='jumbotron_photo' src={photo} alt="" />
                        <div id='jumbotron_photo_background'></div>
                    </div>
                </Col>
            </Row>
            <a name='about'></a>
        </div>

    )
}

export default Jumbotron