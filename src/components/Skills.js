import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experience and Skills</h2>
              <p>Here are some of the skills I have under my arsenal:</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <p>Programming Languages</p>
                  <h5>Python, R, SQL</h5>
                </div>
                <div className="item">
                  <p>Data Analysis</p>
                  <h5>Machine Learning, Data Mining, Statistics</h5>
                </div>
                <div className="item">
                  <p>Web Development</p>
                  <h5>JavaScript, HTML, CSS</h5>
                </div>
                <div className="item">
                  <p>Big Data Tools</p>
                  <h5>Spark, Zeppelin, Tableau, AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
