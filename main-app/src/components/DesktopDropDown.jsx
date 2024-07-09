import Image from "next/image";
import Link from "next/link";
import AboutusIcon from "../../public/aboutusIcon.png";
import CareerIcon from "../../public/careerIcon.png";
import ContactIcon from "../../public/contactusIcon.png";
import FaqIcon from "../../public/faqIcon.png";
import PrivacyIcon from "../../public/privacypolicyIcon.png";
import ReturnIcon from "../../public/returnIcon.png";
import TermsIcon from "../../public/termsIcon.png";

const DesktopDropDown = () => {
  return (
    <div className="w-56 flex flex-col gap-2">
      <div className="desktop-dropdown">
        <Link href={"/aboutus"} className="flex gap-4">
          <Image src={AboutusIcon} />
          <span>About Us</span>
        </Link>
      </div>
      <div className="desktop-dropdown">
        <Link href={"/privacypolicy"} className="flex gap-4">
          <Image src={PrivacyIcon} />
          <span>Privacy Policies</span>
        </Link>
      </div>
      <div className="desktop-dropdown">
        <Link href={"/terms"} className="flex gap-4">
          <Image src={TermsIcon} />
          <span>Terms & Conditions</span>
        </Link>
      </div>
      <div className="desktop-dropdown">
        <Link href={"/returnpolicy"} className="flex gap-4">
          <Image src={ReturnIcon} />
          <span>Return & Refund Policy</span>
        </Link>
      </div>
      <div className="desktop-dropdown">
        <Link href={"/"} className="flex gap-4">
          <Image src={ContactIcon} />
          <span>Contact Us</span>
        </Link>
      </div>
      <div className="desktop-dropdown">
        <Link href={"/"} className="flex gap-4">
          <Image src={CareerIcon} />
          <span>Career</span>
        </Link>
      </div>
      <div className="desktop-dropdown">
        <Link href={"/"} className="flex gap-4">
          <Image src={FaqIcon} />
          <span>FAQ</span>
        </Link>
      </div>
    </div>
  );
};

export default DesktopDropDown;
