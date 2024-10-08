import FinalDropDown from "@/components/FinalDropDown";
import Image from "next/image";
import AboutUsWebBanner from "../../../../public/AboutUsWebBanner.png";
import AboutUsMobileBanner from "../../../../public/AboutUsMobileBanner.png";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-full flex flex-col gap-6 order-2 lg:order-1 mt-7 mb-6">
          <h1 className="staticHeading">About Us</h1>
          <Image src={AboutUsWebBanner} alt="About us Banner" priority className="w-full hidden sm:block" />
          <Image src={AboutUsMobileBanner} alt="About us Banner" priority className="w-full block sm:hidden"  />
        </div>
        <FinalDropDown />
        <div className="w-full sm:w-3/4 order-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          sapiente nulla, ut voluptatem illo molestias voluptatibus, error,
          maiores rem aliquam nihil veritatis ipsa quaerat inventore maxime!
          Sequi aut voluptatum, ab dicta provident numquam dignissimos inventore
          eligendi quisquam corporis itaque aliquam quo odio laudantium
          aspernatur delectus iste error molestias sint qui neque a beatae eos!
          Ex doloribus quasi aliquam at quidem tempora natus temporibus quo,
          accusamus itaque eligendi recusandae, perspiciatis ipsa qui ad vitae
          beatae suscipit alias incidunt eum iste cum nisi dignissimos quae. In
          dolore nemo repellendus, adipisci aliquid eveniet et obcaecati, odit
          eligendi rerum eius. Itaque blanditiis expedita accusantium
          consectetur eius nulla voluptate vero, libero aspernatur nesciunt
          eaque. Aliquid doloribus provident aut voluptatum ratione nobis
          placeat veniam, ad eveniet possimus nemo voluptates nihil iste natus
          suscipit explicabo rem praesentium ipsam impedit esse ex ullam dolorem
          quo quia. Ducimus sint nulla repudiandae eum, error fugiat illum porro
          aspernatur quasi asperiores accusamus iusto fuga doloremque ex magni
          tenetur saepe delectus assumenda! Nulla accusamus dolor quis eum
          voluptatibus eveniet vel tenetur iure nihil beatae quidem consequatur
          ex recusandae officiis, molestiae itaque aspernatur quam odio quae!
          Quos facere, enim minus amet molestias, soluta culpa reprehenderit
          magni rerum voluptate rem asperiores eos dolor? Eos optio ab sequi
          voluptatum expedita suscipit tempora omnis laudantium quam! Veniam
          debitis a id illo distinctio commodi, quisquam qui odit expedita sit
          fugiat culpa quod rem perspiciatis provident porro error? Maxime
          quibusdam dolores ea delectus ad architecto, aperiam rem perferendis
          excepturi quasi facilis quis rerum cupiditate quidem ipsam odio, vel,
          at ipsa minus omnis sequi. Illum, dolorum quae libero inventore nulla
          neque nostrum quo officia voluptates aspernatur expedita dicta in
          reprehenderit, nam placeat sit praesentium ab temporibus nobis
          possimus. Doloribus et ipsum labore deleniti odio, eveniet repellendus
          atque fugit adipisci delectus doloremque, harum provident
          necessitatibus aliquid. Quibusdam quasi vel animi.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

