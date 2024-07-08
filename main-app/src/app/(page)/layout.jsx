"use client";
import OwnDropDown from "@/components/OwnDropDown";
import { useEffect, useState } from "react";

export default function PageLayout({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(width);
  return (
    <html lang="en">
      <body>
        <OwnDropDown />
        {children}
      </body>
    </html>
  );
}
