import React from 'react'

import { Col, Row } from 'react-bootstrap'

import '../Portfolio/portfolio.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import NewLife from '../../../media/projects/NewLife.png'
import Weather from '../../../media/projects/Weather.png'

const Portfolio = () => {
    return (
        <div className=' mb-5'>

            <div className='fs-2 fw-bold mb-4 text-center'>{'< Portfolio />'}</div>
            <Row>
                <Col lg={4} md={6} >
                    <div className='card_container'>
                        <img className='img_portfolio' src={NewLife} alt="" />
                        <div className='link_portfolio d-flex'>
                            <a className='text-white icon_link_porfolio' href="https://github.com/alecon99/ecommerce-NewLife.fe">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className='text-white icon_link_porfolio' href="https://master--newlifeproject.netlify.app">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                            <a className='text-white icon_link_porfolio' href="https://www.youtube.com/watch?v=gewN8SExXkw&ab_channel=AlessioConte">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                        <div>Ecommerce project</div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='card_container'>
                        <img className='img_portfolio' src={Weather} alt="" />
                        <div className='link_portfolio d-flex'>
                            <a className='text-white icon_link_porfolio' href="https://github.com/alecon99/WeatherProject">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <div>Weather project</div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='card_container'>
                        <img className='img_portfolio' src="https://dingolab.com/wp-content/uploads/2019/05/Caratteristiche-sito-web-aziendale-efficace.png" alt="" />
                        <a className='text-white icon_link_porfolio' href="https://github.com/alecon99/mypage">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <div>My page project</div>
                    </div>
                </Col>
            </Row>
            <a name="contacts"></a>
        </div>
    )
}

export default Portfolio