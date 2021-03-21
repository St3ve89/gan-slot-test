import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { GamesProvider } from './context/gamesContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <GamesProvider>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardList />
          </Col>
        </Row>
      </Container>
    </GamesProvider>
  );
}

export default App;
