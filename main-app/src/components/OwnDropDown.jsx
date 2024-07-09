"use client";
import { useState } from "react";

const OwnDropDown = ({ selected, setSelected }) => {
  const [isClick, setIsClick] = useState(false);
  const options = ["About Us", "Privacy Policies", "Terms & Conditions", "Return & Refund Policy","Contact Us","Career","FAQ"];
  return (
    <div className="container sm:hidden">
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsClick(!isClick)}>
          {selected}
        </div>
        {isClick && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option)
                  setIsClick(false)
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnDropDown;
