import React from 'react'

import Slider from 'react-infinite-logo-slider'

import bootstrap_logo from '../../../media/logos/Bootstrap_logo.png'
import css_logo from '../../../media/logos/Css_logo.png'
import html_logo from '../../../media/logos/HTML5_logo.png'
import javascript_logo from '../../../media/logos/JavaScript_logo.png'
import mongoDb_logo from '../../../media/logos//MongoDB_logo.png'
import nodeJs_logo from '../../../media/logos/NodeJS_logo.png'
import react_logo from '../../../media/logos/React_logo.png'

import './SliderSection.css'

const SliderSection = () => {
    return (
        <div id='slider_container'>
            <div className='fs-2 fw-bold text-center mb-4'>{'< My stack />'}</div>
            <Slider
                width="200px"
                duration={30}
                pauseOnHover={true}
                blurBorders={true}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={bootstrap_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>Bootstrap</div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={css_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>Css</div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={html_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>HTML</div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={javascript_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>Javascript</div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={mongoDb_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>MongoDb</div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={react_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>React</div>
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div className='text-center stack_icon_hover'>
                        <img src={nodeJs_logo} alt="any" className='w-36 stack_icon' />
                        <div className='mt-2'>Node js</div>
                    </div>
                </Slider.Slide>
            </Slider>
            <a name="portfolio" ></a>
        </div>
    )
}

export default SliderSection