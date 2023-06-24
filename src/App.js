
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

import DateCount from './components/dateCount';

import Body from './components/dataBody';
import Footer from './components/dataFooter';


function App() {

  return (
    <div className="font color-body">

        <Container className='py-5'>

          <DateCount/>
          <Body/>
          <Footer/>
          
        </Container>

    </div>
  );
}

export default App;
