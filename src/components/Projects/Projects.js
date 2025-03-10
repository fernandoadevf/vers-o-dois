import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Sem nome (1920 x 1080 px) (2).png";
import emotion from "../../Assets/Projects/Cover.png";
import editor from "../../Assets/Projects/nerby.png";
import chatify from "../../Assets/Projects/CAPA YOUTUBE ARCA DA PRESENÇA.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/TELA2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trabalhos <strong className="purple">recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
        
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Clipe Oficial: Arca da Presença"
              description="Arca da Presença é um projeto onde a estética visual e a atmosfera espiritual se encontram para traduzir a essência da música em imagens. Como diretor criativo, meu foco foi construir uma narrativa visual que conduzisse o espectador a uma imersão profunda, alinhando luz, cenografia e movimento para refletir a intensidade e a mensagem dessa canção."
              demoLink="https://www.youtube.com/watch?v=47TOJUlhhAA&list=RDMM47TOJUlhhAA&start_radio=1"      
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Travelgram"
              description="página web para uma rede social, nomeada Travelgram. 🌍
O projeto, idealizado pela plataforma Rocketseat, me desafiou a estruturar e estilizar uma página de forma eficiente, aplicando conceitos aprendidos ao longo das aulas.."
              demoLink="https://fernandoadevf.github.io/TRAVELGRAM/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nearby mobile"
              description="Um projeto fantástico criado pelo Rodrigo Gonçalves, que explora os mais diversos conceitos em uma aplicação mobile:
- Propriedades
- Estados e Componentes
- Expo Framework
- Interface com StyleSheet
- Bottom Sheet
- Roteamento com ExpoRouter
- Consumo de API com Axios
- Leitura de QrCode com câmera
- Exibição de Mapa

E para elevar o nível, reforça a robustez do projeto com tipagem forte usando TypeScript. 💪🏽"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.linkedin.com/posts/fernandoarantesdev_nlwpocket-rocketseat-reactnative-activity-7273475192381657088-Cp69?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0cngkBs7z8DoKPkFJEwGAZtd8lzByO-lo"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Bentobox"
              description="um projeto pessoal de agregador de links para usar como cartão de visitas online."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://fernandoadevf.github.io/LINK-BIO-BENTOBOX/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Devlinks"
              description="O DevLinks é um agregador de links para usar como cartão de visitas online."
              ghLink="https://fernandoadevf.github.io/CART-DE-VISITAS/"
                demoLink="https://fernandoadevf.github.io/CART-DE-VISITAS/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
