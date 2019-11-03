import React from 'react';
import { ThemeProvider } from "styled-components";
import { Col, Row} from 'react-styled-flexboxgrid'

const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Dog calendar</div>
      <Row>
        <Col md={3}>1</Col>
        <Col md={3}>2</Col>
        <Col md={3}>3</Col>
        <Col md={3}>4</Col>
        <Col md={3}>5</Col>
        <Col md={3}>6</Col>
      </Row>
      <Row>
        <Col md={3}>1</Col>
        <Col md={3}>2</Col>
        <Col md={3}>3</Col>
        <Col md={3}>4</Col>
        <Col md={3}>5</Col>
        <Col md={3}>6</Col>
      </Row>
      <Row>
        <Col md={3}>1</Col>
        <Col md={3}>2</Col>
        <Col md={3}>3</Col>
        <Col md={3}>4</Col>
        <Col md={3}>5</Col>
        <Col md={3}>6</Col>
      </Row>
      <Row>
        <Col md={3}>1</Col>
        <Col md={3}>2</Col>
        <Col md={3}>3</Col>
        <Col md={3}>4</Col>
        <Col md={3}>5</Col>
        <Col md={3}>6</Col>
      </Row>
    </ThemeProvider>
  );
}

export default App;
