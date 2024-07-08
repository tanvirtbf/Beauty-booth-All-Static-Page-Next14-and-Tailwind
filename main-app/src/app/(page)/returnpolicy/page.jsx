import Image from 'next/image'
import React from 'react'
import ReturnPolicyBanner from '../../../../public/ReturnPolicy.png'

const ReturnPolicy = () => {
  return (
    <div className='container'>
      <div>
        <Image src={ReturnPolicyBanner} alt='Return Policy Banner' priority />
      </div>
    </div>
  )
}

export default ReturnPolicy
