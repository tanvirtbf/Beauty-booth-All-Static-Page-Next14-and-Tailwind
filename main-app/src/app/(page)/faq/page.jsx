"use client";
import FinalDropDown from "@/components/FinalDropDown";
import Image from "next/image";
import { useState } from "react";
import Plus from "../../../../public/AccordianPlus.svg";
import FaqWebBanner from "../../../../public/faqWebBanner.png";
import UserCircle from "../../../../public/user-cirlce-add 1.png";

const Faq = () => {
  const [isClick, setIsClick] = useState(1);
  console.log(isClick);
  const data = [
    {
      id: 1,
      text: "New Visitor",
      question: [
        {
          id: 1,
          ques: "What Is A Newsletter?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 2,
          ques: "How do I register to be a Beauty Booth member?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 3,
          ques: "Why Should I Register?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
      ],
    },
    {
      id: 2,
      text: "Account & Payment",
      question: [
        {
          id: 1,
          ques: "What Is A Newsletter?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 2,
          ques: "How do I register to be a Beauty Booth member?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 3,
          ques: "Why Should I Register?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
      ],
    },
    {
      id: 3,
      text: "Delivery & Return",
      question: [
        {
          id: 1,
          ques: "What Is A Newsletter?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 2,
          ques: "How do I register to be a Beauty Booth member?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 3,
          ques: "Why Should I Register?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
      ],
    },
    {
      id: 4,
      text: "Guest Checkout",
      question: [
        {
          id: 1,
          ques: "What Is A Newsletter?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 2,
          ques: "How do I register to be a Beauty Booth member?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 3,
          ques: "Why Should I Register?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
      ],
    },
    {
      id: 5,
      text: "Shopping",
      question: [
        {
          id: 1,
          ques: "What Is A Newsletter?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 2,
          ques: "How do I register to be a Beauty Booth member?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 3,
          ques: "Why Should I Register?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
      ],
    },
    {
      id: 6,
      text: "Promotions & Freebies",
      question: [
        {
          id: 1,
          ques: "What Is A Newsletter?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 2,
          ques: "How do I register to be a Beauty Booth member?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
        {
          id: 3,
          ques: "Why Should I Register?",
          desc: "If you want to get updated about the latest products, promotions and sales, you may subscribe to our newsletter. You will find the newsletter at the bottom of our website. Enter your email address to get notifications. Beauty Booth Newsletters are free and will be sent to your designated email address. Please add our domain addresses (info@beautyboothqa.com) to your allowed list of senders, to ensure receipt of our emails.",
        },
      ],
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
        <div className="w-full sm:w-3/4 order-3 flex flex-col gap-6">
          <div className="grid gap-3 sm:gap-6 grid-cols-12">
            {data.map(({ id, text }) => (
              <div
                onClick={() => setIsClick(id)}
                key={id}
                className={`px-5 py-6 rounded-lg border ${
                  isClick === id ? "border-black" : "border-[#ECECEE]"
                } sm:col-span-4 col-span-6 flex gap-4 justify-start items-center cursor-pointer`}
              >
                <Image src={UserCircle} alt={text} priority />
                <p
                  className={`text-xs sm:text-sm ${
                    isClick === id ? "font-medium" : "font-normal"
                  } text-[#222222]`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div>
            <div className="TOTAL-QUESTION w-full">
              <div className="HEADING pt-9 pb-4 px-3">
                <h2 className="text-lg sm:text-2xl font-bold text-black">
                  New Visitor
                </h2>
              </div>
              <div className="QUESTION flex flex-col gap-3 px-3 py-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-normal text-sm sm:text-base text-black">
                    What Is A Newsletter?
                  </h3>
                  <div className="w-8 h-8 flex justify-center items-center bg-[#F6F8FA] rounded-full cursor-pointer">
                    <Image src={Plus} />
                  </div>
                </div>
                <div className="font-normal text-xs sm:text-sm text-[#5A5A5A]">
                  If you want to get updated about the latest products,
                  promotions and sales, you may subscribe to our newsletter. You
                  will find the newsletter at the bottom of our website. Enter
                  your email address to get notifications. Beauty Booth
                  Newsletters are free and will be sent to your designated email
                  address. Please add our domain addresses
                  (info@beautyboothqa.com) to your allowed list of senders, to
                  ensure receipt of our emails.
                </div>
                <div className="w-full h-[1px] bg-[#ECECEE]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
