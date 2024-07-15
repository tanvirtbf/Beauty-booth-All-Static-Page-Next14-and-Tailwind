"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Arrow from '../../public/Arrow.png'
import AboutusIcon from "../../public/aboutusIcon.png";
import CareerIcon from "../../public/careerIcon.png";
import ContactIcon from "../../public/contactusIcon.png";
import FaqIcon from "../../public/faqIcon.png";
import PrivacyIcon from "../../public/privacypolicyIcon.png";
import ReturnIcon from "../../public/returnIcon.png";
import TermsIcon from "../../public/termsIcon.png";

const FinalDropDown = () => {
  const [isClick,setIsClick] = useState(false)
  return (
    <div className='w-full sm:w-80 pt-1 px-0 pb-2 shadow-xx rounded-lg border'>
      <div className='w-full px-2 flex flex-col gap-2 relative'>
        <div className={`absolute top-2 right-2 ${isClick ? 'rotate-0' : 'rotate-180'}`}>
          <Image src={Arrow}/>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Select
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          About Us
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Privacy Policy
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Terms & Conditions
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Return & Refund Policy
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Contact Us
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Career
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          FAQ
        </div>
      </div>
    </div>
  )
}

export default FinalDropDown
