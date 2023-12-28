import { useContext } from 'react'

import { ChooseLanguageProvider } from '../../../Context/ChooseLanguageContext';

import './Jumbotron.css'

import myPhoto from '../../../media/myphoto.png'

const Jumbotron = () => {

    const { language } = useContext(ChooseLanguageProvider);

    return (
        <div className='d-flex justify-content-center' >
            <div id='jumbotron_container' className='text-center'>
                <div id='jumbotron_name' className='mb-4' >
                    {language === "EN" ?
                        <>
                            <div className='typed-out_1'>
                                {"< Hello I'm Alessio Conte />"}
                            </div>
                        </>
                        :
                        <>
                            <div className='typed-out_1'>
                                {' < Ciao sono Alessio Conte />'}
                            </div>
                        </>
                    }
                </div>
                <img id='my_photo' src={myPhoto} alt="My photo" />
            </div>
            <a name='about'></a>
        </div>
    )
}

export default Jumbotron