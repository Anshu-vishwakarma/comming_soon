import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
function MyNav() {
    return (
        <>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
     
     
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
}

export default MyNav
