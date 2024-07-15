"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Arrow from "../../public/Arrow.png";
import AboutusIcon from "../../public/aboutusIcon.png";
import CareerIcon from "../../public/careerIcon.png";
import ContactIcon from "../../public/contactusIcon.png";
import FaqIcon from "../../public/faqIcon.png";
import PrivacyIcon from "../../public/privacypolicyIcon.png";
import ReturnIcon from "../../public/returnIcon.png";
import TermsIcon from "../../public/termsIcon.png";

const FinalDropDown = () => {
  const [isClick, setIsClick] = useState(true);
  const [selected, setSelected] = useState("Select");

  const options = [
    { id: 1, text: "About Us", href: "aboutus", icon: AboutusIcon },
    {
      id: 2,
      text: "Privacy Policies",
      href: "privacypolicy",
      icon: PrivacyIcon,
    },
    { id: 3, text: "Terms & Conditions", href: "terms", icon: TermsIcon },
    {
      id: 4,
      text: "Return & Refund Policy",
      href: "returnpolicy",
      icon: ReturnIcon,
    },
    { id: 5, text: "Contact Us", href: "/", icon: ContactIcon },
    { id: 6, text: "Career", href: "/", icon: CareerIcon },
    { id: 7, text: "FAQ", href: "/", icon: FaqIcon },
  ];

  const handleClick = (e) => {
    setIsClick(!isClick);
  };
  return (
    <div className="w-full sm:w-56 h-fit pt-1 px-0 pb-2 shadow-xx rounded-lg border order-1 sm:order-2">
      <div className="w-full px-2 flex flex-col gap-2 relative">
        <div
          className={`absolute top-2 right-2 ${
            isClick ? "rotate-0" : "rotate-180"
          } cursor-pointer`}
          onClick={handleClick}
        >
          <Image src={Arrow} />
        </div>
        <div className="text-sm w-full h-9 flex items-center">{selected}</div>
        {isClick &&
          options.map(({ id, text, href, icon }) => (
            <Link
              key={id}
              href={href}
              className="text-sm w-full h-9 flex items-center dropgap"
            >
              <Image src={icon} />
              <span>{text}</span>
            </Link>
          ))}

        {/* <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={AboutusIcon} />
          <span>About Us</span>
        </div>
        <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={PrivacyIcon} />
          <span>Privacy Policy</span>
        </div>
        <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={TermsIcon} />
          <span>Terms & Conditions</span>
        </div>
        <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={ReturnIcon} />
          <span>Return & Refund Policy</span>
        </div>
        <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={ContactIcon} />
          <span>Contact Us</span>
        </div>
        <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={CareerIcon} />
          <span>Career</span>
        </div>
        <div className="text-sm w-full h-9 flex items-center dropgap">
          <Image src={FaqIcon} />
          <span>FAQ</span>
        </div> */}
      </div>
    </div>
  );
};

export default FinalDropDown;
