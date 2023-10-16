import React from 'react'

import { Button } from 'react-bootstrap';

import curriculum from '../../../media/Alessio Conte.pdf'

const AboutMe = () => {

  const openCurriculum = () => {
    window.open(`${curriculum}`, '_blank');
  }

  return (
    <div className='text-center'>
      <div className='fs-2 fw-bold mb-4'>{'< About Me />'}</div>
      <div className='fs-4 mx-3 mx-md-5 mb-3'>
        Nella mia vita lavorativa ho sempre cercato di mettermi in gioco e migliorarmi.
        Attualmente mi sto dedicando alla programmazione, da sempre una mia passione che ho voluto trasformare in lavoro.
      </div>
      <div>
        <Button variant='dark' className='hover_orange' onClick={openCurriculum} download="curriculum">Curriculum</Button>
      </div>
    </div>
  )
}

export default AboutMe