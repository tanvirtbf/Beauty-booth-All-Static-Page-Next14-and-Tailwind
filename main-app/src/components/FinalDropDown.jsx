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
        <div className={`absolute top-2 right-2 ${isClick ? 'rotate-0' : 'rotate-180'} cursor-pointer`}>
          <Image src={Arrow}/>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          Select
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={AboutusIcon}/>
          <span>About Us</span>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={PrivacyIcon}/>
          <span>Privacy Policy</span>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={TermsIcon}/>
          <span>Terms & Conditions</span>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={ReturnIcon}/>
          <span>Return & Refund Policy</span>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={ContactIcon}/>
          <span>Contact Us</span>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={CareerIcon}/>
          <span>Career</span>
        </div>
        <div className='text-sm border w-full h-9 flex items-center'>
          <Image src={FaqIcon}/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default FinalDropDown
