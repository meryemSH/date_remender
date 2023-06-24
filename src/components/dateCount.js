
import { Col,Row } from 'react-bootstrap';
import data from '../data';
 
function DateCount(){
    return (
   <Row className='justify-content-center'>
        <Col sm='8' >
            Vous avez {data.length} rendez-vous aujourd'hui
        </Col>
</Row> 
)};


export default DateCount;