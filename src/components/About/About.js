import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                            textAlign: "left",
                        }}
                    >
                        <h1
                            style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                        >
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img
                            src={laptopImg}
                            alt="about"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "50px" }}
                >
                    <Techstack iconName="devicon-devicon-plain" />
                    <Techstack iconName="devicon-angularjs-plain" />
                    <Techstack iconName="devicon-css3-plain" />
                    <Techstack iconName="devicon-javascript-plain " />
                    <Techstack iconName="devicon-react-original-wordmark" />
                    <Techstack iconName="devicon-tailwindcss-plain" />
                    <Techstack iconName="devicon-less-plain-wordmark" />
                    <Techstack iconName="devicon-nextjs-original" />

                    <Techstack iconName="devicon-bootstrap-plain-wordmark" />
                </Row>
                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "50px" }}
                >
                    <Techstack iconName="cib-visual-studio-code" />
                    <Techstack iconName="devicon-git-plain-wordmark" />{" "}
                    <Techstack iconName="cib-github" />
                    <Techstack iconName="devicon-npm-original-wordmark" />
                    <Techstack iconName="cib-postman" />
                    <Techstack iconName="cib-heroku" />
                </Row>
                <Github />
            </Container>
        </Container>
    );
}

export default About;
