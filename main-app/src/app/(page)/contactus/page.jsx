"use client"
import WebBanner from '../../../../public/contactusWebBanner.png'
import MobileBanner from '../../../../public/contactusMobileBanner.png'
import Image from 'next/image';
import FinalDropDown from '@/components/FinalDropDown';
const Contactus = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-full flex flex-col gap-6 order-2 sm:order-1 mt-7 mb-6">
          <h1 className="staticHeading">Frequently Asked Questions</h1>
          <Image src={WebBanner} alt="Web Banner" priority className="w-full hidden sm:block" />
          <Image src={MobileBanner} alt="Mobile Banner" priority className="w-full block sm:hidden"/>
        </div>
        <FinalDropDown />
      </div>
    </div>
  );
};

export default Contactus;
