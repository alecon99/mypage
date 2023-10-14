import React from 'react'

import '../Jumbotron/Jumbotron.css'

import photo from '../../media/photo.png'
import { Col, Row } from 'react-bootstrap'

const Jumbotron = () => {
    return (
        <Row className=''>
            <Col id='jumbotron_name' className='d-flex justify-content-center align-items-center'>
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
    )
}

export default Jumbotron