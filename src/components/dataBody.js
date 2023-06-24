import { Col, Row } from 'react-bootstrap';
import data from '../data';

function Body(){
    return(
<Row className='justify-content-center'>
<dCol sm='8' >
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
</dCol>
</Row>
)}
export default Body;