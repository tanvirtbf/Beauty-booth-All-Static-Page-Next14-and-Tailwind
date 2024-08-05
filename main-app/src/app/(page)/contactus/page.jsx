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
          <div className="w-full grid grid-cols-12 gap-3 sm:gap-5">
            <div className="grid col-span-12 sm:col-span-4">
              <div className="flex gap-4 sm:gap-5 border border-[#DDDDDD] rounded-lg sm:rounded-xl px-5 sm:px-8 py-4 sm:py-6">
                <div className="icon">
                  <Image src={WebMobileIcon} alt="Web Mobile Icon"/>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="font-medium text-sm sm:text-base text-black">Call Us</h3>
                  <p className="font-normal text-[10px] sm:text-xs text-[#717171]">We are available 10am-6pm. You can call our customer service</p>
                </div>
              </div>
            </div>
          </div>

          <div></div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
