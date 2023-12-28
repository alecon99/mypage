import { useContext } from 'react'

import { Container } from 'react-bootstrap'

import '../NavigationBar/NavigationBar.css'

import logo from '../../media/ac.png'

import { ChooseLanguageProvider } from '../../Context/ChooseLanguageContext';

import { NavigationBarLinks } from "../../data/NavigationBarLinks";
import OffcanvasMenu from './OffcanvasMenu/OffcanvasMenu';

const NavigationBar = () => {

    const { language, setLanguage } = useContext(ChooseLanguageProvider);

    const selectLanguage = () => {
        if (language === "IT") {
            setLanguage("EN")
        } else {
            setLanguage("IT")
        }
    }

    return (
        <div className='bg-black fixed-top'>
            <Container className='d-flex py-3 align-items-center justify-content-between text-white'>
                <a href="#">
                    <img className='logo-small' src={logo} alt="logo Ac" />
                </a>
                <div className='d-flex align-items-center fs-5'>
                    <div className='d-none d-sm-block'>
                        {NavigationBarLinks.map((link) => {
                            return (
                                <a key={link.id} href={link.href} className='text-decoration-none text-white hover_orange mx-2'>
                                    {language === "EN" ?
                                        `${link.EN.title}`
                                        :
                                        `${link.IT.title}`
                                    }
                                </a>
                            )
                        })}
                    </div>
                    <button id='language_btn' onClick={selectLanguage} className='fs-6 rounded border-0 text-decoration-none bg_orange text-dark mx-2'>
                        {language === "EN" ?
                            "IT"
                            :
                            "EN"
                        }
                    </button>
                    <div className='d-sm-none'>
                        <OffcanvasMenu />
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default NavigationBar