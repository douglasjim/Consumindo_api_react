import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Corpo from './Corpo';
import Apk from './Apk';
import Header from './Header';


function App (props) {
  return (
    <div style={{background:"black"}}>
      <Header />
      <Container style={{padding:"10px"}}>  
        <Row >  
          <Corpo />
          <Apk />
        </Row>
      </Container>
      
    </div>
  )
}

 


export default App;
