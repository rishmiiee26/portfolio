import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/rishmiita26/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a
                href="https://github.com/rishmiiee26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Github Icon" />
              </a>
              <a
                href="https://www.instagram.com/rishmiita26/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
            <p>2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
