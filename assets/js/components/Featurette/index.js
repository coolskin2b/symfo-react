import React from 'react';
import {Col, Image, Row} from "react-bootstrap";


const Featurette = () => (
    <>
        <hr/>
        <Row>
            <Col md={7} xs={12}>
                <h2>
                    First featurette heading. <span class="text-muted">It'll blow your mind.</span>
                </h2>
                <p className="text-center">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
                <p className="text-center">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
                <p className="text-center">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
            </Col>
            <Col md={5} xs={12} className="text-center">
                <Image src="https://picsum.photos/500/500" fluid />
            </Col>
        </Row>
    </>
);

export default Featurette;