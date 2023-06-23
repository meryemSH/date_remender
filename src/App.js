
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="font color-body">

        <Container className='py-5'>

          <Row className='justify-content-center'>
            <Col sm='8' >
            Vous avez 4 rendez-vous aujourd'hui
            </Col>
          </Row>


          <Row className='justify-content-center'>
            <Col sm='8' >
            <div className='rectangle'>
              
            </div>
            </Col>
          </Row>


          <Row className='justify-content-center my-2 '>
            <Col sm='8' className='d-flex justify-content-between'>
              <button className='btn-style p-1'>Supprimer Tout</button>
              <button className='btn-style p-1'>Afficher Tout</button>
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default App;
