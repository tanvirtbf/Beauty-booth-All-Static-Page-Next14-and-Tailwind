import Image from 'next/image'
import React from 'react'
import TermsBanner from '../../../../public/Terms.png'

const Terms = () => {
  return (
    <div className='container'>
      <div>
        <Image src={TermsBanner} alt='terms banner' priority />
      </div>
    </div>
  )
}

export default Terms
