import { useContext } from 'react'

import '../Contacts/Contacts.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import email from '../../../media/email.gif'

import { ChooseLanguageProvider } from '../../../Context/ChooseLanguageContext'

const Contacts = () => {

  const { language } = useContext(ChooseLanguageProvider);

  return (
    <div id='contacts_container' className='text-center mb-5'>
      <div className='fs-2 fw-bold mb-4'>
        {language === "EN" ?
          <>
            {'< Contacts />'}
          </>
          :
          <>
            {'< Contatti />'}
          </>
        }
      </div>
      <div className='mx-5 '>
        <div>
          <div className='fs-4 mb-5'>
            {language === "EN" ?
              <>
                If you like what I do, contact me!
              </>
              :
              <>
                Se ti piace quello che faccio, contattami!
              </>
            }
          </div>
          <img src={email} alt="" />
        </div>
        <div className='d-flex justify-content-around flex-wrap mt-5'>
          <a className='hover_orange contact_link btn btn-dark d-flex align-items-center justify-content-center' href="mailto:alessio.conte.dev@gmail.com?">
            <div>Email</div>
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </a>
          <a className='hover_orange contact_link btn btn-dark d-flex align-items-center justify-content-center' href="tel:+393331313371">
            <div>Phone</div>
            <FontAwesomeIcon className='ms-2' icon={faPhone} />
          </a>
          <a className='hover_orange contact_link btn btn-dark d-flex align-items-center justify-content-center' target='_blank' href="https://wa.me/+393331313371">
            <div>Whatsapp</div>
            <FontAwesomeIcon className='ms-2' icon={faWhatsapp} />
          </a>
          <a className='hover_orange contact_link btn btn-dark text-decoration-none d-flex align-items-center justify-content-center' target='_blank' href="https://www.linkedin.com/in/alessio-conte-143149271/">
            <div>Linkedin</div>
            <FontAwesomeIcon className='ms-2' icon={faLinkedin} />
          </a>
          <a className='hover_orange contact_link btn btn-dark text-decoration-none d-flex align-items-center justify-content-center' target='_blank' href="https://github.com/alecon99">
            <div>GitHub</div>
            <FontAwesomeIcon className='ms-2' icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts