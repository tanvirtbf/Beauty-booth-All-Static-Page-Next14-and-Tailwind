"use client";
import FinalDropDown from "@/components/FinalDropDown";
import Image from "next/image";
import { useState } from "react";
import FaqWebBanner from "../../../../public/faqWebBanner.png";
import UserCircle from "../../../../public/user-cirlce-add 1.png";

const Faq = () => {
  const [isClick, setIsClick] = useState(1);
  console.log(isClick)
  const data = [
    {
      id: 1,
      text: "New Visitor",
    },
    {
      id: 2,
      text: "Account & Payment",
    },
    {
      id: 3,
      text: "Delivery & Return",
    },
    {
      id: 4,
      text: "Guest Checkout",
    },
    {
      id: 5,
      text: "Shopping",
    },
    {
      id: 6,
      text: "Promotions & Freebies",
    },
  ];
  return (
    <div className="container">
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-full flex flex-col gap-6 order-2 sm:order-1 mt-7 mb-6">
          <h1 className="staticHeading">Frequently Asked Questions</h1>
          <Image src={FaqWebBanner} alt="faq Banner" priority />
        </div>
        <FinalDropDown />
        <div className="w-full sm:w-3/4 order-3">
          <div className="grid gap-3 sm:gap-6 grid-cols-12">
            {data.map(({ id, text }) => (
              <div
                onClick={()=> setIsClick(id)}
                key={id}
                className={`px-5 py-6 rounded-lg border ${isClick===id ? 'border-black' : 'border-[#ECECEE]'} sm:col-span-4 col-span-6 flex gap-4 justify-start items-center cursor-pointer`}
              >
                <Image src={UserCircle} alt={text} priority />
                <p className={`text-xs sm:text-sm ${isClick===id ? 'font-medium' : 'font-normal'} text-[#222222]`}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// border: 1px solid #000000
export default Faq;
