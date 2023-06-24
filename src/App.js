
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import data from './data.js';


function App() {

  return (
    <div className="font color-body">

        <Container className='py-5'>

          <Row className='justify-content-center'>
          <Col sm='8' >
            Vous avez {data.length} rendez-vous aujourd'hui
            </Col>
          </Row>


          <Row className='justify-content-center'>
            <Col sm='8' >
            <div className='rectangle p-3 '>
              {data.length ? (data.map((item)=>{
                return(

                  <div className='d-flex border-bottom mx-3 my-2'>
                  <img className='img-avatar'src={item.img} alt="persone_image" />
                  <div className='px-3'>
                    <p className='d-inline fs-5'>{item.name}</p>
                    <p className='fs-6'>{item.date}</p>
                  </div>
                </div>
                );
              }
              )): <h2 className='p-5 text-center'>il n'est pas de rendez-vous aujourd'hui</h2>}


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
