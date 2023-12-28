import { useContext, } from 'react'

import { Col, Row } from 'react-bootstrap'

import '../Portfolio/portfolio.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import NewLife from '../../../media/projects/NewLife.png'
import Weather from '../../../media/projects/Weather.png'
import MyPage from '../../../media/projects/Mypage.png'
import Default from '../../../media/projects/Default.png'

import { PortfolioProject } from '../../../data/PortfolioProject'

import { ChooseLanguageProvider } from '../../../Context/ChooseLanguageContext'

const Portfolio = () => {

    const { language } = useContext(ChooseLanguageProvider);

    return (
        <div className=' mb-5'>
            <div className='fs-2 fw-bold mb-4 text-center'>{'< Portfolio />'}</div>
            <Row>
                {PortfolioProject.map((project) => {

                    let image = "";

                    switch (project.img) {
                        case "NewLife":
                            image = NewLife
                            break;
                        case "Weather":
                            image = Weather
                            break;
                        case "MyPage":
                            image = MyPage
                            break;
                        default:
                            image = Default;
                    }
                    return (
                        <Col key={project.id} lg={4} md={6}>
                            <div className='card_container'>
                                <img
                                    className='img_portfolio'
                                    src={image}
                                    alt={project.title.EN}
                                />
                                <div className='link_portfolio d-flex'>
                                    <a className='text-white icon_link_porfolio' href={project.links.github.link}>
                                        <FontAwesomeIcon icon={faGithub}
                                            className={`${project.links.github.link ? null : "d-none"}`}
                                        />
                                    </a>
                                    <a className='text-white icon_link_porfolio' href={project.links.deploy.link}>
                                        <FontAwesomeIcon icon={faGlobe}
                                            className={`${project.links.deploy.link ? null : "d-none"}`}
                                        />
                                    </a>
                                    <a className='text-white icon_link_porfolio' href={project.links.youTube.link}>
                                        <FontAwesomeIcon icon={faYoutube}
                                            className={`${project.links.youTube.link ? null : "d-none"}`}
                                        />
                                    </a>
                                </div>
                                <div>
                                    {language === "EN" ?
                                        `${project.title.EN}`
                                        :
                                        `${project.title.IT}`
                                    }
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
            <a name="contacts"></a>
        </div>
    )
}

export default Portfolio