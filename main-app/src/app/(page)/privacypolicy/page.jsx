import Image from 'next/image'
import React from 'react'
import PrivacyPolicyBanner from '../../../../public/PrivacyPolicy.png'

const PrivacyPolicies = () => {
  return (
    <div className='container'>
      <div>
        <Image src={PrivacyPolicyBanner} alt='PrivacyPolicies banner' priority />
      </div>
    </div>
  )
}

export default PrivacyPolicies
