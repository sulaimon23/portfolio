import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import capital from "../../Assets/capital.png";
import buylike from "../../Assets/buylike.png";
import adspace from "../../Assets/adspace.png";

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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={adspace}
                            isBlog={false}
                            title="Adspace"
                            description="A Platform for booking, creating, maintaining and selling Adspaces. With feature for  getting  influencers, making payments and also creating media plans "
                            link="https://www.adspace.ng/planning?d=1637486610615"
                        />
                    </Col>
                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={buylike}
                            isBlog={false}
                            title="Buylike dealers"
                            description="buylikedealers is an auctioning site where you bid on your selected car, 
                            after which you make final payment and then buylikedealers deliver the car to you or you pick 
                            up"
                            link="https://www.buylikedealers.com/vin"
                        />
                    </Col>

                    <Col md={5} className="project-card">
                        <ProjectCard
                            imgPath={capital}
                            isBlog={false}
                            title="Capitalluxury"
                            description="An Uber like platform, For maintaining, Tracking and aiding transportation"
                            link="http://capitalluxury.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
