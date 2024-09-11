"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "../../public/Arrow.png";
import AboutusIcon from "../../public/aboutusIcon.png";
import CareerIcon from "../../public/careerIcon.png";
import ContactIcon from "../../public/contactusIcon.png";
import FaqIcon from "../../public/faqIcon.png";
import PrivacyIcon from "../../public/privacypolicyIcon.png";
import ReturnIcon from "../../public/returnIcon.png";
import TermsIcon from "../../public/termsIcon.png";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const FinalDropDown = () => {
  const [divId, setDivId] = useState(0);
  const [isPc,setIsPc] = useState(false)
  const [isClick, setIsClick] = useState(true);
  const [selected, setSelected] = useState("Select");
  // console.log(isClick)
  let router = useRouter();
  let path = usePathname();
  console.log(path)
  useEffect(()=>{
    if(window.innerWidth < 991){
      setIsClick(false)
    }
  },[])

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
    { id: 5, text: "Contact Us", href: "contactus", icon: ContactIcon },
    { id: 6, text: "Career", href: "career", icon: CareerIcon },
    { id: 7, text: "FAQ", href: "faq", icon: FaqIcon },
  ];

  return (
    <div className="w-full lg:w-56 h-fit pt-1 px-0 pb-2 shadow-xx sm:shadow-none rounded-lg order-1 sm:order-2">
      <div className="w-full flex flex-col relative">
        <div
          className={`absolute top-2 right-2 ${
            isClick ? "rotate-0" : "rotate-180"
          } cursor-pointer lg:hidden`}
          onClick={() => setIsClick(c => !c)}
        >
          <Image src={Arrow} alt={Arrow} />
        </div>
        <div className={`text-sm font-normal text-[#5A5A5A] px-2 w-full h-9 flex items-center lg:hidden ${isClick ? 'mb-2': ''}`}>{
          options.find((opt)=> path.split('/')[1] == opt.href).text
        }</div>
        <div className="flex flex-col gap-2">
          {isClick &&
            options.map(({ id, text, href, icon }) => (
              <Link
                key={id}
                href={href}
                className={`text-sm px-2 w-full h-9 flex items-center cursor-pointer dropgap ${
                  path.split('/')[1]==href? "dropBg" : ""
                }`}
              >
                <Image src={icon} alt={icon} />
                <span className={`text-[#5A5A5A] text-sm font-normal`}>
                  {text}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FinalDropDown;
