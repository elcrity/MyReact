import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './components/Cart';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import Main from './page/Main';
import Detail from './page/Detail'
import { About, Member, Location } from './page/About'
import sampleData from './sampleData';
import { useState } from 'react';
import nike from './nike';

function App() {
  const navigate = useNavigate();
  const [data,setData] = useState(sampleData);
  const [nikeData,setNikeData] = useState(nike);
  

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link >
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Main props={data} setData={setData} nikeData={nikeData} setNikeData={setNikeData}/>} />
        <Route path='/detail/:id?' element={<Detail props={data}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<Member />} />
          <Route path='location' element={<Location />} />
        </Route>
      </Routes>
      {/* <div className='bg' style={{backgroundImage:'url('+bg+')'}}></div> */}
      <Cart></Cart>
    </div>
  );
}

export default App;
