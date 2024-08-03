import Image from "next/image";
import FaqWebBanner from "../../../../public/faqWebBanner.png";

const Faq = () => {
  return (
    <div className="container">
      <div className="w-full">
        <Image src={FaqWebBanner} alt="faq Banner" priority />
      </div>
    </div>
  );
};

export default Faq;
