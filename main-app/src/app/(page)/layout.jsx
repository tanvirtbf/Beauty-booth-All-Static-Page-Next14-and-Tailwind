"use client"
import StaticDropDown from "@/components/StaticDropDown";
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
  console.log(width)
  return (
    <html lang="en">
      <body>
        <StaticDropDown />
        {children}
      </body>
    </html>
  );
}
