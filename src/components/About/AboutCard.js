import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Taiwo Sulaimon </span>
                        from <span className="purple">Lagos, Nigeria.</span>
                        <br />I am A Front End Developer.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i> Playing
                            Games
                        </li>
                        <li className="about-activity">
                            <i className="far fa-hand-point-right"></i>{" "}
                            Travelling
                        </li>
                    </ul>

                    <footer className="blockquote-footer">Sulaimon</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
