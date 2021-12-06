import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPhoto from './components/ListPhoto'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputName from './components/InputName';
import SearchAlbums from './components/SearchAlbums'
import PagePagination from './components/PagePagination'


const App: React.FC = () => {
  return (
    <div>
      <Container >
        <Row >
          <Col >
            <InputName />
          </Col>
          <Col>
            <SearchAlbums />
          </Col>
        </Row>
        <Row>
          <Col >
            <ListPhoto />
          </Col>
        </Row>
        <Row>
          <Col >
            <PagePagination />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
