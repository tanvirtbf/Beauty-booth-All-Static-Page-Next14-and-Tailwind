"use client";
import FinalDropDown from "@/components/FinalDropDown";
import Image from "next/image";
import MobileBanner from "../../../../public/contactusMobileBanner.png";
import WebBanner from "../../../../public/contactusWebBanner.png";
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
          <Image
            src={WebBanner}
            alt="Web Banner"
            priority
            className="w-full hidden sm:block"
          />
          <Image
            src={MobileBanner}
            alt="Mobile Banner"
            priority
            className="w-full block sm:hidden"
          />
        </div>
        <FinalDropDown />
        <div className="w-full sm:w-3/4 order-3">
          <div className="threeSection w-full grid grid-cols-12 gap-3 sm:gap-5">
            <div className="grid col-span-12 sm:col-span-4">
              <div className="flex gap-4 sm:gap-5 border border-[#DDDDDD] rounded-lg sm:rounded-xl px-5 sm:px-8 py-4 sm:py-6">
                <div>
                  <Image src={WebMobileIcon} alt="Web Mobile Icon" className="hidden sm:block w-12"/>
                  <Image src={MobileMobileIcon} alt="Mobile Mobile Icon" className="block sm:hidden"/>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="font-medium text-sm sm:text-base text-black">Call Us</h3>
                  <p className="font-normal text-[10px] sm:text-xs text-[#717171]">We are available 10am-6pm. You can call our customer service</p>
                </div>
              </div>
            </div>
            <div className="grid col-span-12 sm:col-span-4">
              <div className="flex gap-4 sm:gap-5 border border-[#DDDDDD] rounded-lg sm:rounded-xl px-5 sm:px-8 py-4 sm:py-6">
                <div>
                  <Image src={WebWhatsappIcon} alt="Web Whatsapp Icon" className="hidden sm:block w-12"/>
                  <Image src={MobileWhatsappIcon} alt="Mobile Whatsapp Icon" className="block sm:hidden"/>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="font-medium text-sm sm:text-base text-black">Chat on WhatsApp</h3>
                  <p className="font-normal text-[10px] sm:text-xs text-[#717171]">Get instant reply from us. Typically reply less than 30 mins</p>
                </div>
              </div>
            </div>
            <div className="grid col-span-12 sm:col-span-4">
              <div className="flex gap-4 sm:gap-5 border border-[#DDDDDD] rounded-lg sm:rounded-xl px-5 sm:px-8 py-4 sm:py-6">
                <div>
                  <Image src={WebStoreIcon} alt="Web Store Icon" className="hidden sm:block w-12"/>
                  <Image src={MobileStoreIcon} alt="Mobile Store Icon" className="block sm:hidden"/>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="font-medium text-sm sm:text-base text-black">Visit Our Store</h3>
                  <p className="font-normal text-[10px] sm:text-xs text-[#717171]">We are available 10am-6pm. You can visit out physical store in this time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form mt-7 sm:mt-9 mb-10 sm:mb-16">
            <h2 className="font-medium text-base sm:text-xl text-center text-black">Mail us your Query</h2>
            <form action="">
              
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
