import Link from 'next/link'
import React from 'react'

const DesktopDropDown = () => {
  return (
    <div className='w-56'>
      <div>
        <Link href={"/aboutus"}>About Us</Link>
      </div>
      <div>
        <Link href={"/privacypolicy"}>Privacy Policies</Link>
      </div>
      <div>
        <Link href={"/terms"}>Terms & Conditions</Link>
      </div>
      <div>
        <Link href={"/returnpolicy"}>Return & Refund Policy</Link>
      </div>
      <div>
        <Link href={"/"}>Contact Us</Link>
      </div>
      <div>
        <Link href={"/"}>Career</Link>
      </div>
      <div>
        <Link href={"/"}>FAQ</Link>
      </div>
    </div>
  )
}

export default DesktopDropDown
