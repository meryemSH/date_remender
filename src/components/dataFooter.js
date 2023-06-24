import { Col, Row } from 'react-bootstrap';

function Footer(){
    return(
        <Row className='justify-content-center my-2 '>
        <Col sm='8' className='d-flex justify-content-between'>
          <button className='btn-style p-1'>Supprimer Tout</button>
          <button className='btn-style p-1'>Afficher Tout</button>
        </Col>
      </Row>
    )
}

export default Footer;