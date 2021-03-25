import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import up1 from "../../Assets/Projects/up1.PNG";
import up3 from "../../Assets/Projects/up3.PNG";
// import editor from "../../Assets/Projects/afri.PNG";
// import evisit from "../../Assets/Projects/evisit.PNG";
import green from "../../Assets/Projects/green.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evisit}
              isBlog={false}
              title="Evisit"
              description="A visitor management system used to Keep tabs on your guests, deliveries and everything in between with our more business oriented option that promises to promote organization and efficiency."
              link="https://evisit.com.ng/"
            />
            
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={up1}
              isBlog={false}
              title="Adspace"
              description="A Platform for booking, creating, maintaining and selling Adspaces. With feature for  getting  influencer "
              link="https://adspace-web.vercel.app/planning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={up3}
              isBlog={false}
              title="Capitalluxury"
              description="An Uber like platform, For maintaining and aiding transportation"
              link="http://capitalluxury.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={green}
              isBlog={false}
              title="Greenpeg Academy"
              description="A platform aimed at bridging the knowledge gaps with emphasis on hands-on vendor- neutral technical principles."
              link="https://www.greenpegacademy.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Afric Connect"
              description="AfricConnect is a global network comprising of African genealogy, historical records, insights, and stories intended to connect and help people of African descent trace their roots through the building of family trees."
              link="https://africconnect.com/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
