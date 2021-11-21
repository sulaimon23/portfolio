import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            Front End Developer with over 3 years professional
                            working experience. who is confident that you will
                            find my expertise parallel with your requirements.
                            Owing to extensive experience in creating and
                            managing processes and also experienced working with
                            teams to produce impact-full leading-edge
                            Technologies that engage customers and deliver
                            business results. Well-versed in design standards
                            and user preferences.
                            <br />
                            <br />
                            I fell in love with programming and I have at least
                            learnt something, I think… 🤷‍♂️
                            <br />I am fluent in
                            <i>
                                <b className="purple ml-2">Javascript. </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products with
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple">
                                    {" "}
                                    Angular.js, React.js, Next.js
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
                            <div className="mine"></div>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/sulaimon23"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="http://linkedin.com/in/taiwo-sulaimon-9952b6179"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://tsulaimon@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <i className="fa fa-envelope"></i>
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
