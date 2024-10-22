import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { meta } from "../../content_option";

export const Detail = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <HelmetProvider>
      <Container fluid className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio Detail | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 align-items-center"> 
          <Col lg={6} className="text-center"> 
            {/* <img src={data.img} alt="Project" className="project-img" /> */}
            <img src={data.imgframe} alt="frame"className="frame-img" />
            <h2>What I Do</h2>
            <p>{data.whatido}</p>
          </Col>
          <Col lg={6} className="project-content">
            <h2>Project Details</h2>
            <p>{data.description}</p>
            <h2>Project Overview</h2>
            <p>{data.overview}</p>
            <h2>Project Purpose</h2>
            <p>{data.purpose}</p>
            {/* <a href={data.link}target="_blank" rel="noreferrer">view project</a> */}
            <a href={data.link} target="_blank" rel="noreferrer">
              <button className="fancy-button">View Project</button>
            </a>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
