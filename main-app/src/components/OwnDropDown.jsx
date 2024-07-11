"use client";
import Link from "next/link";
import { useState } from "react";

const OwnDropDown = ({ selected, setSelected }) => {
  const [isClick, setIsClick] = useState(false);
  const options = [
    { text: "About Us", href: "aboutus" },
    { text: "Privacy Policies", href: "privacypolicy" },
    { text: "Terms & Conditions", href: "terms" },
    { text: "Return & Refund Policy", href: "returnpolicy" },
    { text: "Contact Us", href: "/" },
    { text: "Career", href: "/" },
    { text: "FAQ", href: "/" },
  ];
  return (
    <div className="container sm:hidden">
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsClick(!isClick)}>
          {selected}
        </div>
        {isClick && (
          <div className="dropdown-content">
            {options.map(({ text, href }) => (
              <div className="dropdown-item">
                <Link
                  href={`/${href}`}
                  onClick={(e) => {
                    setSelected(text);
                    setIsClick(false);
                  }}
                >
                  {text}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnDropDown;
