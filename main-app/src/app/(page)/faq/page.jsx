import Image from "next/image";
import FaqWebBanner from "../../../../public/faqWebBanner.png";

const Faq = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-full flex flex-col gap-6 order-2 sm:order-1 mt-7 mb-6">
          <h1 className="staticHeading">Frequently Asked Questions</h1>
          <Image src={FaqWebBanner} alt="faq Banner" priority />
        </div>
      </div>
    </div>
  );
};

export default Faq;
