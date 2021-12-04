import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPhoto from './components/ListPhoto'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputName from './components/InputName';
import SearchAlboms from './components/SearchAlboms'


function App() {
  return (
    <div>
      <Container >
        <Row >
          <Col >
            <InputName />
          </Col>
          <Col>
            <SearchAlboms />
          </Col>
        </Row>
        <Row>
          <Col >
            <ListPhoto />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
