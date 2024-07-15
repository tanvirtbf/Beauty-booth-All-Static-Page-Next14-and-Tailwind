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
  const [divId, setDivId] = useState(0);
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

  const handleLinkClick = (id, text) => {
    setSelected(text);
    setDivId(id);
    setIsClick(!isClick)
  };
  return (
    <div className="w-full sm:w-56 h-fit pt-1 px-0 pb-2 shadow-xx rounded-lg order-1 sm:order-2">
      <div className="w-full flex flex-col gap-2 relative">
        <div
          className={`absolute top-2 right-2 ${
            isClick ? "rotate-0" : "rotate-180"
          } cursor-pointer`}
          onClick={()=> setIsClick(!isClick)}
        >
          <Image src={Arrow} alt={Arrow} />
        </div>
        <div className="text-sm px-2 w-full h-9 flex items-center">{`${isClick ? "Select" : selected}`}</div>
        {isClick &&
          options.map(({ id, text, href, icon }) => (
            <Link
              onClick={() => handleLinkClick(id, text)}
              key={id}
              href={href}
              className={`text-sm px-2 w-full h-9 flex items-center dropgap ${id === divId ? "dropBg" : ""}`}
            >
              <Image src={icon} alt={icon} />
              <span>{text}</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FinalDropDown;
