import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Taiwo Sulaimon.pdf";

function Resume() {
    return (
        <Container fluid className="resume-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <Resumecontent
                            title="Front End Developer [Mecho Autotech]"
                            date="2021"
                            content={[
                                "Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.",
                                " Reviewed and tested and tested customer-facing prototypes before deployment, applying best practice diagnosing techniques to verify usability.",
                            ]}
                        />
                        <Resumecontent
                            title="Lead Developer [Adspace]"
                            date="2020"
                            content={[
                                "Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.",
                                " Reviewed and tested and tested customer-facing prototypes before deployment, applying best practice diagnosing techniques to verify usability.",
                            ]}
                        />
                        <h3 className="resume-title">Past Activities</h3>
                        <Resumecontent
                            title="Code Tutor [Brentech Robotics]"
                            content={[
                                "Preparing and creating materials, coursework, and homework for students.",
                            ]}
                        />
                        <Resumecontent
                            title="Web Developer [I.D.C]"
                            content={[
                                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
                            ]}
                        />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                            title="Computer Science [Yaba Tech] "
                            date="2014 - 2017"
                        />
                        <Resumecontent title="HNG Internship [HNGi7]" date="2020" />
                        <Resumecontent title="Desktop Publishing [Amazeen] " date="2019" />
                        <Resumecontent
                            title="Auto CAD Design [Global Techs] "
                            date="2018"
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
