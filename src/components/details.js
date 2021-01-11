import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class Details extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={7}>
                        <h5>
                            <b className='name'>Dawid Herkt</b><br />
                            <a href="tel:+48724288696" className="links">
                                <i className="fas fa-phone-alt"></i> 724 288 696</a><br />
                            <a href="mailto:dawid.herkt1@gmail.com" className="links">
                                <i className="fas fa-envelope"></i> dawid.herkt1@gmail.com</a><br />
                            <a href="https://github.com/PythonXCII" rel="noreferrer" target="_blank" className="links">
                                <i className="fab fa-github"></i> GitHub</a><br />
                            <a href="https://www.linkedin.com/in/dawid-herkt-737821114/" rel="noreferrer" target="_blank" className="links">
                                <i className="fab fa-linkedin"></i> LinkedIn</a>
                        </h5>
                    </Col>
                    <Col><img id="photo" src="assets/photo.jpg" alt="img" /></Col>
                </Row>
            </Container>
        )
    }
}

export default Details;