import { useContext } from 'react'

import { Button } from 'react-bootstrap';

import curriculum from '../../../media/Alessio Conte.pdf'

import { ChooseLanguageProvider } from '../../../Context/ChooseLanguageContext';

const AboutMe = () => {

  const { language } = useContext(ChooseLanguageProvider);

  const openCurriculum = () => {
    window.open(`${curriculum}`, '_blank');
  }

  return (
    <div className='text-center'>
      <div className='fs-2 fw-bold mb-4'>
        {language === "EN" ?
          <>
            {'< About Me />'}
          </>
          :
          <>
            {'< Informazioni />'}
          </>
        }
      </div>
      <div className='fs-4 mx-3 mx-md-5 mb-3'>
        {language === "EN" ?
          <div>
            In my working life I have always tried to challenge myself and improve myself.
            I am currently dedicating myself to programming, which has always been a passion of mine that I wanted to turn into a job.
          </div>
          :
          <div>
            Nella mia vita lavorativa ho sempre cercato di mettermi in gioco e migliorarmi.
            Attualmente mi sto dedicando alla programmazione, da sempre una mia passione che ho voluto trasformare in lavoro.
          </div>
        }
      </div>
      <div>
        <Button variant='dark' className='hover_orange' onClick={openCurriculum} download="curriculum">Curriculum</Button>
      </div>
    </div>
  )
}

export default AboutMe