"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Arrow from '../../public/Arrow.png'

const OwnDropDown = () => {
  const [isClick,setIsClick] = useState();
  return (
    <div className='px-[16px] sm:px-[60px] max-w-[1320px] mx-auto relative'>
      <div className='absolute top-2 right-5'>
        <Image src={Arrow} alt='arrow'/>
      </div>
      <div>
        <Link></Link>
      </div>
      <ul className=''>
        <li>
          <Link href={"/aboutus"}>About Us</Link>
        </li>
        <li>
          <Link href={"/privacypolicy"}>Privacy Policies</Link>
        </li>
        <li>
          <Link href={"/terms"}>Terms & Conditions</Link>
        </li>
        <li>
          <Link href={"/returnpolicy"}>Return & Refund Policy</Link>
        </li>
        <li>
          <Link href={"/terms"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/terms"}>Career</Link>
        </li>
        <li>
          <Link href={"/terms"}>FAQ</Link>
        </li>
      </ul>
    </div>
  )
}

export default OwnDropDown
