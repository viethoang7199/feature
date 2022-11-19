import './App.css';
import FormSaveDay from './components/FormSaveDay/FormSaveDay';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DayList from './components/DayList/DayList';

function App() {

  return (
    <div className='app'>
      <Container>
        <h1 className='title'>Nhắc nhở ngày quan trọng của bạn</h1>
        <Row className='main'>
          <Col><FormSaveDay /></Col>
          <Col><DayList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
