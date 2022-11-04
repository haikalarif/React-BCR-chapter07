import React from 'react'
import { Button, Container, Form, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import logo from '../public/images/logo.png'
import '../public/css/style.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const HeaderNavbar = () => {
    return (
        <header>
            <Navbar expand='sm' bg='light' className='pt-4' aria-label='Eighth navbar example'>
                <Container>
                    <Navbar.Brand href='#'><img src={logo} alt='Logo' /></Navbar.Brand>
                    <NavbarToggle aria-controls={'offcanvasNavbar-expand-sm'} />
                    <Navbar.Offcanvas id={'offcanvasNavbar-expand-sm'} aria-labelledby={'offcanvasNavbarLabel-expand-sm'} placement='end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-sm'}>
                                <span>BCR</span>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='ms-auto mb-2 mb-lg-0'>
                                <Nav.Link href='#our-service'>Our Service</Nav.Link>
                                <Nav.Link href='#why-us'>Why Us</Nav.Link>
                                <Nav.Link href='#testimonial'>Testimonial</Nav.Link>
                                <Nav.Link href='#faq'>FAQ</Nav.Link>
                            </Nav>
                            <Form>
                                <Button className='btn btn-success button_register d-flex flex-row justify-content-center align-items-center'>Register</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}

export default HeaderNavbar