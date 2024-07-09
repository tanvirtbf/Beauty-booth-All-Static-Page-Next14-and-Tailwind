"use client";
import { useState } from "react";

const OwnDropDown = ({ selected, setSelected }) => {
  const [isClick, setIsClick] = useState(false);
  const options = ["React", "Vue", "Angular", "Next"];
  return (
    <div className="container">
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
