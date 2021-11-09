import {Link} from 'react-router-dom';
import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget.jsx';


const NavBar = () => {

    return (

    <Navbar expand="lg" bg="dark" variant="dark" class="navbar navbar-dark bg-dark" className="navbar-right">
        <Navbar.Brand className="Logo">TODO SONIDO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to={`/categories`}>Inicio</Link>
                        </Nav.Link>          
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to={`/categories/1`}>Parlantes</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={`/categories/2`}>Subwoofer</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
                </Navbar>
    )
}

export default NavBar;
