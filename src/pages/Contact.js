import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Container fluid className="contact-container text-center">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      <Row className="justify-content-center">
        <Col md={6} sm={10} xs={12}>
          <motion.div
            className="contact-info"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:saibharat20@gmail.com">saibharat20@gmail.com</a>
            </p>
            <p className="contact-item">
              <FaLinkedin className="contact-icon" />
              <a href="https://www.linkedin.com/in/saibharadwajgundeboina" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/saibharadwajgundeboina
              </a>
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
