import Link from 'next/link'
import React from 'react'

const DesktopDropDown = () => {
  return (
    <div className='w-56 flex flex-col gap-2'>
      <div className='desktop-dropdown'>
        <Link href={"/aboutus"}>
          
          <span>About Us</span>
        </Link>
      </div>
      <div className='desktop-dropdown'>
        <Link href={"/privacypolicy"}>Privacy Policies</Link>
      </div>
      <div className='desktop-dropdown'>
        <Link href={"/terms"}>Terms & Conditions</Link>
      </div>
      <div className='desktop-dropdown'>
        <Link href={"/returnpolicy"}>Return & Refund Policy</Link>
      </div>
      <div className='desktop-dropdown'>
        <Link href={"/"}>Contact Us</Link>
      </div>
      <div className='desktop-dropdown' >
        <Link href={"/"}>Career</Link>
      </div>
      <div className='desktop-dropdown'>
        <Link href={"/"}>FAQ</Link>
      </div>
    </div>
  )
}

export default DesktopDropDown
