import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavigationBarLinks } from "../../../data/NavigationBarLinks";

import { ChooseLanguageProvider } from '../../../Context/ChooseLanguageContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../media/ac.png'

const OffcanvasMenu = () => {

    const { language, setLanguage } = useContext(ChooseLanguageProvider);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow} className='fs-1 mx-2'>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='end' className='bg-black'>
                <Offcanvas.Header className='text-white border-bottom'>
                    <Offcanvas.Title>MENU</Offcanvas.Title>
                    <FontAwesomeIcon icon={faX} onClick={handleClose} />
                </Offcanvas.Header>
                <Offcanvas.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        {NavigationBarLinks.map((link) => {
                            return (
                                <a key={link.id} href={link.href} onClick={handleClose} className='text-decoration-none text-white hover_orange d-block text-center m-2 fs-1'>
                                    {language === "EN" ?
                                        `${link.EN.title}`
                                        :
                                        `${link.IT.title}`
                                    }
                                </a>
                            )
                        })}
                    </div>
                    <div className='text-center  py-2 d-flex justify-content-center align-items-center'>
                        <img className='logo_xsmall' src={logo} alt="logo Ac" />
                        <div className='text-white ms-2'>Alessio Conte</div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffcanvasMenu