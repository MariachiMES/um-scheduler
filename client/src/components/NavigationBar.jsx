import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from 'react'



export default function NavigationBar() {
  

  const [time, setTime] = useState(new Date())
  useEffect(()=> {
    const timer = setInterval(()=> {setTime(new Date())}, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Streamline</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Clock In</Nav.Link>
            <Nav.Link href="#pricing">Week View</Nav.Link>
            <NavDropdown title="Views" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Utilization</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Whoa
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Account</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {time.toLocaleTimeString()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
