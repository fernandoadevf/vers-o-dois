import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá, pessoal! <span className="purple">Sou Fernando Arantes </span>
            de <span className="purple"> Balneário camboriú, Brazil</span>
            <br />
            Minha trajetória sempre esteve conectada à criatividade e à tecnologia.
            <br />
           Comecei no mundo audiovisual como videomaker e editor de vídeos, mas minha paixão pela programação me levou a dar um novo passo: a transição para a área de desenvolvimento Full Stack.
            <br />
            <br />
            Além de programar, algumas outras atividades que adoro fazer são:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Jogar
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎸 Tocar guitarra
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""Esforce-se para construir coisas que fazem a diferença!"

{" "}
          </p>
          <footer className="blockquote-footer">Fernando A</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
