import {Link} from 'react-router-dom';
import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget.jsx';
import imagen from './logo.png'


const NavBar = () => {

    return (

    <Navbar className="navbar">
        <Navbar.Brand>
        <Link to={`/`}><img src={imagen} className="logo" alt="Logotipo Todo Sonido"/></Link>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Link className="letrasnav" to={`/`}>Inicio</Link>
                    </Nav.Link>          
                <NavDropdown title="Categorias" id="navegar">
                    <NavDropdown.Item>
                        <Link className="sub" to={`/categories/1`}>Parlantes</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className="sub" to={`/categories/2`}>Subwoofer</Link>
                    </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
                </Navbar>
    )
}

export default NavBar;
