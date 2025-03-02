import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import profileImage from "../assets/profile.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container fluid className="about-container text-center">
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <Row className="justify-content-center align-items-center">
        <Col md={4} className="d-flex justify-content-center">
          <motion.img
            src={profileImage}
            alt="Sai Bharadwaj"
            className="profile-img"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </Col>
        <Col md={6} className="text-left">
          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I am <strong>Sai Bharadwaj</strong>, a passionate Full Stack Developer & Data Analyst
            with 2+ years of experience in software development and data analytics.
            I specialize in building scalable web applications, performing data-driven analysis, and
            optimizing ETL pipelines. I have worked in the automotive and financial sectors, leveraging
            technologies such as Java,Python, React, Node.js, SQL, MongoDB, DataStage, Teradata, ServiceNow, R, ETL, CI/CD, AWS, Machine Learning, and Tableau.
          </motion.p>

          <motion.div
            className="highlight-box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            <h5>💡 Passion for Technology</h5>
            <p>I love solving problems through coding and enjoy exploring new technologies.</p>
          </motion.div>

          <motion.div
            className="highlight-box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8 }}
          >
            <h5>🚀 Continuous Learning</h5>
            <p>Always eager to learn new frameworks, tools, and techniques to stay ahead in the tech world.</p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
