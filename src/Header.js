import React from 'react'
import{Navbar,Container,Nav,Col,Toggle,Image} from 'react-bootstrap'
import{useEffect,useState}from'react';
import './Header.css';


function Header() {


  const [show, handleShow] = useState([false])
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY >100){
        handleShow(true)
      }  else handleShow(false)
      
    });
    return()=>{
      window.removeEventListener("scroll");
    };
    
  }, []);
    return (


<div className={`nav ${show &&"nav_black"}`}>
  {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="logo"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       
        
      </Nav>
      <Nav>
       
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar> */}
<img className="logo"
src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
<img className="avtar"
src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"/>

</div>



)
}

export default Header
