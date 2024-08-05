"use client"
import WebBanner from '../../../../public/contactusWebBanner.png'
import MobileBanner from '../../../../public/contactusMobileBanner.png'
import Image from 'next/image';
import FinalDropDown from '@/components/FinalDropDown';
import WebMobileIcon from '../../../../public/WebMobileIcon.svg'
import WebWhatsappIcon from '../../../../public/WebWhatsappIcon.svg'
import WebStoreIcon from '../../../../public/WebStoreIcon.svg'
import MobileMobileIcon from '../../../../public/MobileMobileIcon.svg'
import MobileWhatsappIcon from '../../../../public/MobileWhatsappIcon.svg'
import MobileStoreIcon from '../../../../public/MobileStoreIcon.svg'


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
        <div className='w-full sm:w-3/4 order-3'>

          <div className='w-full grid grid-cols-12 gap-3 sm:gap-5'>
            <div className='grid col-span-12 sm:col-span-4'>

            </div>
            <div className='grid col-span-12 sm:col-span-4'></div>
            <div className='grid col-span-12 sm:col-span-4'></div>
          </div>

          <div></div>

          <div></div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
