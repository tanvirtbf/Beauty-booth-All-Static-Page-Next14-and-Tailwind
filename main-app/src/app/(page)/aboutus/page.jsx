import Image from 'next/image'
import React from 'react'
import AboutUsBanner from '../../../../public/AboutUsBanner.png'

const AboutUs = () => {
  return (
    <div className='container'>
      <div>
        <Image src={AboutUsBanner} alt='About us Banner' priority />
      </div>
    </div>
  )
}

export default AboutUs
