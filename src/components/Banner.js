import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/newbannerpic.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Data Analyst", "Data Scientist"];
  const period = 200;
  const skills = [
    "Python",
    "Spark",
    "Zeppelin",
    "Kafka",
    "TensorFlow",
    "Keras",
    "R",
    "Tableau",
    "PostgreSQL",
    "AWS",
    "Google Cloud", // Add more skills here
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => Math.max(50, prevDelta / 2));
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <div className="content-box">
                    {" "}
                    {/* New div wrapper */}
                    <span className="tagline">Welcome to my Portfolio :)</span>
                    <h1>
                      {`I'm an aspiring `}{" "}
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      I'm Surya Pranav Sukumaran, a recent Boston University
                      graduate with a Master's degree in Applied Data Analytics.
                      <p></p>
                      My technical skills extends to robust technologies like
                      Apache Spark and Kafka for big data processing, TensorFlow
                      for building and deploying machine learning models, and
                      PostgreSQL for database design and management. I am also
                      proficient in cloud computing platforms, including AWS and
                      Google Cloud, which are integral to managing scalable
                      solutions. My favourite language is Python because of it's
                      extensive capabilities and continued support within the
                      community.
                      <p></p>
                      On my site, you'll find a selection of projects that
                      showcase my hands-on experience with data-driven
                      problem-solving, as well a bit about me. Feel free to look
                      around and contact me if you have any questions!
                    </p>
                    <a href="#connect" className="button resume-button">
                      Contact Me <ArrowRightCircle size={25} />
                    </a>
                    <a
                      href="resume.pdf"
                      target="_blank"
                      className="button resume-button"
                    >
                      My Resume <ArrowRightCircle size={25} />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  {/* Skills and Technologies List */}
                  <div className="skills-box">
                    <span className="tagline">Skills and Technologies</span>
                    <ul>
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
