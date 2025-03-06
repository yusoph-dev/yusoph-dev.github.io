import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatarpc2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Full-Stack Developer</b> and{" "}
              <b className="purple">Tech Speaker</b> with a strong drive for building scalable 
              and high-performance applications. Over the years, I’ve gained valuable experience 
              in developing, optimizing, and securing modern web solutions.
              <br />
              <br />
              My expertise includes working with  
              <i>
                <b className="purple"> JavaScript, PHP, and Python</b>
              </i>, with a focus on creating robust backend systems and dynamic user experiences.
              <br />
              <br />
              I specialize in developing cutting-edge{" "}
              <i>
                <b className="purple">Web Technologies and Scalable Cloud Solutions</b>
              </i>, 
              integrating AI, and ensuring security best practices in software development.
              <br />
              <br />
              I am highly proficient in modern frameworks and backend technologies such as{" "}
              <i>
                <b className="purple">Node.js, Flask, Laravel</b>
              </i>, and I enjoy crafting innovative solutions using{" "}
              <b className="purple">React.js, Vue.js, Next.js, and Adonis.js</b>.
              <br />
              <br />
              Aside from coding, I actively engage in **tech talks and mentorship**, sharing insights on{" "}
              <b className="purple">Git, Cloud Technologies, and Cybersecurity</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yusoph-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yusoph"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yulyull"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
