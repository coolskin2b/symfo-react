import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";


const Marketing = () => (
    <Container>
        <Row>
            <Col xs={12} md={4} className="text-center">
                <Image src="https://loremflickr.com/171/180" roundedCircle />
                    <h2 >tet </h2>
                    <p className="text-justify">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna.</p>
                <p><Button href="#">Je suis un bouton</Button></p>
            </Col>
            <Col xs={12} md={4} className="text-center">
                <Image src="https://loremflickr.com/171/180" roundedCircle />
                <h2 >tet </h2>
                <p className="text-justify">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                    ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna.</p>
                <p><Button href="#">Je suis un bouton</Button></p>
            </Col>
            <Col xs={12} md={4} className="text-center">
                <Image src="https://loremflickr.com/171/180" roundedCircle />
                <h2 >tet </h2>
                <p className="text-justify">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                    ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna.</p>
                <p><Button href="#">Je suis un bouton</Button></p>
            </Col>
        </Row>
    </Container>
        );

export default Marketing;