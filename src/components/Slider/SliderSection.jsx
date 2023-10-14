import React from 'react'
import Slider from 'react-infinite-logo-slider'

import bootstrap_logo from '../../media/logos/Bootstrap_logo.png'
import css_logo from '../../media/logos/Css_logo.png'

const SliderSection = () => {
  return (
    <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="{bootstrap_logo}" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="{css_logo}" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any3.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <div>
                    Other component...
                </div>
            </Slider.Slide>
        </Slider>
  )
}

export default SliderSection