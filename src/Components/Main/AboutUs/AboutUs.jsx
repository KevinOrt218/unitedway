import Banner from "../../Banner/Banner";
import "./AboutUs.css";
import { aboutinfo } from "../../../Utilities/infoAboutUs";

function AboutUs() {
  return (
    <section>
      {Object.values(aboutinfo).map((banner, i) => {
        return (
          <div key={i}>
            <Banner
              paragraph={banner.paragraph}
              img={banner.img}
              position={banner.position}
            />
            <p className="banner-subtext">{banner.subText}</p>{" "}
            {/* Renderiza el texto debajo del banner */}
          </div>
        );
      })}
    </section>
  );
}

export default AboutUs;
