import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../../img/Akash3.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {  MdOutlineContentCopy } from "react-icons/md";
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
            I am a  <i><b className="purple">Full Stack Developer </b></i>, passionate about building digital products that improve everyday experience for people.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> MERN Stack </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              I love to work on exciting projects that test what I've learnt, 
              also look forward to work in a challenging environment which gives me an opportunity to prove myself & provides me with an atmosphere in which I can learn & grow.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={photo} className="img-fluid border 1rem border-dark rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p className="contact-font">
              Email : <a className="purple mailto" href="mailto:info.coldfired@gmail.com"><p  onClick={()=> {navigator.clipboard.writeText("info.coldfired@gmail.com") ;alert("Email id: info.coldfired@gmail.comcoppied ") }} >info.coldfired@gmail.com <MdOutlineContentCopy/></p></a>
            </p>
            <p className="contact-font">
              Mobile : <span className="purple"><p onClick={()=> {navigator.clipboard.writeText("+91 8637838646"); alert("phone no: +91 8637838646 coppied ")}} > +91 863783864 <MdOutlineContentCopy/></p></span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IAkashMondal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-mondal-859b4b228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
