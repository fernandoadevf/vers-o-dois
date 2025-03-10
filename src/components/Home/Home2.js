import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fernando foto.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              UM <span className="purple"> POUCO </span> SOBRE MIM
            </h1>
            <p className="home-about-body">
            Me apaixonei por programação e pelo menos aprendi alguma coisa, eu acho… 🤷
              <br />
              <br />Tenho vasta expêriencia em
              <i>
                <b className="purple"> produção audiovisual e motion Design </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são a &nbsp;
              <i>
                <b className="purple">construção de novas tecnologias da Web </b> e aplicativos.{" "}
                <b className="purple">
            
                </b>
              </i>
              <br />
              <br />
              
            Sempre que possível, também aplico minha paixão por desenvolver produtos
            com 
            <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library e Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
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
            <h1>ME ENCONTRE</h1>
            <p>
              vamos nos <span className="purple">conectar </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fernandoadevf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fernandoarantesdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arantes.media/"
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
