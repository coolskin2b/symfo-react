// == Import : npm
import React from 'react'
import {Container, Jumbotron} from "react-bootstrap";

const App = () => (
    <Container className="p-3">
        <Jumbotron className="pb-1">
            <h1 className="header">Welcome To React-Bootstrap</h1>
            <h2 className="header">Using Sass with custom theming</h2>
            <hr />
            <p>
                You can check further in information on the official Bootstrap docs{' '}
                <a
                    href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                .
            </p>
        </Jumbotron>
    </Container>
)

// == Export
export default App